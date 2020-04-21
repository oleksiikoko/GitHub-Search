import "styles/RepoItem.global.scss";

const RepoItem = () => {
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
          <a href="/">name/name</a>
        </div>
        <p className="repo-item__description">Desc</p>
        <div className="repo-item__topics">
          <div className="topic">topic</div>
          <div className="topic">topic</div>
        </div>
        <div className="repo-item__about">
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
                fill-rule="evenodd"
                fill="#586069"
                d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
              ></path>
            </svg>
            162k
          </div>
          <div className="language">JavaScript</div>
          <div className="license">MIT license</div>
          <div className="updated">Updated 11 hour ago</div>
          <div className="issues-need-help">1 issues need help</div>
        </div>
      </div>
    </div>
  );
};

export default RepoItem;
