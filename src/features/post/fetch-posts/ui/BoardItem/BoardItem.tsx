"use client";

import { useRouter } from "next/navigation";
import s from "./BoardItem.module.css";

// // 날짜 포맷팅 함수
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toISOString().split("T")[0];
};

type TBoardItem = {
  post_number: number;
  id: string;
  is_answered: boolean;
  name: string;
  title: string;
  created_at: string;
};

export const BoardItem = ({
  post_number,
  id,
  is_answered,
  name,
  title,
  created_at,
}: TBoardItem) => {
  const { push } = useRouter();
  return (
    <tr className={s.BoardItem} onClick={() => push(`/counsel/${id}`)}>
      {/* 번호 */}
      <td className={`${s.td} ${s.number}`}>{post_number}</td>

      {/* 제목 */}
      <td className={`${s.td} ${s.title}`}>{title}</td>

      {/* 답변 상태 */}
      <td className={`${s.td} ${s.status}`}>
        {is_answered ? (
          <span className={`${s.badge} ${s.active}`}>답변완료</span>
        ) : (
          <span className={`${s.badge} ${s.inactive}`}>답변대기</span>
        )}
      </td>

      {/* 이름 */}
      <td className={`${s.td} ${s.name}`}>{name}</td>

      {/* 날짜 */}
      <td className={`${s.td} ${s.date}`}>{formatDate(created_at)}</td>
    </tr>
  );
};
