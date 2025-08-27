"use client";
import { useState } from "react";
import { useCreateReplyMutation } from "../../hook";
import s from "./AdminReply.module.css";

export const AdminReply = ({ id }) => {
  const [reply, setReply] = useState("");

  const { mutate: createReply } = useCreateReplyMutation({
    onSuccess: () => {
      alert("답변 등록 성공!");
    },
    onError: () => {
      alert("답변 등록 실패!");
    },
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    createReply({ id, reply });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className={s.AdminReply}>
        <label htmlFor=""></label>
        <textarea
          name=""
          id=""
          value={reply}
          onChange={(e) => setReply(e.target.value)}
        />
      </div>
      <button>답변</button>
    </form>
  );
};
