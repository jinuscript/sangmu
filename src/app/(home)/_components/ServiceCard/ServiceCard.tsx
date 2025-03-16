import s from './ServiceCard.module.css';

type TServiceCard = {
  title: string;
  desc: string;
};

export default function ServiceCard({ title, desc }: TServiceCard) {
  return (
    <div className={s.ServiceCard}>
      <p className={s.title}>{title}</p>
      <p className={s.desc}>{desc}</p>
    </div>
  );
}
