"use client";

import { useFetchPostsQuery } from "@/features/post/fetch-posts/hook";

export default function CounselPage() {
  const { data: posts, isLoading, error } = useFetchPostsQuery();

  if (isLoading) return <main>Loading...</main>;

  if (error) return <main>Error: {error.message}</main>;
  console.log(posts);

  return <main>CounselPage</main>;
}
