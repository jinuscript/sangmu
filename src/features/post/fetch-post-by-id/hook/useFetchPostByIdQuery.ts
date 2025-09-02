import { useQuery } from "@tanstack/react-query";
import { fetchPostById } from "../api";

export const useFetchPostByIdQuery = (id: string) => {
  return useQuery({
    queryKey: ["post", id],
    queryFn: () => fetchPostById(id),
  });
};
