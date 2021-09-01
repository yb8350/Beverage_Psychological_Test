import Button from "../Button";
import BackgroundMusic from "../BackgroundMusic";
import "./Header.scss";

const isFirst = true;

const Header = () => (
  <header className="header">
    <div className="header-content">
      {isFirst && (
        <span>
          <div className="left">
            <Button>뒤로가기</Button>
          </div>
        </span>
      )}
      <span>
        <div className="center">로고 이미지</div>
      </span>
      <span>
        <div className="right">
          <BackgroundMusic></BackgroundMusic>
        </div>
      </span>
    </div>
  </header>
);

export default Header;
