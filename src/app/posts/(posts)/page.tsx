import Link from "next/link";

import { fetchPosts } from "@/features/post/fetch-posts/api";
import { formatDate, maskName } from "@/shared/utils";

import s from "./PostsPage.module.css";

const PostsPage = async () => {
  const { data: posts } = await fetchPosts();

  return (
    <section>
      <div className={s.buttonContainer}>
        <Link className={s.CreateNewPostButton} href={`/posts/create`}>
          상담 신청
        </Link>
      </div>
      <div className={s.Posts}>
        <div className={s.header}>
          <p className={`${s.h} ${s.col1}`}>번호</p>
          <p className={`${s.h} ${s.col2}`}>제목</p>
          <p className={`${s.h} ${s.col3}`}>이름</p>
          <p className={`${s.h} ${s.col4}`}>상태</p>
          <p className={`${s.h} ${s.col5}`}>작성일</p>
        </div>
        {posts?.map((post) => {
          const { id, created_at, name, title, admin_reply, post_number } =
            post;

          return (
            <Link className={s.Post} key={id} href={`/posts/${id}`}>
              <p className={`${s.b} ${s.number}`}>{post_number}</p>
              <p className={`${s.b} ${s.title}`}>{title}</p>
              <p className={`${s.b} ${s.name}`}>{maskName(name)}</p>
              {admin_reply ? (
                <p className={`${s.b} ${s.reply}`}>
                  <span className={`${s.badge} ${s.active}`}>상담 완료</span>
                </p>
              ) : (
                <p className={`${s.b} ${s.reply}`}>
                  <span className={`${s.badge} ${s.inactive}`}>상담 진행</span>
                </p>
              )}
              <p className={`${s.b} ${s.date}`}>{formatDate(created_at)}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default PostsPage;
