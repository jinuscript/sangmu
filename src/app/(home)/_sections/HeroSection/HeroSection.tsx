import s from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={s.HeroSection}>
      <div className={s.hero}>
        <div className={s.overlay} />

        <div className={s.titleContainer}>
          <p className={`${s.title} ${s.title1}`}>
            의뢰인의 상황을 <span className={s.strong}>이해</span>하고
          </p>
          <p className={`${s.title} ${s.title1}`}>
            사건을 정확히 <span className={s.strong}>파악</span>하여
          </p>
          <p className={`${s.title} ${s.title2}`}>
            승소로 이끄는 <span className={s.strong}>열정적인 변론</span>
          </p>
          <p className={s.p}>
            상담부터 판결까지, <span className={s.strong}>법률사무소 상무</span>
            는
          </p>
          <p className={s.p}>송지현변호사가 직접 진행합니다</p>
        </div>
      </div>
    </section>
  );
}
