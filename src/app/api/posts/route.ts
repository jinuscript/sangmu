// app/api/posts/verify/route.ts
import { createClient } from "@supabase/supabase-js";

const PAGE_SIZE = 10;

const maskName = (name: string) => {
  if (!name) return "";

  if (name.length === 1) {
    return name; // 한 글자면 그대로
  }

  if (name.length === 2) {
    return name[0] + "*"; // 두 글자면 앞글자만 남기고 뒤는 *
  }

  // 세 글자 이상이면 첫 글자 + 가운데 *들 + 마지막 글자
  return name[0] + "*".repeat(name.length - 2) + name[name.length - 1];
};

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
    name: maskName(post.name),
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
