import { createSupabaseClient } from "@/shared/lib/supabase/client";

type FetchPostsParams = {
  page: number;
};

const PAGE_SIZE = 10;

export async function fetchPosts({ page }: FetchPostsParams) {
  const supabase = createSupabaseClient();

  const from = (page - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  const { data, error, count } = await supabase
    .from("posts")
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false })
    .range(from, to);

  if (error) throw error;

  return {
    items: data,
    total: count,
    page,
    totalPages: Math.ceil(count / PAGE_SIZE),
  };
}
