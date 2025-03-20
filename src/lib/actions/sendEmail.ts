"use server";

import nodemailer from "nodemailer";

export default async function sendEmail(formData: FormData) {
  const name = formData.get("name");
  const phone = formData.get("phone");
  const content = formData.get("content");

  if (!name || !phone || !content) {
    console.log("🚨 오류: 모든 필드를 입력하세요.");
    return;
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

    console.log("✅ 이메일이 성공적으로 전송되었습니다!");
    return;
  } catch (error) {
    console.error("이메일 전송 오류:", error);
    return;
  }
}
