import Link from "next/link";
import Image from "next/image";
import { Board } from "@/features/post/fetch-posts/ui";

import s from "./page.module.css";

export default function CounselPage() {
  return (
    <main className={s.CounselPage}>
      {/* 배너 */}
      <div className={s.bannerImage}>
        <div className={s.overlay}>
          <p className={s.p}>상담 게시판</p>
        </div>
      </div>
      <div className={s.layoutContainer}>
        {/* 글쓰기 버튼 */}
        <div className={s.buttonContainer}>
          <Link className={s.LinkButton} href="/counsel/write">
            글쓰기
          </Link>
        </div>
        {/* 게시판 */}
        <Board />
      </div>
    </main>
  );
}
