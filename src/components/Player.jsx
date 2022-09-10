import { useEffect, useRef } from 'react';

const Player = () => {
  const audio = useRef();
  const pauseBtn = useRef();
  const playBtn = useRef();

  useEffect(() => {
    playBtn.current.click();
    // audio.current.muted = false;
  }, []);

  const play = () => {
    console.log('click play');
    audio.current.play();
  };
  const pause = () => {
    audio.current.pause();
  };
  return (
    <aside className="player">
      <audio id="kL" loop="loop" autoPlay ref={audio}>
        <source src="/eroticlounge.mp3" type="audio/mpeg" />
        <source src="/eroticlounge.ogg" type="audio/ogg" />
      </audio>
      <button className="play" onClick={play} ref={playBtn}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.02 14.76">
          <g>
            <g>
              <polyline points="0 0 0 14.76 11.02 7.38" />
            </g>
          </g>
        </svg>
      </button>
      <button className="pause" onClick={pause} ref={pauseBtn}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.05 14.76">
          <g>
            <g>
              <rect width="3.02" height="14.76" />
              <rect x="8.03" width="3.02" height="14.76" />
            </g>
          </g>
        </svg>
      </button>
    </aside>
  );
};

export default Player;
