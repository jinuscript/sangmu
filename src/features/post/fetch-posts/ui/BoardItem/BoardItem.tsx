"use client";

import { useRouter } from "next/navigation";

import type { PostItem } from "@/entities/post/type";

import { formatDate } from "@/shared/utils";

import s from "./BoardItem.module.css";

export const BoardItem = ({
  post_number,
  id,
  is_answered,
  name,
  title,
  created_at,
}: PostItem) => {
  const { push } = useRouter();
  return (
    <tr className={s.BoardItem} onClick={() => push(`/admin/${id}`)}>
      {/* 번호 */}
      <td className={`${s.td} ${s.number}`}>{post_number}</td>

      {/* 제목 */}
      <td className={`${s.td} ${s.title}`}>{title}</td>

      {/* 답변 상태 */}
      <td className={`${s.td} ${s.status}`}>
        {is_answered ? (
          <span className={`${s.badge} ${s.active}`}>상담완료</span>
        ) : (
          <span className={`${s.badge} ${s.inactive}`}>상담중</span>
        )}
      </td>

      {/* 이름 */}
      <td className={`${s.td} ${s.name}`}>{name}</td>

      {/* 날짜 */}
      <td className={`${s.td} ${s.date}`}>{formatDate(created_at)}</td>
    </tr>
  );
};
