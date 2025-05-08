import s from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={s.HeroSection}>
      <div className={s.hero}>
        <div className={s.overlay} />

        <div className={s.titleContainer}>
          <p className={`${s.title} ${s.title1}`}>
            의뢰인의 억울함을 <span className={s.strong}>이해</span>하고
          </p>
          <p className={`${s.title} ${s.title1}`}>
            사건을 정확히 <span className={s.strong}>파악</span>하여
          </p>
          <p className={`${s.title} ${s.title2}`}>
            <span className={s.strong}>승소</span>로 이끄는 변론
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
