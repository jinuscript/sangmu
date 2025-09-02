"use server";

import { createSupabaseServerClient } from "@/shared/lib/supabase/server";

export const updateAdminReplyAction = async (id: string, reply: string) => {
  const supabase = await createSupabaseServerClient();

  const { error } = await supabase
    .from("posts")
    .update({
      admin_reply: reply,
      reply_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select();

  if (error) {
    console.error("추가 실패:", error);
    return { success: false, error: error.message };
  }

  return { success: true };
};
