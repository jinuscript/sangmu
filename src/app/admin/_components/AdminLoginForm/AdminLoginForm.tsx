"use client";

import { useState } from "react";
import { supabase } from "@/lib/actions";
import { useRouter } from "next/navigation";
import s from "./AdminLoginForm.module.css";

export const AdminLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError("로그인 실패: " + error.message);
    } else {
      console.log(data);
      setSuccess("로그인 성공!");
      router.replace("/admin/dashboard");
      // 로그인 성공 후 라우팅 또는 관리자 권한 확인 로직 추가
    }
  };

  return (
    <main className={s.AdminLoginForm}>
      <form onSubmit={handleLogin}>
        <div>
          <label>아이디(이메일)</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>비밀번호</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">로그인</button>

        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
      </form>
    </main>
  );
};
