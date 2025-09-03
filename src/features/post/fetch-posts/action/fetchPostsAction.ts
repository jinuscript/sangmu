"use server";

import { createSupabaseServerClient } from "@/shared/lib/supabase/server";

export const fetchPostsAction = async () => {
  const supabase = await createSupabaseServerClient();

  return supabase
    .from("posts")
    .select("id, created_at, name, title, post_number, admin_reply, content")
    .order("created_at", { ascending: false });
};
