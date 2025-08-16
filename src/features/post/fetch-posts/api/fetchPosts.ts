import { createSupabaseClient } from "@/shared/lib/supabase/client";

export const fetchPosts = async () => {
  const supabase = createSupabaseClient();
  return await supabase.from("posts").select("*");
};
