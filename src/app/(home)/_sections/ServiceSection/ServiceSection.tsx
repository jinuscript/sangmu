import { ServiceCard } from '@/app/(home)/_components';
import s from './ServiceSection.module.css';

export default function ServiceSection() {
  return (
    <section className={s.ServiceSection}>
      <ServiceCard />
    </section>
  );
}
