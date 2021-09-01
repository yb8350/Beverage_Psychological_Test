import Button from "../Button";

const isFirst = true;

const Header = () => (
  <header className="header">
    <div className="header-content">
      {isFirst && (
        <span>
          <div className="left">
            <Button></Button>뒤로 가기(버튼 컴포넌트)
          </div>
        </span>
      )}
      <span>
        <div className="center">로고 이미지</div>
      </span>
      <span>
        <div className="right">음악 ON/OFF(버튼 컴포넌트)</div>
      </span>
    </div>
  </header>
);

export default Header;
