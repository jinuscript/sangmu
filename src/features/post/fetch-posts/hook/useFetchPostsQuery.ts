import { useQuery } from "@tanstack/react-query";
import { fetchPostsAction } from "../action";

export const useFetchPostsQuery = () => {
  return useQuery({
    queryKey: ["adminPosts"],
    queryFn: fetchPostsAction,
  });
};
