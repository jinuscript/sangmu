import { useQuery } from "@tanstack/react-query";
import { fetchPostByIdAction } from "../action";

export const useFetchPostByIdQuery = (id: string) => {
  return useQuery({
    queryKey: ["post", id],
    queryFn: () => fetchPostByIdAction(id),
  });
};
