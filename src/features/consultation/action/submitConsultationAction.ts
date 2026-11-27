"use server";

import sendConsultationEmail from "../api/sendConsultationEmail";
import {
  looksLikeBot,
  parseConsultation,
  type ConsultationState,
} from "../model/consultation";

export default async function submitConsultationAction(
  _prev: ConsultationState,
  formData: FormData,
): Promise<ConsultationState> {
  // 봇이면 실제로 보내지 않고 성공한 것처럼 응답 (봇이 걸러졌다는 걸 모르게)
  if (looksLikeBot(formData)) return { status: "success" };

  const parsed = parseConsultation(formData);
  if (!parsed.ok) {
    return {
      status: "error",
      message: "입력 내용을 확인해 주세요.",
      fieldErrors: parsed.fieldErrors,
      values: parsed.values,
    };
  }

  try {
    await sendConsultationEmail(parsed.data);
  } catch (err) {
    console.error("[consultation] 이메일 전송 실패", err);
    return {
      status: "error",
      message:
        "일시적인 오류로 접수되지 않았습니다. 잠시 후 다시 시도하시거나 전화로 문의해 주세요.",
      values: parsed.data,
    };
  }

  return { status: "success" };
}
