import { useState } from "react";
import type { ChangeEvent, Dispatch, SetStateAction } from "react";

import { useParams } from "next/navigation";
import { useVerifyPasswordMutation } from "@/features/post/verify-password/hook";
import s from "./VerifyPasswordForm.module.css";

type TVerifyPasswordForm = {
  setIsVerified: Dispatch<SetStateAction<boolean>>;
};

export const VerifyPasswordForm = ({ setIsVerified }: TVerifyPasswordForm) => {
  const [password, setPassword] = useState("");

  const { id } = useParams();

  const { mutate: verifyPassword } = useVerifyPasswordMutation({
    onSuccess: () => {
      setIsVerified(true);
    },
    onError: (error) => {
      console.error(error);
      alert("비밀번호가 일치하지 않습니다.");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    verifyPassword({ id, password });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <form className={s.VerifyPasswordForm} onSubmit={handleSubmit}>
      <div className={s.Input}>
        <label className={s.label} htmlFor=""></label>
        <input
          className={s.input}
          type="password"
          value={password}
          onChange={handleInputChange}
        />
      </div>

      <button className={s.button}>비밀번호 확인</button>
    </form>
  );
};
