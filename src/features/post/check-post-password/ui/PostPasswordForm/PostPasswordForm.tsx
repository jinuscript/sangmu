"use client";

import type { Dispatch, SetStateAction } from "react";

import { checkPostPasswordAction } from "../../action";

import s from "./PostPasswordForm.module.css";

type TPostPasswordForm = {
  id: string;
  setIsVerified: Dispatch<SetStateAction<boolean>>;
};

export const PostPasswordForm = ({ id, setIsVerified }: TPostPasswordForm) => {
  const formAction = async (formData: FormData) => {
    const password = formData.get("password") as string;

    if (!password) {
      alert("비밀번호를 입력해주세요!");
      return;
    }

    const isValid = await checkPostPasswordAction(id, password);

    if (!isValid) {
      alert("비밀번호 틀렸습니다!");
      return;
    }

    alert("비밀번호가 일치합니다!");
    setIsVerified(true);
  };

  return (
    <section className={s.PostPasswordForm}>
      <div className={s.textContainer}>
        <p className={s.title}>비밀글 기능으로 보호된 글입니다</p>
        <p className={s.p}>작성자와 관리자만 열람하실 수 있습니다.</p>
        <p className={s.p}>본인이라면 비밀번호를 입력해주세요.</p>
      </div>
      <form className={s.form} action={formAction}>
        <input
          className={s.input}
          type="password"
          name="password"
          placeholder="비밀번호를 입력해주세요"
        />
        <button className={s.button}>비밀번호 제출</button>
      </form>
    </section>
  );
};
