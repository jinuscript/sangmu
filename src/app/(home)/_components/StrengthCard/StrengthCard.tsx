import Image from 'next/image';
import s from './StrengthCard.module.css';

const strength = {
  경력: {
    img: '/home/career.svg',
    title: '15년+ 경력',
    desc: '광주에서만 가사, 민사, 형사 분야에서 15년 넘게 쌓아온 풍부한 노하우로, 가장 효과적인 해결책을 제시합니다',
  },
  맞춤상담: {
    img: '/home/all.svg',
    title: '책임감 있는 일처리',
    desc: '상담·서면 작성·사건 진행·판결 이행까지, 변호사가 전 과정을 직접 책임집니다',
  },
  비밀: {
    img: '/home/sympathy.svg',
    title: '마음을 열고 듣는 상담',
    desc: '문학 박사 출신의 인문학적 통찰로 진솔한 조언을 드리며, 상담 내용은 철저히 비공개 처리합니다',
  },
};

type TStrengthCard = {
  type: '비밀' | '경력' | '맞춤상담';
};

export default function StrengthCard({ type }: TStrengthCard) {
  return (
    <div className={s.StrengthCard}>
      <Image
        className={s.icon}
        src={`${strength[type].img}`}
        alt={`${strength[type].title}`}
        width={40}
        height={40}
      />
      <p className={s.title}>{strength[type].title}</p>
      <p className={s.desc}>{strength[type].desc}</p>
      <p></p>
    </div>
  );
}
