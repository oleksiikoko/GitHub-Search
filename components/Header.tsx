import "styles/Header.global.scss";
import { Search } from "containers";
import GitLogoSvg from "assets/img/GitLogoSvg";

interface IProps {
  onSearch: Function;
}

const Header: React.FC<IProps> = ({ onSearch }) => {
  return (
    <div className="header">
      <div className="header__content">
        <div className="git-logo">
          <GitLogoSvg />
        </div>
        <Search onSearch={onSearch} />
      </div>
    </div>
  );
};

export default Header;
