import Link from "next/link";

import { Board } from "@/features/post/fetch-posts/ui";

import s from "./page.module.css";

export default function CounselPage() {
  return (
    <section>
      {/* 글쓰기 버튼 */}
      <div className={s.buttonContainer}>
        <Link className={s.LinkButton} href="/counsel/write">
          상담 신청
        </Link>
      </div>
      {/* 게시판 */}
      <Board />
    </section>
  );
}
