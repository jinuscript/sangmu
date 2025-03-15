import Image from 'next/image';
import s from './ServiceCard.module.css';

export default function ServiceCard() {
  return (
    <div className={s.ServiceCard}>
      <Image
        className={s.icon}
        src="/home/민사.svg"
        alt="민사"
        width={40}
        height={40}
      />
    </div>
  );
}
