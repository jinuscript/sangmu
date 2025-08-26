// app/api/posts/verify/route.ts
import { createClient } from "@supabase/supabase-js";

const PAGE_SIZE = 10;

export async function POST(req: Request) {
  const { page } = await req.json();

  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!
  );

  const from = (page - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  const { data, error, count } = await supabase
    .from("posts")
    .select("id, post_number, title, is_answered, name, created_at", {
      count: "exact",
    })
    .order("created_at", { ascending: false })
    .range(from, to);

  if (error) {
    return Response.json({ message: "실패" }, { status: 400 });
  }

  // name을 김**으로 내보내기 위해 마스킹
  const masked = data.map((post) => ({
    ...post,
    name: post.name ? post.name[0] + "*".repeat(post.name.length - 1) : "",
  }));

  return Response.json(
    {
      items: masked,
      total: count,
      page,
      totalPages: Math.ceil(count / PAGE_SIZE),
    },
    { status: 200 }
  );
}
