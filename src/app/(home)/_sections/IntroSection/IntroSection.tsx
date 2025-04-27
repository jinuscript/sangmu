import Image from "next/image";
import s from "./IntroSection.module.css";

export default function IntroSection() {
  return (
    <section className={s.IntroSection} id="1">
      <div className={s.layoutContainer}>
        <div className={s.quoteContainer}>
          <p className={s.quote}>끝까지 책임을 다하는 성실한 변호사</p>
        </div>

        <div className={s.letterContainer}>
          <Image
            className={s.profileImg}
            src="/home/profile.jpg"
            alt=""
            width={640}
            height={960}
          />
          <div className={s.letter}>
            <p className={s.p}>
              안녕하세요?{" "}
              <span className={s.strong}>
                법률사무소 상무 대표변호사 송지현
              </span>
              입니다.
            </p>

            <p className={s.p}>
              인생에서 단 한 번도 접해보지 않았던 법률 문제. 그 일이 어느 날
              갑자기 나의 문제가 되었을 때, 많은 분들이 당황하고
              혼란스러워합니다. 그리고 생각합니다.
            </p>

            <p className={s.p}>
              <span className={s.strong}>
                &quot;어떤 변호사를 찾아야, 이 문제를 가장 잘 해결할 수
                있을까?&quot;
              </span>
            </p>

            <p className={s.p}>
              수많은 광고 속 법률사무소들, 그럴듯한 법무법인들도 많습니다.
              하지만 결국 가장 중요한 건{" "}
              <span className={s.strong}>
                성실하게, 책임감 있게, 내 사건을 끝까지 맡아줄 단 한 명의 변호사
              </span>
              를 만나는 것입니다.
            </p>

            <p className={s.p}>
              재산상의 큰 손실을 막아줄 민사소송이나 갑작스런 위기로 다가온
              형사재판, 배우자의 부정행위와 폭행, 폭언 등으로 망가져 버린
              가정에서의 탈출 등 이 거대한 난제를 혼자서 대응해 나가기가 힘겨울
              때 저희 사무실의 문을 두드려주십시오
            </p>

            <p className={s.p}>
              <span className={s.strong}>송지현 변호사</span>라는 이름을 걸고
              진정성 있는 상담과 꼼꼼한 대응으로, 좋은 결과로 보답드리겠습니다.
            </p>

            <p className={s.p}>
              과도한 비용 없이 책임과 신뢰, 여성 변호사의 섬세함으로 최선을
              다하겠습니다.
            </p>

            <p className={s.p}>감사합니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
