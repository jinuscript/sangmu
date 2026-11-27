// 상담 요청을 변호사 이메일로 보내는 서버 전용 코드
import { Resend } from "resend";
import type { Consultation } from "../model/consultation";

// 도메인 인증 전에는 Resend 테스트 발신 주소를 사용 (Resend 가입 이메일로만 수신 가능)
const DEFAULT_FROM = "온라인 상담 <onboarding@resend.dev>";

function getConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONSULTATION_TO_EMAIL;
  if (!apiKey) throw new Error("RESEND_API_KEY 환경변수가 설정되지 않았습니다.");
  if (!to) throw new Error("CONSULTATION_TO_EMAIL 환경변수가 설정되지 않았습니다.");
  return {
    apiKey,
    to: to
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean),
    from: process.env.CONSULTATION_FROM_EMAIL || DEFAULT_FROM,
  };
}

let client: Resend | undefined;

// 사용자 입력을 HTML에 넣기 전에 반드시 이스케이프
function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// 메일 제목 등 한 줄 텍스트에서 줄바꿈 제거 (헤더 인젝션 방지)
function oneLine(s: string): string {
  return s.replace(/[\r\n]+/g, " ");
}

export default async function sendConsultationEmail(
  c: Consultation,
): Promise<void> {
  const { apiKey, to, from } = getConfig();
  client ??= new Resend(apiKey);

  const receivedAt = new Intl.DateTimeFormat("ko-KR", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Asia/Seoul",
  }).format(new Date());

  const rows: [string, string][] = [
    ["이름", c.name],
    ["연락처", c.phone],
    ["이메일", c.email || "(미입력)"],
    ["상담 분야", c.category],
    ["연락 가능 시간", c.preferredTime || "(미입력)"],
    ["접수 시각", receivedAt],
  ];

  const footer = c.email
    ? "이 메일에 답장하면 의뢰인에게 바로 회신됩니다."
    : "의뢰인이 이메일을 남기지 않았습니다. 연락처로 연락해 주세요.";

  const text = [
    "새 온라인 상담 요청이 접수되었습니다.",
    "",
    ...rows.map(([k, v]) => `${k}: ${v}`),
    "",
    "[상담 내용]",
    c.message,
    "",
    footer,
  ].join("\n");

  const html = `<div style="font-family:-apple-system,'Apple SD Gothic Neo','Malgun Gothic',sans-serif;max-width:640px;color:#171717">
  <h2 style="margin:0 0 16px">새 온라인 상담 요청</h2>
  <table style="border-collapse:collapse;width:100%;font-size:14px">
    ${rows
      .map(
        ([k, v]) =>
          `<tr><th style="text-align:left;padding:8px 12px;background:#f5f5f5;border:1px solid #e5e5e5;width:120px;white-space:nowrap">${esc(k)}</th><td style="padding:8px 12px;border:1px solid #e5e5e5">${esc(v)}</td></tr>`,
      )
      .join("")}
  </table>
  <h3 style="margin:24px 0 8px">상담 내용</h3>
  <div style="white-space:pre-wrap;padding:12px;border:1px solid #e5e5e5;border-radius:6px;font-size:14px;line-height:1.6">${esc(c.message)}</div>
  <p style="margin-top:16px;font-size:12px;color:#737373">${footer}</p>
</div>`;

  // Resend SDK는 실패해도 예외를 던지지 않으므로 error를 직접 확인
  const { error } = await client.emails.send({
    from,
    to,
    // 의뢰인이 이메일을 남겼으면 "답장" 버튼으로 바로 회신 가능
    replyTo: c.email || undefined,
    subject: oneLine(`[상담 요청] ${c.category} · ${c.name}님`),
    text,
    html,
  });

  if (error)
    throw new Error(`Resend 전송 실패: ${error.name} - ${error.message}`);
}
