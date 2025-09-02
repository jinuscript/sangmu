import { createSupabaseServerClient } from "@/shared/lib/supabase/server";

export const fetchPostById = async (id: string) => {
  const supabase = await createSupabaseServerClient();
  return supabase.from("posts").select("*").eq("id", id).single();
};
