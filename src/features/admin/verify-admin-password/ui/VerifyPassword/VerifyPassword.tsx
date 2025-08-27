import { VerifyPasswordForm } from "../VerifyPasswordForm/VerifyPasswordForm";
import s from "./VerifyPassword.module.css";

export const VerifyPassword = ({ setIsVerified }) => {
  return (
    <section className={s.VerifyPassword}>
      <h2 className={s.h2}>운영자 페이지</h2>

      <VerifyPasswordForm setIsVerified={setIsVerified} />
    </section>
  );
};
