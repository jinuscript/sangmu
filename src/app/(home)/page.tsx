import {
  ContactSection,
  HeroSection,
  IntroSection,
  ServiceSection,
  LocationSection,
  StrengthSection,
} from "@/app/(home)/_sections";
import s from "./HomePage.module.css";

export default function HomePage() {
  return (
    <main className={s.HomePage}>
      {/* 1. 히어로 섹션 */}
      <HeroSection />

      {/* 2. 특징 섹션 */}
      <StrengthSection />

      {/* 3. 소개 섹션 */}
      <IntroSection />

      {/* 4. 서비스 섹션 */}
      <ServiceSection />

      {/* 5. 상담신청 섹션 */}
      {/* <ContactSection /> */}

      {/* 6. 위치 섹션 */}
      <LocationSection />
    </main>
  );
}
