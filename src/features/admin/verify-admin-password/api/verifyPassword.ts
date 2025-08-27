export const verifyPassword = async (password: string) => {
  const result = await fetch("/api/admin/verify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password }),
  });

  if (!result.ok) {
    throw new Error("비밀번호가 불일치합니다.");
  }

  return await result.json();
};
