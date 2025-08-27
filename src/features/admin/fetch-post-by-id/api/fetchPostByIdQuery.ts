import { createSupabaseClient } from "@/shared/lib/supabase/client";

export const fetchPostByIdQuery = async (id: string) => {
  const supabase = createSupabaseClient();
  return await supabase.from("posts").select("*").eq("id", id).single();
};
