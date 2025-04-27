import s from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={s.HeroSection}>
      <div className={s.hero}>
        <div className={s.overlay} />

        <div className={s.titleContainer}>
          <p className={`${s.title} ${s.title1}`}>
            마음을 이해하는 <span className={s.strong}>변호</span>를
          </p>
          <p className={`${s.title} ${s.title2}`}>
            사건을 정확히 파악하여 <span className={s.strong}>승소</span>로
            이끄는 <span className={s.strong}>변론</span>
          </p>
          <p className={s.p}>
            상담부터 판결까지, <span className={s.strong}>법률사무소 상무</span>
            는 진심을 담아 함께합니다
          </p>
        </div>
      </div>
    </section>
  );
}
