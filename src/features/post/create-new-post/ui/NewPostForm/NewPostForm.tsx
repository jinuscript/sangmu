"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import type { ChangeEvent } from "react";

import { useCreateNewPostMutation } from "@/features/post/create-new-post/hook";

import s from "./NewPostForm.module.css";

export const NewPostForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    content: "",
    phone: "",
    password: "",
  });

  const [privacy, setPrivacy] = useState(false);

  const { push } = useRouter();

  const { mutate: createNewPost } = useCreateNewPostMutation({
    onSuccess: () => {
      alert("글이 작성되었습니다!");
      push(`/counsel`);
    },
    onError: (error) => {
      console.error(error);
      alert("글 작성에 실패했습니다. 다시 시도해주세요.");
    },
    onSettled: () => {
      setFormData({
        name: "",
        title: "",
        content: "",
        password: "",
      });
    },
  });

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValid()) {
      return;
    }

    createNewPost(formData);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const isValid = () => {
    if (
      !formData.name ||
      !formData.title ||
      !formData.content ||
      !formData.password
    ) {
      alert("입력되지 않은 값이 있습니다");
      return false;
    }

    if (!privacy) {
      alert("선택하지 않은 값이 있습니다");
      return false;
    }
  };

  return (
    <form className={s.NewPostForm} onSubmit={handleSubmit}>
      {/* 이름 */}
      <div className={`${s.Input} ${s.name}`}>
        <label htmlFor="name">이름</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="홍길동"
          maxLength={5}
        />
      </div>

      {/* 연락처 */}
      <div className={`${s.Input} ${s.phone}`}>
        <label htmlFor="phone">휴대폰</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="010-1234-5678"
          maxLength={13}
        />
      </div>

      {/* 비밀번호 */}
      <div className={`${s.Input} ${s.password}`}>
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          maxLength={8}
          placeholder="최대 8자리 숫자를 입력해주세요"
        />
      </div>

      {/* 제목 */}
      <div className={`${s.Input} ${s.title}`}>
        <label htmlFor="title">제목</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="제목"
          maxLength={20}
        />
      </div>

      {/* 내용 */}
      <div className={`${s.Textarea} ${s.content}`}>
        <label htmlFor="content">내용</label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="상담 내용을 작성해주세요."
        />
      </div>

      <div className={`${s.Checkbox} ${s.privacy}`}>
        <input
          id="privacy"
          name="privacy"
          type="checkbox"
          checked={privacy}
          onChange={() => setPrivacy((prev) => !prev)}
        />
        <label htmlFor="privacy">
          개인정보 취급 동의
          <Link href=""> [전문]</Link>
        </label>
      </div>

      <div className={s.buttonContainer}>
        <button className={s.button}>상담 신청</button>
      </div>
    </form>
  );
};
