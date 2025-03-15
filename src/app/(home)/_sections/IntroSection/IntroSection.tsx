import Image from 'next/image';
import s from './IntroSection.module.css';

export default function IntroSection() {
  return (
    <section className={s.IntroSection}>
      <div className={s.layoutContainer}>
        <div className={s.quoteContainer}>
          <p className={s.quote}>10년째 광주에서 경력을 쌓아온 상무</p>
        </div>

        <div className={s.letterContainer}>
          <Image
            className={s.profile}
            src="/home/profile.jpg"
            alt=""
            width={640}
            height={960}
          />
          <div className={s.letter}>
            <p className={s.p}>
              안녕하세요?{' '}
              <span className={s.strong}>
                법무법인 상무 대표, 변호사 송지현
              </span>
              입니다.
            </p>

            <p className={s.p}>
              저는 직접 상담과 의뢰인과의 긴밀한 소통을 가장 중요하게
              생각합니다. 이혼은 인생에서 겪기 어려운 큰 풍파인 만큼, 의뢰인의
              상황과 감정에 진심으로 공감하며{' '}
              <span className={s.strong}>
                서면 작성부터 사건 진행, 판결 및 조정내용 이행에 이르기까지
                변호사인 제가 전 과정을 책임지고 살핍니다.
              </span>
            </p>

            <p className={s.p}>
              이혼은 한 번도 경험하지 못한 복잡하고 고통스러운 절차일 수
              있습니다. 저에게는 축적된 노하우와 수많은 실제 사례에서 쌓인
              전문성이 있습니다. 제 사무실에서 저를 직접 만나고, 이야기하며
              문제를 해결해 갈 수 있습니다.
            </p>

            <p className={s.p}>
              일부 업체들이 과장광고나 형식적인 ‘이혼전문’ 타이틀만을 걸고,
              의뢰인과 제대로 소통하지 않는 경우가 있다는 점을 잘 알고 있습니다.
              <span className={s.strong}>
                저는 “변호사 송지현”이라는 이름이 곧 브랜드가 될 수 있도록,
                진정성 있는 상담과 꼼꼼한 진행으로 의뢰인 여러분의 선택에
                보답하겠습니다.
              </span>
            </p>

            <p className={s.p}>
              책임과 신뢰, 그리고 여성 변호사의 섬세함으로 최선을 다하겠습니다.
              감사합니다.
            </p>

            <p className={s.p}>감사합니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
