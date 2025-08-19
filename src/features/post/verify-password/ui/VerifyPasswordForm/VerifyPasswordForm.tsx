import { useState } from "react";
import type { ChangeEvent, FormData } from "react";

import { useParams } from "next/navigation";
import { useVerifyPasswordMutation } from "@/features/post/verify-password/hook";
import s from "./VerifyPasswordForm.module.css";

export const VerifyPasswordForm = ({ setIsVerified }) => {
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

  const handleSubmit = (e: FormData<HTMLFormElement>) => {
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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor=""></label>
        <input type="password" value={password} onChange={handleInputChange} />
      </div>

      <button>비밀번호 확인</button>
    </form>
  );
};
