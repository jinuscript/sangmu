"use client";

import { VerifyPasswordForm } from "@/features/post/verify-password/ui";
import { PostByIdPage } from "@/features/post/fetch-post-by-id/ui";
import { useState } from "react";
import s from "./page.module.css";

const CounselPageById = () => {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <main className={s.page}>
      <div className={s.layoutContainer}>
        {isVerified ? (
          <PostByIdPage />
        ) : (
          <VerifyPasswordForm setIsVerified={setIsVerified} />
        )}
      </div>
    </main>
  );
};

export default CounselPageById;
