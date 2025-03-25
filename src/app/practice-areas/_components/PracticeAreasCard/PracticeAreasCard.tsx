import s from "./PracticeAreasCard.module.css";

type TPracticeAreasCard = {
  type: "white" | "gray";
  title: string;
  content: string;
};

export default function PracticeAreasCard({
  type,
  title,
  content,
}: TPracticeAreasCard) {
  return (
    <div
      className={`${s.PracticeAreasCard} ${
        type === "white" ? s.white : s.gray
      }`}
    >
      <div className={s.layoutContainer}>
        <p className={s.title}>{title}</p>
        <div>
          <p className={s.content}>{content}</p>
        </div>
      </div>
    </div>
  );
}
