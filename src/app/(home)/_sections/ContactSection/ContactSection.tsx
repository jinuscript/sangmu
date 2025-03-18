import { LayoutContainer } from "@/app/(home)/_components";
import s from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <section className={s.ContactSection}>
      <LayoutContainer>
        <h2 className={s.title}>상담 문의</h2>
        <div className={s.InputContainer}>
          <div className={s.Input}>
            <label className={s.label} htmlFor="">
              성함
            </label>
            <input className={s.input} type="text" />
          </div>

          <div className={s.Input}>
            <label className={s.label} htmlFor="">
              휴대폰
            </label>
            <input className={s.input} type="text" />
          </div>
        </div>

        <div className={s.Textarea}>
          <label className={s.label} htmlFor="">
            문의내용
          </label>
          <textarea className={s.textarea} />
        </div>
          <div className={s.Checkbox}>
            <input type="checkbox" />
            <label htmlFor="">개인정보 수집 및 이용동의</label>
          </div>
          <div className={s.buttonContainer}>
            <button className={s.button}>상담 신청</button>
          </div>
      </LayoutContainer>
    </section>
  );
}
