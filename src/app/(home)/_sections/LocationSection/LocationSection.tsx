'use client';

import Image from 'next/image';
import s from './LocationSection.module.css';

export default function LocationSection() {
  return (
    <section className={s.LocationSection}>
      <div className={s.layoutContainer}>
        <p className={s.title}>찾아오시는 길</p>

        <div className={s.imgContainer}>
          <div
            className={s.overlay}
            onClick={() => {
              window.open('https://naver.me/Fw7bpa5p', '_blank');
            }}
          >
            <p className={s.desc}>네이버 지도로 이동하기</p>
          </div>
          <Image
            className={s.img}
            src="/home/법률사무소상무.png"
            alt=""
            width={1500}
            height={800}
          />
        </div>

        <div className={s.infoContainer}>
          <p className={s.p}>
            광주광역시 동구 지산동 714-20 광주지방변호사회관 302호
          </p>
          <p className={s.p}>지산동 714-20</p>
          <p className={s.p}>062-263-8825</p>
        </div>
      </div>
    </section>
  );
}
