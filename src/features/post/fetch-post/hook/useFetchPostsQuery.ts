import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/features/post/fetch-post/api";

export const useFetchPostsQuery = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
};
