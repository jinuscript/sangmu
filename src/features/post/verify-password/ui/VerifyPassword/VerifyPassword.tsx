import { VerifyPasswordForm } from "../VerifyPasswordForm/VerifyPasswordForm";
import s from "./VerifyPassword.module.css";

export const VerifyPassword = ({ setIsVerified }) => {
  return (
    <section className={s.VerifyPassword}>
      <h2 className={s.h2}>비밀글 기능으로 보호된 글입니다</h2>
      <div className={s.descContainer}>
        <p className={s.p}>작성자와 관리자만 열람하실 수 있습니다.</p>
        <p className={s.p}>본인이라면 비밀번호를 입력해주세요.</p>
      </div>
      <VerifyPasswordForm setIsVerified={setIsVerified} />
    </section>
  );
};
