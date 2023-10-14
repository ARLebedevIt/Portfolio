import React, { useEffect, useRef } from "react";
import './SurrealPreloader.scss'
import { gsap } from "gsap";
import { useProgress } from "@react-three/drei";
import { useTranslation } from "react-i18next";
import { useMediaQueries } from "../../../hooks/useMediaQuery";

const SurrealPreloader = React.memo((props) => {
  const { size1200 } = useMediaQueries()
  const { loaded } = useProgress()
  const preloaderContainer = useRef(null)
  const preloaderButton = useRef(null)
  const { t } = useTranslation('global')
  useEffect(() => {
    if (loaded >= 15) {
      gsap.timeline().to(preloaderContainer.current, {
        opacity: 1,
      })
      if (props.openSurreal) {
        gsap.timeline().to(preloaderContainer.current, {
          opacity: 0,
          delay: size1200 ? 0 : 0.02,
        })
        gsap.timeline().to(preloaderContainer.current, {
          display: 'none',
          delay: 1.4,
        })
      }
    }
    
  }, [loaded, props.openSurreal, size1200])

  return (
    <div ref={preloaderContainer} className="surrealPreloader__container">
        <div className="surrealPreloader__item">
          <button ref={preloaderButton} className={`surrealPreloader__item_button ${props.openSurreal && '_dispelButton'}`}
            onClick={() => props.setSurreal(true)}>
            <span>{t('Preloader.title')}</span>
          </button>
        </div>
    </div>
  )
})

export default SurrealPreloader