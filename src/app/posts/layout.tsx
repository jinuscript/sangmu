import type { ReactNode } from "react";

import Link from "next/link";

import { ImageBanner } from "@/shared/ui";

import s from "./PostsLayout.module.css";

const PostsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className={s.PostsLayout}>
      <header className={s.Navigation}>
        <nav className={s.nav}>
          <h1>
            <Link href="/">상무</Link>
          </h1>
          <ul>
            <li>
              <Link className={s.link} href="/posts">
                온라인 상담
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <ImageBanner />
      <div className={s.layoutContainer}>{children}</div>
    </main>
  );
};

export default PostsLayout;
