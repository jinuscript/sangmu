"use server";

import { createSupabaseServerClient } from "@/shared/lib/supabase/server";

export const adminLogoutAction = async () => {
  const supabase = await createSupabaseServerClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("로그아웃 실패:", error);
    return { success: false, error: error.message };
  }

  return { success: true };
};
