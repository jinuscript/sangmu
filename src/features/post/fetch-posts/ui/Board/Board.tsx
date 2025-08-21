"use client";

import { BoardTable, Pagination } from "@/features/post/fetch-posts/ui";
import s from "./Board.module.css";
import { useState } from "react";
import { useFetchPostsQuery } from "@/features/post/fetch-posts/hook";

export const Board = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useFetchPostsQuery({ page });

  if (isLoading) return <main>Loading...</main>;

  if (error) return <main>Error: {error.message}</main>;

  console.log(data);

  return (
    <div className={s.Board}>
      <BoardTable data={data?.items} />
      <Pagination page={page} setPage={setPage} totalPages={data?.totalPages} />
    </div>
  );
};
