import { formatDate } from "@/shared/utils";
import { fetchPostById } from "@/features/post/fetch-post-by-id/api";
import { DeletePostButton } from "@/features/admin/delete-post/ui";

import s from "./AdminPageById.module.css";

const AdminPageById = async ({ params }) => {
  const { id } = await params;
  const { data: post } = await fetchPostById(id);

  return (
    <section className={s.AdminPageById}>
      {/* 제목 */}
      <div className={s.header}>
        <div className={s.headerTop}>
          {post?.admin_reply ? (
            <span className={`${s.badge} ${s.active}`}>상담 완료</span>
          ) : (
            <span className={`${s.badge} ${s.inactive}`}>상담 진행</span>
          )}
          <DeletePostButton />
        </div>

        <p className={s.title}>{post?.title}</p>
        <div className={s.metaContainer}>
          <p className={s.date}>{formatDate(post?.created_at)}</p>
          <p className={s.name}>{post?.name}</p>
        </div>
      </div>

      {/* 본문 */}
      <p className={s.content}>{post?.content}</p>

      {/* 답변 */}
      <div className={s.reply}>
        <textarea
          defaultValue={post?.admin_reply ?? ""}
          className={s.textarea}
          name="reply"
          placeholder="답변을 등록해주세요."
        />
        <div className={s.buttonContainer}>
          <button className={s.button}>
            {post?.admin_reply ? "답변 수정" : "답변 등록"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdminPageById;
