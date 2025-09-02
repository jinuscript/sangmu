import { createSupabaseServerClient } from "@/shared/lib/supabase/server";

export const checkPostPassword = async (id: string, formData: FormData) => {
  const supabase = await createSupabaseServerClient();

  const { data } = await supabase
    .from("posts")
    .select("password")
    .eq("id", id)
    .single();

  const postPassword = data?.password;
  const formPassword = formData.get("password");

  if (postPassword !== formPassword) {
    return false;
  }

  return true;
};
