import type { ReactNode } from "react";

import Link from "next/link";

import s from "./AdminLayout.module.css";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className={s.AdminLayout}>
      {/* 네비게이션 */}
      <header className={s.Navigation}>
        <nav className={s.nav}>
          <h1>
            <Link href="/">상무</Link>
          </h1>
          <ul>
            <li>
              <button>로그아웃</button>
            </li>
          </ul>
        </nav>
      </header>

      {/* 배너 */}
      <div className={s.Banner}>관리자 페이지</div>

      {/* 페이지 */}
      <div className={s.layoutContainer}>{children}</div>
    </main>
  );
};

export default AdminLayout;
