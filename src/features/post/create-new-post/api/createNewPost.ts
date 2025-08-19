import { createSupabaseClient } from "@/shared/lib/supabase/client";

type CreateNewPostResponse = {
  name: string;
  password: string;
  title: string;
  content: string;
};

export const createNewPost = async ({
  name,
  password,
  title,
  content,
}: CreateNewPostResponse) => {
  const supabase = createSupabaseClient();
  const { data } = await supabase
    .from("posts")
    .insert([{ name, password, title, content }])
    .select()
    .single();

  if (!data) {
    throw new Error("글작성에 실패했습니다.");
  }

  return data;
};
