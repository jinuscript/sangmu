// app/api/posts/verify/route.ts
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  const { id, password } = await req.json();
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!
  );

  const { data, error } = await supabase
    .from("posts")
    .select("password")
    .eq("id", id)
    .single();

  if (error || !data || data.password !== password) {
    return Response.json({ message: "실패" }, { status: 400 });
  }

  return Response.json({ message: "성공" }, { status: 200 });
}
