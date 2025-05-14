"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import s from "./Navigation.module.css";

export default function Navigation() {
  const pathname = usePathname();

  const isPracticePage = pathname.startsWith("/practice-areas");

  if (isPracticePage) {
    return (
      <nav className={s.Navigation}>
        <div className={s.layoutContainer}>
          <h1 className={s.logo}>
            <Link href="/">법률사무소 상무</Link>
          </h1>
          <ul className={s.ul}>
            <li className={s.li}>
              <Link href="/practice-areas/family-law">가사</Link>
            </li>
            <li className={s.li}>
              <Link href="/practice-areas/civil-law">민사</Link>
            </li>
            <li className={s.li}>
              <Link href="/practice-areas/criminal-law">형사</Link>
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
            <Link href="#1">대표 변호사 소개</Link>
          </li>
          <li className={s.li}>
            <Link href="#2">주요 업무</Link>
          </li>
          <li className={s.li}>
            <Link href="#3">상담 신청</Link>
          </li>
          <li className={s.li}>
            <Link href="#4">오시는 길</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
