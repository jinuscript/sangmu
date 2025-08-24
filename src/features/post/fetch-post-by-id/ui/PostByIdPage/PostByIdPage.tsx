"use client";

import { useParams } from "next/navigation";
import { useFetchPostByIdQuery } from "@/features/post/fetch-post-by-id/hook";
import { formatDate } from "@/shared/utils";

import s from "./PostByIdPage.module.css";

export const PostByIdPage = () => {
  const { id } = useParams();

  const { data: post, isLoading, error } = useFetchPostByIdQuery(id);

  if (isLoading) return <main>Loading...</main>;

  if (error) return <main>Error: {error.message}</main>;
  console.log(post);

  return (
    <main className={s.PostByIdPage}>
      <p className={s.title}>{post?.data.title}</p>
      <div className={s.container}>
        <p className={s.name}>{post?.data.name}</p>
        <div className={s.column} />
        <p className={s.date}>{formatDate(post?.data.created_at)}</p>
      </div>
      <p className={s.content}>{post?.data.content}</p>
      {post?.data.is_admin_reply && (
        <p className={s.AdminReply}>{post?.data.is_admin_reply}</p>
      )}
    </main>
  );
};
