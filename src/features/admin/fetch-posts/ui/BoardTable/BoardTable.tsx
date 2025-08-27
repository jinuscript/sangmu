"use client";

import { BoardItem } from "@/features/post/fetch-posts/ui";

import type { Posts } from "@/entities/post/type";

import s from "./BoardTable.module.css";

export const BoardTable = ({ posts }: { posts: Posts }) => {
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
        {posts.map((post) => {
          const { id, post_number, name, title, is_answered, created_at } =
            post;

          return (
            <BoardItem
              key={id}
              post_number={post_number}
              id={id}
              name={name}
              is_answered={is_answered}
              title={title}
              created_at={created_at}
            />
          );
        })}
      </tbody>
    </table>
  );
};
