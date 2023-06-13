import { useEffect, useState } from 'react';
import music from '../audio/music.mp3';
import useSound from 'use-sound';

import { BsFillStopFill, BsPlayFill } from 'react-icons/bs';
function Music() {
  const [audioPlay, setAudioPlay] = useState(1);
  const [play, { stop }] = useSound(music, {
    interrupt: false,
    volume: 0.5,
  });

  let myAudio = document.getElementById('myAudio');
  const handleSound = () => {
    if (audioPlay === 1) {
      stop();
      setAudioPlay(0);
    } else {
      play();
      setAudioPlay(1);
    }
  };

  useEffect(() => {
    // if (audioPlay === 0) {
    //   stop();
    //   setAudioPlay(1);
    // } else {
    //   play();
    //   setAudioPlay(0);
    // }

    if (audioPlay === 1) {
      play();
    }
  });

  return (
    <>
      {/* <audio
            id='myAudio'
            preload='true'
            autoPlay
            loop
        >
            <source src={music} />
        </audio> */}
      <button
        className='fixed z-50 right-5 bottom-5 bg-black rounded-full h-16 w-16 flex items-center justify-center text-white text-3xl'
        onClick={handleSound}
      >
        {audioPlay ? <BsFillStopFill /> : <BsPlayFill />}
      </button>
    </>
  );
}

export default Music;
