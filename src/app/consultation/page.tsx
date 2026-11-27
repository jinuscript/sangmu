import type { Metadata } from "next";
import { ConsultationForm } from "@/features/consultation/ui";
import s from "./ConsultationPage.module.css";

export const metadata: Metadata = {
  title: "온라인 상담 신청 | 법률사무소 상무",
  description:
    "변호사에게 온라인으로 법률 상담을 신청하세요. 상담 분야와 내용을 남겨 주시면 담당 변호사가 확인 후 연락드립니다.",
};

export default function ConsultationPage() {
  return (
    <main>
      {/* 상단 배너 */}
      <div className={s.banner}>
        <div className={s.overlay}>
          <h2 className={s.title}>온라인 상담 신청</h2>
        </div>
      </div>

      <div className={s.container}>
        <p className={s.desc}>
          상담 내용을 남겨 주시면 담당 변호사가 확인한 뒤 남겨 주신 연락처로
          연락드립니다. 급한 사안은 전화로 문의해 주세요.
        </p>
        <ConsultationForm />
      </div>
    </main>
  );
}
