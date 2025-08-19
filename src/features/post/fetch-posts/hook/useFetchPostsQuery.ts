import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/features/post/fetch-posts/api";

type TUseFetchPostsQuery = {
  page: number;
};

export const useFetchPostsQuery = ({ page }: TUseFetchPostsQuery) => {
  return useQuery({
    queryKey: ["posts", page],
    queryFn: () => fetchPosts({ page }),
  });
};
