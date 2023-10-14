import React, { memo, useEffect, useState } from "react";
import useSound from "use-sound";
import music from '../../../assets/sound/bgSound.mp3'
import './SoundWidget.scss';

const SoundWidget = memo((props) => {
  const [isPlaying, setPlaying] = useState(false)
  const [play, { sound }] = useSound(music, { volume: 0.02 });
  useEffect(() => {
    if (props.apploaded === 'ready') {
      play()
      setPlaying(true)
      sound?.loop(true)
    }
  }, [props.apploaded])

  useEffect(() => {
    if (props.openSurreal) {
      play()
      setPlaying(true)
      sound?.loop(true)
    }
  }, [props.openSurreal])

  useEffect(() => {
    isPlaying ? sound?.fade(0, .06, 1000) : sound?.fade(.06, 0, 1000)
  }, [isPlaying])
  return (
    <div className={`soundWidget ${props.className ?? ''}`} style={{ opacity: props.menuOpen && '0' }} 
    onClick={() => setPlaying(value => !value)}>
      <svg fill="#e8e8e8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 26">
        <g data-name="audio-wave">
          <rect id="wave-5" className={isPlaying ? "soundWidget_plays" : "soundWidget_pause"} x="32" y="7" width="4" height="12" rx="2" ry="2" />
          <rect id="wave-4" className={isPlaying ? "soundWidget_plays" : "soundWidget_pause"} x="24" y="2" width="4" height="22" rx="2" ry="2" />
          <rect id="wave-3" className={isPlaying ? "soundWidget_plays" : "soundWidget_pause"} x="16" width="4" height="26" rx="2" ry="2" />
          <rect id="wave-2" className={isPlaying ? "soundWidget_plays" : "soundWidget_pause"} x="8" y="5" width="4" height="16" rx="2" ry="2" />
          <rect id="wave-1" className={isPlaying ? "soundWidget_plays" : "soundWidget_pause"} y="9" width="4" height="8" rx="2" ry="2" />
          <rect id="wave-5-2" data-name="wave-4" className={isPlaying ? "soundWidget_plays" : "soundWidget_pause"} x="72" y="7" width="4" height="12" rx="2" ry="2" />
          <rect id="wave-4-2" data-name="wave-5" className={isPlaying ? "soundWidget_plays" : "soundWidget_pause"} x="64" y="2" width="4" height="22" rx="2" ry="2" />
          <rect id="wave-3-2" data-name="wave-3" className={isPlaying ? "soundWidget_plays" : "soundWidget_pause"} x="56" width="4" height="26" rx="2" ry="2" />
          <rect id="wave-2-2" data-name="wave-2" className={isPlaying ? "soundWidget_plays" : "soundWidget_pause"} x="48" y="5" width="4" height="16" rx="2" ry="2" />
          <rect id="wave-1-2" data-name="wave-1" className={isPlaying ? "soundWidget_plays" : "soundWidget_pause"} x="40" y="9" width="4" height="8" rx="2" ry="2" />
        </g>
      </svg>
    </div>
  )
})

export default SoundWidget