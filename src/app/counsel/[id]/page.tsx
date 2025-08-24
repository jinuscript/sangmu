"use client";

import { useState } from "react";

import { PostByIdPage } from "@/features/post/fetch-post-by-id/ui";
import { VerifyPassword } from "@/features/post/verify-password/ui";

const CounselPageById = () => {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <section>
      {isVerified ? (
        <PostByIdPage />
      ) : (
        <VerifyPassword setIsVerified={setIsVerified} />
      )}
    </section>
  );
};

export default CounselPageById;
