import { ReactNode } from "react";
import s from "./LayoutContainer.module.css";

type TLayoutContainer = {
  children: ReactNode;
};

export default function LayoutContainer({ children }: TLayoutContainer) {
  return <div className={s.LayoutContainer}>{children}</div>;
}
