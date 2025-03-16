import { useServiceTypeAtom } from "@/app/(home)/_atoms";
import s from "./ServiceNavigation.module.css";

export default function ServiceNavigation() {
  const [service, setService] = useServiceTypeAtom();

  const changeService = (type: "가사" | "민사" | "형사") => {
    setService(type);
  };

  return (
    <nav className={s.ServiceNavigation}>
      <ul className={s.ul}>
        <li className={s.li}>
          <button
            className={`${s.button} ${service === "가사" ? s.active : ""}`}
            onClick={() => changeService("가사")}
          >
            가사
          </button>
        </li>
        <li className={s.li}>
          <button
            className={`${s.button} ${service === "민사" ? s.active : ""}`}
            onClick={() => changeService("민사")}
          >
            민사
          </button>
        </li>
        <li className={s.li}>
          <button
            className={`${s.button} ${service === "형사" ? s.active : ""}`}
            onClick={() => changeService("형사")}
          >
            형사
          </button>
        </li>
      </ul>
    </nav>
  );
}
