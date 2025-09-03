import Image from "next/image";
import s from "./SideMenu.module.css";

export default function SideMenu() {
  return (
    <div className={s.SideMenu}>
      <ul className={s.ul}>
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
            />
            <span>공식 블로그</span>
          </a>
        </li>
        <li className={s.li}>
          <a className={s.link} href="tel:062-222-8825">
            <Image
              src="/home/telephone.png"
              alt="네이버 로고"
              width={32}
              height={32}
            />
            <span>062-222-8825</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
