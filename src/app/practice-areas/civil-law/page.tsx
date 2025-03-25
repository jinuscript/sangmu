import { PracticeAreasCard } from "@/app/practice-areas/_components";
import CIVIL_LAW_DATA from "@/app/practice-areas/_datas/civil-law-data.json";
import s from "./PracticeAreasPage.module.css";

export default async function PracticeAreasPage() {
  return (
    <main>
      {/* 상단 배너 */}
      <div className={s.banner}>
        <div className={s.overlay}>
          <h2 className={s.title}>민사</h2>
        </div>
      </div>

      {CIVIL_LAW_DATA.map((item, index) => {
        const { title, content } = item;

        const isEven = index % 2 === 0;

        return (
          <PracticeAreasCard
            key={index}
            type={isEven ? "white" : "gray"}
            title={title}
            content={content}
          />
        );
      })}
    </main>
  );
}
