"use server";

import { cookies } from "next/headers";
import nodemailer from "nodemailer";

export default async function sendEmail(formData: FormData) {
  // 1. 이메일 상담신청 확인
  const cookieStore = await cookies();
  const submitted = cookieStore.get("email_submitted");

  if (submitted) {
    return {
      success: false,
      message: "이미 상담 신청이 완료되었습니다. 잠시 후 다시 시도해주세요.",
    };
  }

  // 2. 유효성 검사
  const name = formData.get("name");
  const phone = formData.get("phone");
  const content = formData.get("content");
  const agreement = formData.get("agreement") === "on";

  if (!name || !phone || !content) {
    return { success: false, message: "비어있는 값이 있습니다" };
  }

  if (!agreement) {
    return { success: false, message: "개인정보 동의가 필요합니다" };
  }

  // 3. 이메일 전송
  try {
    const transporter = nodemailer.createTransport({
      service: "Naver",
      host: "smtp.naver.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `상담 신청: ${name}`,
      text: `이름: ${name}\n연락처: ${phone}\n메시지:\n${content}`,
      html: `<p><b>이름:</b> ${name}</p>
             <p><b>연락처:</b> ${phone}</p>
             <p><b>메시지:</b></p>
             <p>${content}</p>`,
    });

    // 4. 이메일 전송 성공 시에 연속전송 방지 쿠키 생성
    cookieStore.set({
      name: "email_submitted",
      value: "true",
      maxAge: 300, // 5분
      path: "/",
    });

    return { success: true, message: "상담신청이 완료됐습니다" };
  } catch (error) {
    console.error("이메일 전송 오류:", error);
    return {
      success: false,
      message: "이메일 전송에 실패했습니다. 나중에 다시 시도해주세요.",
    };
  }
}
