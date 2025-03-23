"use server";

import nodemailer from "nodemailer";

export default async function sendEmail(formData: FormData) {
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

    return { success: true, message: "상담신청이 완료됐습니다" };
  } catch (error) {
    console.error("이메일 전송 오류:", error);
    return {
      success: false,
      message: "이메일 전송에 실패했습니다. 나중에 다시 시도해주세요.",
    };
  }
}
