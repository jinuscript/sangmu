import { HeroSection } from '@/app/(home)/_sections';
import s from './HomePage.module.css';

export default function HomePage() {
  return (
    <main className={s.HomePage}>
      {/* 2. 히어로 섹션 */}
      <HeroSection />
    </main>
  );
}
