"use client";

import { useParams } from "next/navigation";

import { formatDate } from "@/shared/utils";
import { AdminReply } from "@/features/admin/create-reply/ui";
import { useFetchPostByIdQuery } from "@/features/post/fetch-post-by-id/hook";

import s from "./PostByIdPage.module.css";

export const PostByIdPage = () => {
  const { id } = useParams();

  const { data: post, isLoading, error } = useFetchPostByIdQuery(id);

  if (isLoading) return <main>Loading...</main>;

  if (error) return <main>Error: {error.message}</main>;
  console.log(post);

  return (
    <main className={s.PostByIdPage}>
      {/* 사용자 글 */}
      <p className={s.title}>{post?.data.title}</p>
      <div className={s.container}>
        <p className={s.name}>{post?.data.name}</p>
        <div className={s.column} />
        <p className={s.date}>{formatDate(post?.data.created_at)}</p>
      </div>
      <p className={s.content}>{post?.data.content}</p>
      {post?.data.admin_reply && (
        <p className={s.AdminReply}>
          {post?.data.admin_reply}
          <button>답변 수정</button>
        </p>
      )}

      {/* 답변 달기 */}
      <AdminReply id={id} />
    </main>
  );
};
