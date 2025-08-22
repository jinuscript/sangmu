"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCreateNewPostMutation } from "@/features/post/create-new-post/hook";

import s from "./NewPostForm.module.css";

export const NewPostForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    content: "",
    password: "",
  });

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

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.title ||
      !formData.content ||
      !formData.password
    ) {
      alert("입력되지 않은 값이 있습니다");
      return;
    }

    createNewPost(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form className={s.NewPostForm} onSubmit={handleSubmit}>
      {/* 이름 */}
      <div className={`${s.Input} ${s.name}`}>
        <label htmlFor="">이름</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      {/* 연락처 */}
      <div className={`${s.Input} ${s.phone}`}>
        <label htmlFor="">휴대폰</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      {/* 비밀번호 */}
      <div className={`${s.Input} ${s.password}`}>
        <label htmlFor="">비밀번호</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      {/* 제목 */}
      <div className={`${s.Input} ${s.title}`}>
        <label htmlFor="">제목</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>

      {/* 내용 */}
      <div className={`${s.Textarea} ${s.content}`}>
        <label htmlFor="">내용</label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
        />
      </div>

      <div className={s.buttonContainer}>
        <button className={s.button}>글쓰기</button>
      </div>
    </form>
  );
};
