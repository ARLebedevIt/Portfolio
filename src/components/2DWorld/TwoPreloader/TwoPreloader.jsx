import React, { useRef } from "react";
import './TwoPreloader.scss'
import holoMobile from '../../../assets/image/holoMobile.png'
import { gsap } from "gsap";
import ScannerPreloaderWrapper from "./TwoPreloaderModel/ScannerPreloaderWrapper";
import { useBrowser } from "../../../hooks/useBrowser";
import { useTranslation } from "react-i18next";
import { useLayoutEffect } from "react";
import { useMediaQueries } from "../../../hooks/useMediaQuery";

const TwoPreloader = React.memo(({apploaded , setAppLoaded}) => {
  const { size1025, size990 } = useMediaQueries()
  const { t } = useTranslation('global')
  const preloaderContainer = useRef(null)
  const preloaderModel = useRef(null)
  const preloaderButton = useRef(null)
  const preloaderIMG = useRef(null)
  const preloaderIMGMobile = useRef(null)
  const currBrowser = useBrowser()
  useLayoutEffect(() => {
    if (apploaded == true) {
      gsap.timeline().to(preloaderModel.current, {
        zIndex: -10,
        opacity: 0,
        duration: 0.07,
      })
      gsap.timeline().to(preloaderButton.current, {
        opacity: 1,
        cursor: 'pointer',
      })
      gsap.timeline().to(preloaderIMGMobile.current, {
        opacity: 1,
      })
      gsap.timeline().to(preloaderIMG.current, {
        display: 'none',
        duration: 0.03,
      })
    }
    if (apploaded == 'ready') {
      gsap.timeline().to(preloaderContainer.current, {
        opacity: 0,
        duration: 0.02,
      })
      gsap.timeline().to(preloaderModel.current, {
        display: 'none',
      })
      gsap.timeline().to(preloaderContainer.current, {
        display: 'none',
        delay: .25,
      })
    }
  }, [apploaded])

  if (apploaded === 'ready') {
    return null
  }

  return (
    <div ref={preloaderContainer} className="preloader__container">
      <div className="preloader__items">
        <div className="preloader__item">
          <div className="preloader__loader">
            <div ref={preloaderIMG} className="loader">
              <div className="loading__circle loading__circle_one"></div>
              <div className="loading__circle loading__circle_two"></div>
              <div className="loading__circle loading__circle_three"></div>
            </div>
          </div>
        </div>
        <div style={{display: currBrowser.name == 'Safari' && currBrowser.version <= 15 && !size990 && 'none'}} ref={preloaderModel} 
        className="preloader__item">
          <ScannerPreloaderWrapper />
        </div>
        <div className="preloader__item">
          {size1025 && <img className="holoMobile__img" ref={preloaderIMGMobile} src={holoMobile} alt="Not Found" />}
          <button ref={preloaderButton} className="preloader__item_button"
            disabled={apploaded === true ? false : apploaded === false ? true : null}
            onClick={() => setAppLoaded('ready')}>
            <div className="holo_text">
              <span>{t('Preloader.title')}</span>
            </div>
            <div style={{display: currBrowser.name == 'Safari' && currBrowser.version <= 15 && 'none'}} className="holo"></div>
          </button>
        </div>
      </div>
    </div>
  )
})

export default TwoPreloader