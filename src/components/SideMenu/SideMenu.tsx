import Image from "next/image";
import Link from "next/link";
import s from "./SideMenu.module.css";

export default function SideMenu() {
  return (
    <div className={s.SideMenu}>
      <ul className={s.ul}>
        <li className={s.li}>
          <Link className={s.link} href="/consultation">
            <svg
              className={s.icon}
              width={32}
              height={32}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.9A8 8 0 1 1 21 12Z" />
              <path d="M8.5 10.5h7M8.5 13.5h4.5" />
            </svg>
            <span>온라인 상담</span>
          </Link>
        </li>
        <li className={s.li}>
          <a
            className={s.link}
            href="https://blog.naver.com/dkrltktma263"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/home/naver-blog.png"
              alt="네이버 블로그 로고"
              width={32}
              height={32}
              className={s.icon}
            />
            <span>공식 블로그</span>
          </a>
        </li>
        <li className={s.li}>
          <a className={s.link} href="tel:062-222-8825">
            <Image
              src="/home/telephone.png"
              alt="전화 아이콘"
              width={32}
              height={32}
              className={s.icon}
            />
            <span>062-222-8825</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
