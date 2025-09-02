import Link from "next/link";

import { fetchPosts } from "@/features/post/fetch-posts/api";

import { formatDate } from "@/shared/utils";

import s from "./AdminPage.module.css";

const AdminPage = async () => {
  const { data: posts } = await fetchPosts();

  return (
    <section>
      {posts?.map((post) => {
        const { id, created_at, name, title, admin_reply } = post;

        return (
          <Link className={s.AdminPost} key={id} href={`/admin/${id}`}>
            <div className={s.header}>
              {admin_reply ? (
                <span className={`${s.badge} ${s.active}`}>상담 완료</span>
              ) : (
                <span className={`${s.badge} ${s.inactive}`}>상담 진행</span>
              )}

              <p className={s.title}>{title}</p>
              <div className={s.metaContainer}>
                <p className={s.date}>{formatDate(created_at)}</p>
                <p className={s.name}>{name}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default AdminPage;
