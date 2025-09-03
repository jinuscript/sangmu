"use client";

import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { deletePostAction } from "../../action";

import s from "./DeletePostButton.module.css";

export const DeletePostButton = () => {
  const { id } = useParams<{ id: string }>();
  const { push } = useRouter();

  const handleClick = async () => {
    const ok = confirm("게시글을 삭제하시겠습니까?");

    if (!ok) {
      return;
    }

    const { success } = await deletePostAction(id);

    if (!success) {
      alert("게시글 삭제 실패");
      return;
    }

    alert("게시글 삭제 성공");

    push("/admin");
  };

  return (
    <button className={s.DeletePostButton} onClick={handleClick}>
      게시글 삭제
    </button>
  );
};
