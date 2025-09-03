"use server";

import { createSupabaseServerClient } from "@/shared/lib/supabase/server";

export const deletePostAction = async (id: string) => {
  const supabase = await createSupabaseServerClient();

  const { error } = await supabase.from("posts").delete().eq("id", id);

  if (error) {
    console.error("삭제 실패:", error);
    return { success: false, error: error.message };
  }

  return { success: true };
};
