import s from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={s.HeroSection}>
      <div className={s.hero}>
        <div className={s.overlay}></div>
        <div className={s.titleContainer}>
          <p className={`${s.title} ${s.title1}`}>
            당신의 <span className={s.strong}>마음</span>을 이해하는
          </p>
          <p className={`${s.title} ${s.title2}`}>
            <span className={s.strong}>경험</span>이 빛나는{' '}
            <span className={s.strong}>법률사무소 상무</span>
          </p>
        </div>
      </div>
    </section>
  );
}
