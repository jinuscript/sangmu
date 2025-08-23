"use client";

import { useState } from "react";

import { BoardTable, Pagination } from "@/features/post/fetch-posts/ui";
import { useFetchPostsQuery } from "@/features/post/fetch-posts/hook";

import s from "./Board.module.css";

export const Board = () => {
  // 페이지네이션
  const [page, setPage] = useState(1);

  // 페이지네이션에 해당하는 게시글 10개 호출
  const { data } = useFetchPostsQuery({ page });

  // undefined 에러 방지
  if (!data || !data.items || !data.totalPages) {
    return null;
  }

  return (
    <div className={s.Board}>
      {/* 게시판 */}
      <BoardTable posts={data.items} />

      {/* 페이지네이션 */}
      <Pagination page={page} setPage={setPage} totalPages={data.totalPages} />
    </div>
  );
};
