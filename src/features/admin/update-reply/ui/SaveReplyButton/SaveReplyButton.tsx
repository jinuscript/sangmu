"use client";

import { useParams } from "next/navigation";
import { updateAdminReplyAction } from "../../action";

import s from "./SaveReplyButton.module.css";

export const SaveReplyButton = () => {
  const { id } = useParams<{ id: string }>();

  const handleClick = async () => {
    const ok = confirm("답변을 저장하시겠습니까?");

    if (!ok) {
      return;
    }

    const { success } = await updateAdminReplyAction(id, "");

    if (!success) {
      alert("답변 등록 실패");
      return;
    }

    alert("답변 등록 성공");
  };

  return (
    <button className={s.SaveReplyButton} onClick={handleClick}>
      답변 저장
    </button>
  );
};
