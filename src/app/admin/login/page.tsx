"use client";

import { useRouter } from "next/navigation";

import { adminLoginAction } from "@/features/admin/admin-login/action";

import s from "./AdminLoginPage.module.css";

const AdminLoginPage = () => {
  const { push } = useRouter();

  const formAction = async (formData: FormData) => {
    const password = formData.get("password") as string;

    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    const { success } = await adminLoginAction(password);

    if (!success) {
      alert("비밀번호가 틀렸습니다.");
      return;
    }

    push(`/admin`);
  };

  return (
    <section className={s.AdminLoginPage}>
      <form className={s.form} action={formAction}>
        <div className={s.inputContainer}>
          <label className={s.label} htmlFor="password">
            비밀번호
          </label>
          <input
            className={s.input}
            type="password"
            id="password"
            name="password"
          />
        </div>
        <button className={s.button}>로그인</button>
      </form>
    </section>
  );
};

export default AdminLoginPage;
