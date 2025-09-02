"use server";

import { createSupabaseServerClient } from "@/shared/lib/supabase/server";

export const adminLoginAction = async (formData: FormData) => {
  const supabase = await createSupabaseServerClient();

  const password = formData.get("password");

  const { error } = await supabase.auth.signInWithPassword({
    email: process.env.NEXT_PUBLIC_SUPABASE_ADMIN_ID!,
    password: password,
  });

  if (error) {
    return false;
  }

  return true;
};
