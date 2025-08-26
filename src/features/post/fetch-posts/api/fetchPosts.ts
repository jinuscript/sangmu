type FetchPostsParams = {
  page: number;
};

export const fetchPosts = async ({ page }: FetchPostsParams) => {
  const result = await fetch("/api/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ page }),
  });

  if (!result.ok) {
    throw new Error("게시글을 불러오지 못했습니다");
  }

  return await result.json();
};
