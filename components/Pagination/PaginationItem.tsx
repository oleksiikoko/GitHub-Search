import classNames from "classnames";

interface IProps {
  disable: boolean;
  enable: boolean;
  text: string;
  onClick: Function;
}

const PaginationItem: React.FC<IProps> = ({
  disable,
  enable,
  text,
  onClick,
}) => {
  return (
    <div
      className={classNames("pagination__item", {
        "pagination__item--enable": enable,
        "pagination__item--disable": disable,
      })}
      onClick={() => onClick(text)}
    >
      {text}
    </div>
  );
};

export default PaginationItem;
