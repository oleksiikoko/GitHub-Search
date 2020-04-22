import classNames from "classnames";
import kFormatter from "utils/kFormatter";

const Stars: React.FC<{ full_name: string; stargazers_count: number }> = ({
  full_name,
  stargazers_count,
}) => {
  return (
    <a href={`https://github.com/${full_name}/stargazers`} className="d-ib">
      <div className={classNames("stars", "div-flex-center")}>
        <svg
          aria-label="star"
          viewBox="0 0 14 16"
          version="1.1"
          width="14"
          height="16"
          role="img"
        >
          <path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path>
        </svg>
        <p>{kFormatter(stargazers_count, 0)}</p>
      </div>
    </a>
  );
};

export default Stars;
