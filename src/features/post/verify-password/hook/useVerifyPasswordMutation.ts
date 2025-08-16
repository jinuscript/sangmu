import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";
import { verifyPassword } from "@/features/post/verify-password/api";

export const useVerifyPasswordMutation = (options: UseMutationOptions) => {
  return useMutation({
    mutationFn: async ({ id, password }) => {
      return verifyPassword(id, password);
    },
    ...options,
  });
};
