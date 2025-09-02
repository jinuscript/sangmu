import { createSupabaseServerClient } from "@/shared/lib/supabase/server";

export const fetchPosts = async () => {
  const supabase = await createSupabaseServerClient();

  return supabase
    .from("posts")
    .select("id, created_at, name, title, is_answered, post_number");
};
