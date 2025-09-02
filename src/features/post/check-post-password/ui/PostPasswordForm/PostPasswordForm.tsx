"use client";

import type { Dispatch, SetStateAction } from "react";
import { checkPostPasswordAction } from "../../action";

type TPostPasswordForm = {
  id: string;
  setIsVerified: Dispatch<SetStateAction<boolean>>;
};

export const PostPasswordForm = ({ id, setIsVerified }: TPostPasswordForm) => {
  const formAction = async (formData: FormData) => {
    const password = formData.get("password");

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
    <form action={formAction}>
      <input type="text" name="password" />
      <button>비밀번호 제출</button>
    </form>
  );
};
