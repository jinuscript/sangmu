"use server";

import { createSupabaseServerClient } from "@/shared/lib/supabase/server";

export const fetchPostById = async (id: string) => {
  const supabase = await createSupabaseServerClient();
  return supabase
    .from("posts")
    .select("title, name, created_at, content, admin_reply")
    .eq("id", id)
    .single();
};
