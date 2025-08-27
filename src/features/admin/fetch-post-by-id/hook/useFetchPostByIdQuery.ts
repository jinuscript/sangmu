import { useQuery } from "@tanstack/react-query";
import { fetchPostByIdQuery } from "@/features/post/fetch-post-by-id/api";

export const useFetchPostByIdQuery = (id: string) => {
  return useQuery({
    queryKey: ["post", id],
    queryFn: async () => {
      return fetchPostByIdQuery(id);
    },
  });
};
