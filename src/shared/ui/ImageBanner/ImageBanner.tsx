import s from "./ImageBanner.module.css";

type TImageBanner = {
  className?: string;
};

export const ImageBanner = ({ className }: TImageBanner) => {
  return (
    <section className={`${s.ImageBanner} ${className}`}>
      <h1 className={s.h1}>온라인 상담</h1>
    </section>
  );
};
