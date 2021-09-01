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
        <div className="logo">나는 무슨 음료일까?</div>
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
