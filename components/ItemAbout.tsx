import kFormatter from "utils/kFormatter";
import languageConfig from "assets/laguage.json";

interface IProps {
  full_name: string;
  stargazers_count: number;
  language: string;
  license: string;
  updated_at: Date;
  issues_need_help: number;
}

const Stars: React.FC<{ full_name: string; stargazers_count: number }> = ({
  full_name,
  stargazers_count,
}) => {
  return (
    <a href={`https://github.com/${full_name}/stargazers`}>
      <div className="stars">
        <svg
          aria-label="star"
          viewBox="0 0 14 16"
          version="1.1"
          width="14"
          height="16"
          role="img"
        >
          <path
            fillRule="evenodd"
            fill="#586069"
            d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
          ></path>
        </svg>
        <p>{kFormatter(stargazers_count, 0)}</p>
      </div>
    </a>
  );
};

const ItemAbout: React.FC<IProps> = ({
  full_name,
  stargazers_count,
  language,
  license,
  updated_at,
  issues_need_help,
}) => {
  return (
    <div className="repo-item__about">
      <Stars full_name={full_name} stargazers_count={stargazers_count} />
      <div className="language">
        <div
          style={{
            backgroundColor: `${languageConfig["JavaScript"].color}`,
          }}
        ></div>
        {language}
      </div>
      <div className="license">{license}</div>
      <div className="updated">{updated_at}</div>
      <div className="issues-need-help">
        {issues_need_help} issues need help
      </div>
    </div>
  );
};

export default ItemAbout;
