import {
  HeroSection,
  IntroSection,
  ServiceSection,
  LocationSection,
  StrengthSection,
} from '@/app/(home)/_sections';
import s from './HomePage.module.css';

export default function HomePage() {
  return (
    <main className={s.HomePage}>
      {/* 2. 히어로 섹션 */}
      <HeroSection />

      {/* 키 포인트 추가 */}
      <StrengthSection />

      {/* 3. 소개 섹션 */}
      <IntroSection />

      <ServiceSection />

      {/* 4. 위치 섹션 */}
      <LocationSection />
    </main>
  );
}
