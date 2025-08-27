import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/features/admin/fetch-posts/api";

type TUseFetchPostsQuery = {
  page: number;
};

export const useFetchPostsQuery = ({ page }: TUseFetchPostsQuery) => {
  return useQuery({
    queryKey: ["adminPosts", page],
    queryFn: () => fetchPosts({ page }),
  });
};
