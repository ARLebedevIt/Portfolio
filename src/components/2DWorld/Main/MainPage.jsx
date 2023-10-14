import React, { useEffect, useRef } from "react";
import './MainPage.scss'
import mainVideoWEBM from '../../../assets/video/mainVideo.webm'
import mainVideoMP4 from '../../../assets/video/mainVideo.mp4'
import GlitchText from "../../Common/GlitchText/GlitchText"

const MainPage = React.memo((props) => {
  const videoRef = useRef(null)
  useEffect(() => {
    if (props.apploaded === 'ready') {
      videoRef.current?.play()
    }
  }, [props.apploaded])
  return (
    <article id="mainPageContent" className="content__mainPage">
      <div className="mainPage__items">
        <div className="mainPage__item">
          <GlitchText text={'A.Lebedev'} className="mainPage__item_logo">
            <span>A.Lebedev</span>
          </GlitchText>
        </div>
        <div className="mainPage__video">
          <video ref={videoRef} preload="metadata" muted playsInline loop >
            <source src={mainVideoWEBM} type="video/webm" />
            <source src={mainVideoMP4} type="video/mp4" />
          </video>
        </div>
      </div>
    </article>
  )
})

export default MainPage