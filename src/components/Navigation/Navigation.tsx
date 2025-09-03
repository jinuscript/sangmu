"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import s from "./Navigation.module.css";

export default function Navigation() {
  const pathname = usePathname();

  const isPracticePage = pathname.startsWith("/practice-areas");
  const isPosts = pathname.startsWith("/posts");
  const isAdmin = pathname.startsWith("/admin");

  if (isPosts || isAdmin) {
    return null;
  }

  if (isPracticePage) {
    return (
      <nav className={s.Navigation}>
        <div className={s.layoutContainer}>
          <h1 className={s.logo}>
            <Link href="/">법률사무소 상무</Link>
          </h1>
          <ul className={s.ul}>
            <li className={s.li}>
              <Link className={s.link} href="/practice-areas/family-law">
                가사
              </Link>
            </li>
            <li className={s.li}>
              <Link className={s.link} href="/practice-areas/civil-law">
                민사
              </Link>
            </li>
            <li className={s.li}>
              <Link className={s.link} href="/practice-areas/criminal-law">
                형사
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  return (
    <nav className={s.Navigation}>
      <div className={s.layoutContainer}>
        <h1 className={s.logo}>
          <Link href="/">법률사무소 상무</Link>
        </h1>
        <ul className={s.ul}>
          <li className={s.li}>
            <Link className={s.link} href="#1">
              대표 변호사 소개
            </Link>
          </li>
          <li className={s.li}>
            <Link className={s.link} href="#2">
              주요 업무
            </Link>
          </li>
          {/* <li className={s.li}>
            <Link className={s.link} href="#3">
              상담 신청
            </Link>
          </li> */}
          <li className={s.li}>
            <Link className={s.link} href="#4">
              오시는 길
            </Link>
          </li>
          <li className={s.li}>
            <Link className={s.link} href="/posts">
              온라인 상담
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
