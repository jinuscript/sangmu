import { createSupabaseClient } from "@/shared/lib/supabase/client";

export const createAdminReply = async (id: string, reply: string) => {
  const supabase = createSupabaseClient();
  return await supabase
    .from("posts")
    .update({
      admin_reply: reply,
      is_answered: true,
      reply_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select();
};
