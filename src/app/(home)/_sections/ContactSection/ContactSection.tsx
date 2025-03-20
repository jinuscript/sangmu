"use client";

import { useState, ChangeEvent } from "react";
import { LayoutContainer } from "@/app/(home)/_components";
import { sendEmail } from "@/lib/actions";
import s from "./ContactSection.module.css";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    content: "",
    agreement: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, type, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <section className={s.ContactSection}>
      <LayoutContainer>
        <h2 className={s.title}>상담 문의</h2>
        <form action={sendEmail}>
          <div className={s.InputContainer}>
            <div className={s.Input}>
              <label className={s.label} htmlFor="">
                성함
              </label>
              <input
                className={s.input}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className={s.Input}>
              <label className={s.label} htmlFor="">
                휴대폰
              </label>
              <input
                className={s.input}
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={s.Textarea}>
            <label className={s.label} htmlFor="">
              문의내용
            </label>
            <textarea
              className={s.textarea}
              name="content"
              value={formData.content}
              onChange={handleChange}
            />
          </div>

          <div className={s.Checkbox}>
            <input
              type="checkbox"
              name="agreement"
              checked={formData.agreement}
              onChange={handleChange}
            />
            <label htmlFor="">개인정보 수집 및 이용동의</label>
          </div>

          <div className={s.buttonContainer}>
            <button className={s.button}>상담 신청</button>
          </div>
        </form>
      </LayoutContainer>
    </section>
  );
}
