import { createSupabaseClient } from "@/shared/lib/supabase/client";

export const verifyPassword = async (id: string, password: string) => {
  const supabase = createSupabaseClient();
  const { data } = await supabase
    .from("posts")
    .select("password")
    .eq("id", id)
    .single();

  if (!data || data.password !== password) {
    throw new Error("비밀번호가 일치하지 않습니다.");
  }

  return true;
};
