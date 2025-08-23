"use client";

import { useState } from "react";

import { PostByIdPage } from "@/features/post/fetch-post-by-id/ui";
import { VerifyPasswordForm } from "@/features/post/verify-password/ui";

const CounselPageById = () => {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <section>
      {isVerified ? (
        <PostByIdPage />
      ) : (
        <VerifyPasswordForm setIsVerified={setIsVerified} />
      )}
    </section>
  );
};

export default CounselPageById;
