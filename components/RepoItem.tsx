import "styles/RepoItem.global.scss";
import languageConfig from "assets/laguage.json";
import { IRepositoryItem } from "interfaces";
import kFormatter from "utils/kFormatter";

import { ItemTopics } from "components";
import ItemAbout from "./ItemAbout";

interface IProps {
  item: IRepositoryItem;
}

const RepoItem: React.FC<IProps> = ({ item }) => {
  const {
    full_name,
    owner,
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
        <svg
          height="16"
          viewBox="0 0 12 16"
          version="1.1"
          width="12"
          aria-hidden="true"
        >
          <path
            fill="#586069"
            fill-rule="evenodd"
            d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
          />
        </svg>
      </div>
      <div className="repo-item__info">
        <div className="repo-item__name">
          <a href="/">{full_name}</a>
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
