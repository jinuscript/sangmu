import type { ReactNode } from "react";

import Link from "next/link";

// import { LogoutButton } from "@/features/admin/admin-logout/ui";

import s from "./AdminLayout.module.css";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className={s.AdminLayout}>
      {/* 네비게이션 */}
      <header className={s.Navigation}>
        <nav className={s.nav}>
          <h1 className={s.Logo}>
            <Link href="/">법률사무소 상무</Link>
          </h1>
          <ul className={s.ul}>
            <li>
              <Link className={s.link} href="/#1">
                대표 변호사 소개
              </Link>
            </li>
            <li>
              <Link className={s.link} href="/#2">
                주요 업무
              </Link>
            </li>
            {/* <li>
              <Link className={s.link} href="/#3">
                상담 신청
              </Link>
            </li> */}
            <li>
              <Link className={s.link} href="/#4">
                오시는 길
              </Link>
            </li>
            <li>
              <Link className={s.link} href="/posts">
                온라인 상담
              </Link>
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
