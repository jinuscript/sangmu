"use client";

import { formatDate } from "@/shared/utils";

import { useFetchPostByIdQuery } from "../../hook";

import s from "./PostByIdPage.module.css";

export const PostByIdPage = ({ id }: { id: string }) => {
  const { data: queryData } = useFetchPostByIdQuery(id);

  if (!queryData) {
    return null;
  }

  return (
    <main className={s.PostByIdPage}>
      <p className={s.title}>{queryData?.data?.title}</p>
      <div className={s.container}>
        <p className={s.name}>{queryData?.data?.name}</p>
        <div className={s.column} />
        <p className={s.date}>{formatDate(queryData?.data?.created_at)}</p>
      </div>
      <div className={s.border} />
      <p className={s.content}>{queryData?.data?.content}</p>
      <div className={s.border} />
      {queryData?.data?.admin_reply && (
        <p className={s.AdminReply}>{queryData?.data?.admin_reply}</p>
      )}
    </main>
  );
};
