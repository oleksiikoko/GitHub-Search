import { IRepositoryItem } from "interfaces";

import { ItemTopics } from "components";
import ItemAbout from "./ItemAbout";

import "styles/RepoItem.global.scss";
import OcticonSvg from "assets/img/OcticonSvg";

interface IProps {
  item: IRepositoryItem;
}

const RepoItem: React.FC<IProps> = ({ item }) => {
  const {
    full_name,
    html_url,
    description,
    stargazers_count,
    language,
    license,
    updated_at,
    topics,
    issues_need_help,
  } = item;

  return (
    <div className="repo-item">
      <div className="repo-item__icon">
        <OcticonSvg />
      </div>
      <div className="repo-item__info">
        <div className="repo-item__name">
          <a href={html_url}>{full_name}</a>
        </div>
        <p className="repo-item__description">{description}</p>
        <ItemTopics topics={topics} />
        <ItemAbout
          full_name={full_name}
          stargazers_count={stargazers_count}
          language={language}
          license={license}
          updated_at={updated_at}
          issues_need_help={issues_need_help}
        />
      </div>
    </div>
  );
};

export default RepoItem;
