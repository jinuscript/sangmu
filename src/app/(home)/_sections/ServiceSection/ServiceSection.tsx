"use client";

import { useServiceTypeAtom } from "@/app/(home)/_atoms";
import { ServiceCard, ServiceNavigation } from "@/app/(home)/_components";
import SERVICE from "@/app/(home)/_data/SERVICE.json";
import s from "./ServiceSection.module.css";

export default function ServiceSection() {
  const [service] = useServiceTypeAtom();

  return (
    <section className={s.ServiceSection} id="2">
      <div className={s.layoutContainer}>
        <h3 className={s.title}>업무 분야</h3>

        <div className={s.ServiceNavigationContainer}>
          <ServiceNavigation />
        </div>

        <div className={s.ServiceCardContainer}>
          {SERVICE[service].map((s, i) => {
            const { title, desc } = s;
            return <ServiceCard key={i} title={title} desc={desc} />;
          })}
        </div>
      </div>
    </section>
  );
}
