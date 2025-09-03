"use client";

import { useParams, useRouter } from "next/navigation";

import { updateAdminReplyAction } from "../../action";

import s from "./AdminReplyForm.module.css";

export const AdminReplyForm = ({ admin_reply }: { admin_reply: string }) => {
  const { id } = useParams<{ id: string }>();
  const { refresh } = useRouter();

  const handleClick = async (formData: FormData) => {
    const reply = formData.get("reply") as string;

    if (!reply) {
      alert("답변이 비어있습니다");
      return;
    }

    const ok = confirm("답변을 저장하시겠습니까?");

    if (!ok) {
      return;
    }

    const { success } = await updateAdminReplyAction(id, reply);

    if (!success) {
      alert("답변 등록 실패");
      return;
    }

    alert("답변 등록 성공");
    refresh();
  };

  return (
    <form className={s.reply} action={handleClick}>
      <textarea
        defaultValue={admin_reply ?? ""}
        className={s.textarea}
        name="reply"
        placeholder="답변을 등록해주세요."
      />
      <div className={s.buttonContainer}>
        <button className={s.SaveReplyButton}>답변 저장</button>
      </div>
    </form>
  );
};
