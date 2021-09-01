import Button from "../Button";
import BackgroundMusic from "../BackgroundMusic";
import { useState } from 'react';
import "./Header.scss";

const isFirst = true;

function Header() {
  const [play,setPlay] = useState(false);
  const playing = () => {
    setPlay(!play);
  }
  return(
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
          <BackgroundMusic onClick={playing} play={play}></BackgroundMusic>
        </div>
      </span>
    </div>
  </header>
  );
}

export default Header;
