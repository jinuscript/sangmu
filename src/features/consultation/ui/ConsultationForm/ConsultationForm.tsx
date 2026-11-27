"use client";

import { useActionState, useRef } from "react";
import submitConsultationAction from "../../action/submitConsultationAction";
import {
  CATEGORIES,
  LIMITS,
  type ConsultationState,
} from "../../model/consultation";
import s from "./ConsultationForm.module.css";

const initialState: ConsultationState = { status: "idle" };

export default function ConsultationForm() {
  const [state, formAction, pending] = useActionState(
    submitConsultationAction,
    initialState,
  );

  // 폼을 연 시각. 너무 빠른 제출(봇)을 걸러내는 데 사용.
  // 페이지는 빌드 시 미리 렌더링되므로 렌더링 중에 Date.now()를 읽으면 빌드 시각이 박힘.
  // ref 콜백은 브라우저에서만 실행되고, 오류 후 폼이 다시 마운트돼도 처음 시각을 유지함.
  const startedAtRef = useRef(0);
  const stampStartedAt = (el: HTMLInputElement | null) => {
    if (!el) return;
    startedAtRef.current ||= Date.now();
    el.value = String(startedAtRef.current);
  };

  if (state.status === "success") {
    return (
      <div role="status" className={s.success}>
        <p className={s.successTitle}>상담 신청이 접수되었습니다.</p>
        <p className={s.successDesc}>
          담당 변호사가 내용을 확인한 뒤 연락드리겠습니다.
        </p>
      </div>
    );
  }

  const errors = state.status === "error" ? (state.fieldErrors ?? {}) : {};
  const values = state.status === "error" ? (state.values ?? {}) : {};

  return (
    // key: 오류 후 서버가 돌려준 값으로 입력란(비제어)을 다시 채우기 위해 다시 마운트
    <form
      key={JSON.stringify(values)}
      action={formAction}
      noValidate
      className={s.form}
    >
      <input type="hidden" name="startedAt" ref={stampStartedAt} />
      {/* 미끼 입력란: 사람에게는 보이지 않고 봇만 채움 (display:none은 일부 봇이 건너뜀) */}
      <div aria-hidden="true" className={s.honeypot}>
        <label>
          웹사이트
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className={s.row}>
        <Field label="이름" name="name" required error={errors.name}>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            maxLength={LIMITS.name}
            defaultValue={values.name}
            aria-invalid={!!errors.name || undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={s.input}
          />
        </Field>
        <Field label="연락처" name="phone" required error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            maxLength={LIMITS.phone}
            placeholder="010-1234-5678"
            defaultValue={values.phone}
            aria-invalid={!!errors.phone || undefined}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={s.input}
          />
        </Field>
      </div>

      <Field
        label="이메일"
        name="email"
        hint="선택 · 입력하시면 이메일로도 답변을 받을 수 있습니다."
        error={errors.email}
      >
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          maxLength={LIMITS.email}
          defaultValue={values.email}
          aria-invalid={!!errors.email || undefined}
          aria-describedby={errors.email ? "email-error" : "email-hint"}
          className={s.input}
        />
      </Field>

      <div className={s.row}>
        <Field label="상담 분야" name="category" required error={errors.category}>
          <select
            id="category"
            name="category"
            required
            defaultValue={values.category ?? ""}
            aria-invalid={!!errors.category || undefined}
            aria-describedby={errors.category ? "category-error" : undefined}
            className={s.input}
          >
            <option value="" disabled>
              선택해 주세요
            </option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </Field>
        <Field
          label="연락 가능한 시간"
          name="preferredTime"
          error={errors.preferredTime}
        >
          <input
            id="preferredTime"
            name="preferredTime"
            maxLength={LIMITS.preferredTime}
            placeholder="예: 평일 오후 2시 이후"
            defaultValue={values.preferredTime}
            aria-invalid={!!errors.preferredTime || undefined}
            aria-describedby={
              errors.preferredTime ? "preferredTime-error" : undefined
            }
            className={s.input}
          />
        </Field>
      </div>

      <Field
        label="상담 내용"
        name="message"
        required
        error={errors.message}
        hint="사건 경위, 현재 상황, 궁금한 점을 적어 주세요. 주민등록번호 등 민감한 정보는 적지 마세요."
      >
        <textarea
          id="message"
          name="message"
          required
          rows={8}
          maxLength={LIMITS.message}
          defaultValue={values.message}
          aria-invalid={!!errors.message || undefined}
          aria-describedby={errors.message ? "message-error" : "message-hint"}
          className={`${s.input} ${s.textarea}`}
        />
      </Field>

      <fieldset className={s.consent}>
        <legend className={s.legend}>개인정보 수집·이용 동의 (필수)</legend>
        <dl className={s.dl}>
          <dt>수집 항목</dt>
          <dd>이름, 연락처, 이메일(선택), 연락 가능 시간, 상담 내용</dd>
          <dt>이용 목적</dt>
          <dd>법률 상담 신청 접수 및 상담 진행을 위한 연락</dd>
          <dt>보유 기간</dt>
          <dd>
            상담 종료 후 1년 (관계 법령에 따라 보존이 필요한 경우 해당 기간)
          </dd>
        </dl>
        <p className={s.consentNote}>
          동의를 거부하실 수 있으나, 거부하시면 온라인 상담 신청이 불가합니다.
        </p>
        <label className={s.checkboxLabel}>
          <input
            type="checkbox"
            name="consent"
            required
            className={s.checkbox}
            aria-invalid={!!errors.consent || undefined}
            aria-describedby={errors.consent ? "consent-error" : undefined}
          />
          위 내용을 확인했으며 개인정보 수집·이용에 동의합니다.
        </label>
        {errors.consent && (
          <p id="consent-error" className={s.error}>
            {errors.consent}
          </p>
        )}
      </fieldset>

      {state.status === "error" && (
        <p role="alert" className={s.alert}>
          {state.message}
        </p>
      )}

      <button type="submit" disabled={pending} className={s.button}>
        {pending ? "접수 중…" : "상담 신청하기"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  required,
  hint,
  error,
  children,
}: {
  label: string;
  name: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={s.field}>
      <label htmlFor={name} className={s.label}>
        {label}
        {required && (
          <span className={s.required} aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      {error ? (
        <p id={`${name}-error`} className={s.error}>
          {error}
        </p>
      ) : hint ? (
        <p id={`${name}-hint`} className={s.hint}>
          {hint}
        </p>
      ) : null}
    </div>
  );
}
