"use client";

import { useParams } from "next/navigation";
import { useFetchPostByIdQuery } from "@/features/post/fetch-post-by-id/hook";

import s from "./PostByIdPage.module.css";

export const PostByIdPage = () => {
  const { id } = useParams();

  const { data: post, isLoading, error } = useFetchPostByIdQuery(id);

  if (isLoading) return <main>Loading...</main>;

  if (error) return <main>Error: {error.message}</main>;
  console.log(post);

  return <main>CounselPageById</main>;
};
