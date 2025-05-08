import Link from "next/link";
import s from "./Navigation.module.css";

export default function Navigation() {
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
