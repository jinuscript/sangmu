"use client";

import { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { createNewPostAction } from "../../action";

import s from "./NewPostForm.module.css";

export const NewPostForm = () => {
  const [privacy, setPrivacy] = useState(false);

  const { push } = useRouter();

  const handleSubmit = async (formData: FormData) => {
    const name = formData.get("name");
    const phone = formData.get("phone");
    const title = formData.get("title");
    const content = formData.get("content");
    const password = formData.get("password");

    if (!name || !phone || !title || !content || !password) {
      alert("빈 값이 있습니다!");
      return;
    }

    if (!privacy) {
      alert("필요 약관에 체크해주세요!");
      return;
    }

    const { data } = await createNewPostAction({
      name,
      password,
      title,
      content,
      phone,
    });

    if (data) {
      alert("게시글 성공!");
      push("/posts");
    }
  };

  return (
    <section>
      <form className={s.NewPostForm} action={handleSubmit}>
        {/* 이름 */}
        <div className={`${s.Input} ${s.name}`}>
          <label htmlFor="name">이름</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="홍길동"
            maxLength={5}
          />
        </div>

        {/* 연락처 */}
        <div className={`${s.Input} ${s.phone}`}>
          <label htmlFor="phone">휴대폰</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="010-1234-5678"
            maxLength={13}
          />
        </div>

        {/* 비밀번호 */}
        <div className={`${s.Input} ${s.password}`}>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            name="password"
            maxLength={8}
            placeholder="최대 8자리 숫자를 입력해주세요"
          />
        </div>

        {/* 제목 */}
        <div className={`${s.Input} ${s.title}`}>
          <label htmlFor="title">제목</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="제목"
            maxLength={20}
          />
        </div>

        {/* 내용 */}
        <div className={`${s.Textarea} ${s.content}`}>
          <label htmlFor="content">내용</label>
          <textarea
            id="content"
            name="content"
            placeholder="상담 내용을 작성해주세요."
          />
        </div>

        <div className={s.privacyContent}>
          <p className={s.title}>1. 수집·이용 목적</p>
          <p className={s.desc}>1:1 문의에 대한 답변 및 상담 서비스 제공</p>
          <p className={s.title}>2. 수집하는 개인정보 항목</p>
          <p className={s.desc}>휴대전화번호</p>
          <p className={s.title}>3. 보유 및 이용 기간</p>
          <p className={s.desc}>문의 처리 완료 후 1년간 보관 후 즉시 파기</p>
          <p className={s.title}>4. 동의 거부 권리 및 불이익</p>
          <p className={s.desc}>
            이용자는 개인정보 수집·이용에 동의하지 않을 권리가 있습니다.
          </p>
          <p className={s.desc}>
            다만, 동의하지 않을 경우 문의 접수가 제한될 수 있습니다.
          </p>
        </div>

        <div className={`${s.Checkbox} ${s.privacy}`}>
          <input
            id="privacy"
            name="privacy"
            type="checkbox"
            checked={privacy}
            onChange={() => setPrivacy((prev) => !prev)}
          />
          <label htmlFor="privacy">개인정보 수집 및 이용 동의</label>
        </div>

        <div className={s.buttonContainer}>
          <button className={s.button}>상담 신청</button>
        </div>
      </form>
    </section>
  );
};
