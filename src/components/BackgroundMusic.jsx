import React, { useState } from "react";
import cafeBgm from '../assets/cafeBgm.mp3';
import On from '../assets/playOn.png';
import Off from '../assets/playOff.png';

function BackgroundMusic({play, onClick}) {
  const playImage = play? On : Off;
  const [audio] = useState(new Audio(cafeBgm));
  if (!play) {
    audio.pause();
  } else {
    audio.play();
    audio.loop = true;
  }
  return(
    <div>
      <img src={playImage} onClick={onClick} alt="hi" />
    </div>
  );
}

export default BackgroundMusic;