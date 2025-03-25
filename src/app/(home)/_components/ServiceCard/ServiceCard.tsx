"use client";

import { useGoToPracticeAreas } from "@/app/(home)/_hooks";
import s from "./ServiceCard.module.css";

type TServiceCard = {
  title: string;
  desc: string;
};

export default function ServiceCard({ title, desc }: TServiceCard) {
  const goToPracticeAreas = useGoToPracticeAreas();

  return (
    <div className={s.ServiceCard} onClick={goToPracticeAreas}>
      <p className={s.title}>{title}</p>
      <p className={s.desc}>{desc}</p>
    </div>
  );
}
