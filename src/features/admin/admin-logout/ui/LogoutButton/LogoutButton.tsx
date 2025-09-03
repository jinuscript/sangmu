"use client";

import { useRouter } from "next/navigation";
import { adminLogoutAction } from "../../action/";

export const LogoutButton = () => {
  const { push } = useRouter();

  const handleClick = async () => {
    // 로그아웃 수행
    await adminLogoutAction();

    // 로그아웃 성공하면 로그인 페이지로 이동
    push("/admin/login");
  };

  return <button onClick={handleClick}>로그아웃</button>;
};
