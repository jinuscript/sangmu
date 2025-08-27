"use client";

import { useState } from "react";

import { Board } from "@/features/admin/fetch-posts/ui";
import { VerifyPassword } from "@/features/admin/verify-admin-password/ui";

const AdminPage = () => {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <section>
      {isVerified ? (
        <Board />
      ) : (
        <VerifyPassword setIsVerified={setIsVerified} />
      )}
    </section>
  );
};

export default AdminPage;
