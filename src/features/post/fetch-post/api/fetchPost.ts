import { createSupabaseClient } from "@/shared/lib/supabase/client";

export const fetchPost = async () => {
  const supabase = createSupabaseClient();
  return await supabase.from("posts").select("*");
};
