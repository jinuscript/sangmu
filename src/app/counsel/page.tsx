"use client";

import Link from "next/link";
import { useFetchPostsQuery } from "@/features/post/fetch-posts/hook";

export default function CounselPage() {
  const { data: posts, isLoading, error } = useFetchPostsQuery();

  if (isLoading) return <main>Loading...</main>;

  if (error) return <main>Error: {error.message}</main>;

  return (
    <main>
      CounselPage
      <Link href="/counsel/write">글쓰기</Link>
    </main>
  );
}
