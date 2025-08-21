"use client";

import { BoardItem } from "@/features/post/fetch-posts/ui";
import s from "./BoardTable.module.css";

export const BoardTable = ({ data }) => {
  return (
    <table className={s.BoardTable}>
      {/* 제목 */}
      <thead className={s.thead}>
        <tr className={s.tr}>
          <th className={`${s.th} ${s.number}`} scope="col">
            번호
          </th>
          <th className={`${s.th} ${s.title}`} scope="col">
            제목
          </th>
          <th className={`${s.th} ${s.status}`} scope="col">
            상태
          </th>
          <th className={`${s.th} ${s.name}`} scope="col">
            이름
          </th>
          <th className={`${s.th} ${s.date}`} scope="col">
            날짜
          </th>
        </tr>
      </thead>

      {/* 본문 */}
      <tbody className={s.tbody}>
        {data.map((post) => (
          <BoardItem
            key={post.id}
            post_number={post.post_number}
            id={post.id}
            name={post.name}
            is_answered={post.is_answered}
            title={post.title}
            created_at={post.created_at}
          />
        ))}
      </tbody>
    </table>
  );
};

{
  /* {posts.length > 0 ? (
          posts.map((post) => <BoardListItem key={post.id} post={post} />)
        ) : (
          <tr>
            <td colSpan={5} className="py-16 text-center text-gray-500">
              게시글이 없습니다.
            </td>
          </tr>
        )} */
}
