import { paginationValues } from "utils";

import PaginationItem from "./PaginationItem";

import "styles/Pagination.global.scss";

interface IProps {
  count: number;
  current: number;
  onClick: Function;
}

const Pagination: React.FC<IProps> = ({ count, current = 1, onClick }) => {
  const paginationArray = paginationValues(count, current);

  return (
    <div className="pagination">
      <PaginationItem
        disable={current === 1}
        enable={false}
        text="Previous"
        onClick={onClick}
      />
      {paginationArray.map((item, index) => {
        return (
          <PaginationItem
            disable={item === "..."}
            enable={item === current.toString()}
            text={item}
            onClick={onClick}
          />
        );
      })}
      <PaginationItem
        disable={current === count}
        enable={false}
        text="Next"
        onClick={onClick}
      />
    </div>
  );
};

export default Pagination;
