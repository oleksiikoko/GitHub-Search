import Stars from "./Stars";
import Language from "./Language";
import License from "./License";
import Updated from "./Updated";

interface IProps {
  full_name: string;
  stargazers_count: number;
  language: string;
  license: string;
  updated_at: Date;
  issues_need_help: number;
}

const ItemAbout: React.FC<IProps> = ({
  full_name,
  stargazers_count,
  language,
  license,
  updated_at,
  issues_need_help,
}) => {
  return (
    <div className="repo-item__about div-flex-center">
      <Stars full_name={full_name} stargazers_count={stargazers_count} />
      <Language language={language} />
      <License license={license} />
      <Updated updated_at={updated_at} />
      {issues_need_help !== 0 && (
        <div className="issues-need-help">
          {issues_need_help} issues need help
        </div>
      )}
    </div>
  );
};

export default ItemAbout;
