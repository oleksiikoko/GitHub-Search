import classNames from "classnames";
import languageConfig from "assets/laguage.json";

const Language: React.FC<{ language: string }> = ({ language }) => {
  return (
    language && (
      <div className={classNames("language", "div-flex-center")}>
        <div
          className="d-ib"
          style={{
            backgroundColor: `${languageConfig[language].color}`,
          }}
        ></div>
        <p className="d-ib"> {language}</p>
      </div>
    )
  );
};

export default Language;
