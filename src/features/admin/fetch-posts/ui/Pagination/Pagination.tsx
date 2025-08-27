import s from "./Pagination.module.css";

export const Pagination = ({ page, setPage, totalPages }) => {
  return (
    <nav className={s.Pagination}>
      {/* 앞으로 이동 */}
      <ul className={s.ul}>
        <li
          className={s.li}
          onClick={() =>
            setPage((prev: number) => {
              if (prev > 1) return prev - 1;
              return 1;
            })
          }
        >
          {"<"}
        </li>
        {Array.from({ length: totalPages }).map((_, index) => (
          <li
            key={index}
            className={`${s.li} ${page === index + 1 ? s.active : ""}`}
            onClick={() => setPage(index + 1)}
          >
            {index + 1}
          </li>
        ))}
        {/* 뒤로 이동 */}
        <li
          className={s.li}
          onClick={() =>
            setPage((prev: number) => {
              if (prev < totalPages) return prev + 1;
              return totalPages;
            })
          }
        >
          {">"}
        </li>
      </ul>
    </nav>
  );
};
