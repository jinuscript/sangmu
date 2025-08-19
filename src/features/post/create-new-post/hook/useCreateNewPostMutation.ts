import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";
import { createNewPost } from "@/features/post/create-new-post/api";

export const useCreateNewPostMutation = (options?: UseMutationOptions) => {
  return useMutation({
    mutationFn: async ({ name, title, content, password }) => {
      return createNewPost({ name, title, content, password });
    },
    ...options,
  });
};
