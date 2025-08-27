// app/api/posts/verify/route.ts
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  const { password } = await req.json();
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!
  );

  const { data, error } = await supabase
    .from("admin")
    .select("password")
    .single();

  console.log(data);

  if (error || !data || data.password !== password) {
    return Response.json({ message: "실패" }, { status: 400 });
  }

  return Response.json({ message: "성공" }, { status: 200 });
}
