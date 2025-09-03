"use server";

import { createSupabaseServerClient } from "@/shared/lib/supabase/server";

type CreateNewPostResponse = {
  name: string;
  password: string;
  title: string;
  content: string;
  phone: string;
};

export const createNewPostAction = async ({
  name,
  password,
  title,
  content,
  phone,
}: CreateNewPostResponse) => {
  const supabase = await createSupabaseServerClient();

  return supabase
    .from("posts")
    .insert([{ name, password, title, content, phone }])
    .select()
    .single();
};
