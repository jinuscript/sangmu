import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";
import { verifyPassword } from "@/features/admin/verify-admin-password/api";

export const useVerifyPasswordMutation = (options: UseMutationOptions) => {
  return useMutation({
    mutationFn: async ({ password }) => {
      return verifyPassword(password);
    },
    ...options,
  });
};
