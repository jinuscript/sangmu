import Link from 'next/link';
import s from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={s.Footer}>
      <div className={s.layoutContainer}>
        <p className={`${s.p} ${s.foot1}`}>
          법률사무소 상무 (대표변호사 송지현)
        </p>
        <address className={s.address}>
          <p className={s.p}>대표: 송지현</p>
          <p className={s.p}>
            주소: 광주 동구 동명로 101-1 (지산동), 변호사 송지현 법률사무소 3층
            302호
          </p>
          <p className={s.p}>사업자등록번호: 408-18-55951</p>
          <p className={s.p}>TEL/FAX: 062-222-8825</p>
          <p className={s.p}>EMAIL: 8825song@naver.com</p>
        </address>

        <Link className={s.privacy} href="/privacy">
          개인정보처리방침
        </Link>

        <p className={s.p}>
          Copyright © 법률사무소 상무 (대표변호사 송지현). All rights reserved.
        </p>
      </div>
    </footer>
  );
}
