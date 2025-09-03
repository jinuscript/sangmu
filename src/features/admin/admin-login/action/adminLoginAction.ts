"use server";

import { createSupabaseServerClient } from "@/shared/lib/supabase/server";

export const adminLoginAction = async (password: string) => {
  const supabase = await createSupabaseServerClient();

  const { error } = await supabase.auth.signInWithPassword({
    email: process.env.NEXT_PUBLIC_SUPABASE_ADMIN_ID!,
    password: password,
  });

  if (error) {
    console.error("로그인 실패:", error);
    return { success: false, error: error.message };
  }

  return { success: true };
};
