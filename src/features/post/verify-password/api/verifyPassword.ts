export const verifyPassword = async (id: string, password: string) => {
  const result = await fetch("/api/posts/verify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, password }),
  });

  if (!result.ok) {
    throw new Error("비밀번호가 불일치합니다.");
  }

  return await result.json();
};
