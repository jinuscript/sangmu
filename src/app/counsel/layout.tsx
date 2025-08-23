import type { ReactNode } from "react";

import { ImageBanner } from "@/shared/ui";

import s from "./CounselLayout.module.css";

const CounselLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      {/* 이미지 배너 */}
      <ImageBanner />
      {/* 페이지 */}
      <div className={s.layoutContainer}>{children}</div>
    </main>
  );
};

export default CounselLayout;
