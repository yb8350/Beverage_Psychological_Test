import React from "react";
import cafeBgm from '../assets/cafeBgm.mp3';

function BackgroundMusic() {
  return(
    <div>
      <audio controls src={cafeBgm} autoPlay={true}>mp3파일을 지원하지 않는 브라우저입니다.</audio>
    </div>
  );
}

export default BackgroundMusic;