"use server";

import { createSupabaseServerClient } from "@/shared/lib/supabase/server";

export const checkPasswordFormAction = async (id: string, password: string) => {
  const supabase = await createSupabaseServerClient();

  const { data } = await supabase
    .from("posts")
    .select("password")
    .eq("id", id)
    .single();

  const postPassword = data?.password;
  const formPassword = password;

  if (postPassword !== formPassword) {
    return false;
  }

  return true;
};
