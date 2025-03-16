import { StrengthCard } from '@/app/(home)/_components';
import s from './StrengthSection.module.css';

export default function StrengthSection() {
  return (
    <section className={s.StrengthSection}>
      <div className={s.layoutContainer}>
        <div className={s.StrengthCardContainer}>
          <StrengthCard type="경력" />
          <StrengthCard type="맞춤상담" />
          <StrengthCard type="비밀" />
        </div>
      </div>
    </section>
  );
}
