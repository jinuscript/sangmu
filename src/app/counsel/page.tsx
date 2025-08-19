"use client";

import { useState } from "react";
import Link from "next/link";
import { useFetchPostsQuery } from "@/features/post/fetch-posts/hook";

export default function CounselPage() {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useFetchPostsQuery({ page });

  if (isLoading) return <main>Loading...</main>;

  if (error) return <main>Error: {error.message}</main>;

  console.log(data);

  return (
    <main>
      CounselPage
      <Link href="/counsel/write">글쓰기</Link>
    </main>
  );
}
