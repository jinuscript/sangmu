"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { deletePostAction } from "../../action";

import s from "./DeletePostButton.module.css";

export const DeletePostButton = () => {
  const { id } = useParams<{ id: string }>();

  const handleClick = async () => {
    await deletePostAction(id);
  };

  return (
    <button className={s.DeletePostButton} onClick={handleClick}>
      {/* <Image src="/svg/trash.svg" alt="삭제 버튼" width={24} height={24} /> */}
      게시글 삭제
    </button>
  );
};
