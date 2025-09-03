"use client";

import { useState } from "react";

import { useParams } from "next/navigation";

import { PostPasswordForm } from "@/features/post/check-post-password/ui/PostPasswordForm/PostPasswordForm";
import { PostByIdPage } from "@/features/post/fetch-post-by-id/ui";

const PostPage = () => {
  const [isVerified, setIsVerified] = useState(false);

  const { id } = useParams<{ id: string }>();

  if (!isVerified) {
    // 비밀번호 입력 폼
    return <PostPasswordForm id={id} setIsVerified={setIsVerified} />;
  }

  // 문의 페이지
  return <PostByIdPage id={id} />;
};

export default PostPage;
