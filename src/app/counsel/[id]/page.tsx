"use client";

import { VerifyPasswordForm } from "@/features/post/verify-password/ui";
import { PostByIdPage } from "@/features/post/fetch-post-by-id/ui";
import { useState } from "react";

const CounselPageById = () => {
  const [isVerified, setIsVerified] = useState(false);

  if (!isVerified) {
    return <VerifyPasswordForm setIsVerified={setIsVerified} />;
  }

  return <PostByIdPage />;
};

export default CounselPageById;
