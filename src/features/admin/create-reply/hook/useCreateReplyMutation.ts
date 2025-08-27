import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";
import { createAdminReply } from "@/features/admin/create-reply/api";

export const useCreateReplyMutation = (options: UseMutationOptions) => {
  return useMutation({
    mutationFn: async ({ id, reply }) => {
      return createAdminReply(id, reply);
    },
    ...options,
  });
};
