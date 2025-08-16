import { useQuery } from "@tanstack/react-query";
import { fetchPost } from "@/features/post/fetch-post/api";

export const useFetchPostQuery = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: fetchPost,
  });
};
