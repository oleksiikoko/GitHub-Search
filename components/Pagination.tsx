import classNames from "classnames";
import "styles/Pagination.global.scss";

const paginationValues = (count, current) => {
  const res = [];
  if (count > 9) {
    res.push("1");
    res.push("2");
    if (current > 5) {
      res.push("...");
      res.push((current - 2).toString());
      res.push((current - 1).toString());
      res.push(current.toString());
      res.push((current + 1).toString());
      res.push((current + 2).toString());
      if (count - current > 3) {
        res.push("...");
        res.push((count - 1).toString());
        res.push(count.toString());
      } else {
        res.push((count - 2).toString());
        res.push((count - 1).toString());
        res.push(count.toString());
      }
    } else {
      res.push("3");
      res.push("4");
      res.push("5");
      res.push("...");
      res.push((count - 2).toString());
      res.push((count - 1).toString());
    }
  } else {
    for (let i = 1; i <= current; i++) res.push(i.toString());
  }
  return res;
};

const Pagination: React.FC<{
  count: number;
  current: number;
  onClick: Function;
}> = ({ count, current = 1, onClick }) => {
  const paginationArray = paginationValues(count, current);
  return (
    <div className="pagination">
      <div
        className={classNames("pagination__item", {
          // "pagination__item--enable": item === current.toString(),
          "pagination__item--disable": current === 1,
        })}
        onClick={() => onClick("Prev")}
      >
        Previous
      </div>
      {paginationArray.map((item, index) => {
        return (
          <div
            key={index}
            className={classNames("pagination__item", {
              "pagination__item--enable": item === current.toString(),
              "pagination__item--disable": item === "...",
            })}
            onClick={() => onClick(item)}
          >
            {item}
          </div>
        );
      })}
      <div
        className={classNames("pagination__item", {
          // "pagination__item--enable": item === current.toString(),
          "pagination__item--disable": current === count,
        })}
        onClick={() => onClick("Next")}
      >
        Next
      </div>
    </div>
  );
};

export default Pagination;
