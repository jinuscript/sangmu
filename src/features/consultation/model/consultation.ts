// 상담 신청 폼에서 공통으로 쓰는 타입, 선택지, 검증 로직 (클라이언트·서버 양쪽에서 import 가능한 순수 함수)

export const CATEGORIES = [
  "민사",
  "형사",
  "가사·이혼",
  "노동",
  "부동산",
  "기업·계약",
  "기타",
] as const;

export type Category = (typeof CATEGORIES)[number];

export type Consultation = {
  name: string;
  phone: string;
  email: string;
  category: Category;
  preferredTime: string;
  message: string;
};

export type FieldErrors = Partial<Record<keyof Consultation | "consent", string>>;

export type ConsultationState =
  | { status: "idle" }
  | { status: "success" }
  | {
      status: "error";
      message: string;
      fieldErrors?: FieldErrors;
      values?: Partial<Consultation>;
    };

// 봇이 너무 빨리 제출하는 경우를 걸러내는 최소 작성 시간(ms)
export const MIN_FILL_TIME_MS = 3_000;

export const LIMITS = {
  name: 50,
  phone: 20,
  email: 254,
  preferredTime: 100,
  message: 3_000,
} as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// 숫자, 하이픈, 공백, 괄호, + 만 허용 (숫자 자릿수는 별도 확인)
const PHONE_RE = /^[0-9+\-()\s]+$/;

function str(formData: FormData, key: string): string {
  const v = formData.get(key);
  return typeof v === "string" ? v.trim() : "";
}

export function parseConsultation(
  formData: FormData,
):
  | { ok: true; data: Consultation }
  | { ok: false; fieldErrors: FieldErrors; values: Partial<Consultation> } {
  const values = {
    name: str(formData, "name"),
    phone: str(formData, "phone"),
    email: str(formData, "email"),
    category: str(formData, "category") as Category,
    preferredTime: str(formData, "preferredTime"),
    message: str(formData, "message"),
  };
  const consent = formData.get("consent") === "on";

  const errors: FieldErrors = {};

  if (!values.name) errors.name = "이름을 입력해 주세요.";
  else if (values.name.length > LIMITS.name)
    errors.name = `이름은 ${LIMITS.name}자 이내로 입력해 주세요.`;

  const digits = values.phone.replace(/\D/g, "");
  if (!values.phone) errors.phone = "연락처를 입력해 주세요.";
  else if (
    values.phone.length > LIMITS.phone ||
    !PHONE_RE.test(values.phone) ||
    digits.length < 9 ||
    digits.length > 15
  )
    errors.phone = "올바른 전화번호를 입력해 주세요.";

  // 이메일은 선택 항목. 입력했다면 형식 확인
  if (
    values.email &&
    (values.email.length > LIMITS.email || !EMAIL_RE.test(values.email))
  )
    errors.email = "올바른 이메일 주소를 입력해 주세요.";

  if (!CATEGORIES.includes(values.category))
    errors.category = "상담 분야를 선택해 주세요.";

  if (values.preferredTime.length > LIMITS.preferredTime)
    errors.preferredTime = `${LIMITS.preferredTime}자 이내로 입력해 주세요.`;

  if (!values.message) errors.message = "상담 내용을 입력해 주세요.";
  else if (values.message.length > LIMITS.message)
    errors.message = `상담 내용은 ${LIMITS.message.toLocaleString()}자 이내로 입력해 주세요.`;

  if (!consent)
    errors.consent = "개인정보 수집·이용에 동의해 주셔야 상담 신청이 가능합니다.";

  if (Object.keys(errors).length > 0)
    return { ok: false, fieldErrors: errors, values };
  return { ok: true, data: values };
}

/** 스팸 봇으로 보이면 true */
export function looksLikeBot(formData: FormData, now = Date.now()): boolean {
  // 1) 화면에 보이지 않는 미끼 입력란(honeypot)이 채워져 있으면 봇
  if (str(formData, "website")) return true;
  // 2) 폼을 연 지 너무 빨리 제출했으면 봇
  //    (값이 비어 있으면 JavaScript를 실행하지 않는 단순 봇으로 간주)
  const startedAt = Number(str(formData, "startedAt"));
  if (
    !Number.isFinite(startedAt) ||
    startedAt <= 0 ||
    now - startedAt < MIN_FILL_TIME_MS
  )
    return true;
  return false;
}
