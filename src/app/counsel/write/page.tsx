import { NewPostForm } from "@/features/post/create-new-post/ui";

import s from "./page.module.css";

const WritePage = () => {
  return (
    <main className={s.WritePage}>
      <div className={s.layoutContainer}>
        <NewPostForm />
      </div>
    </main>
  );
};

export default WritePage;
