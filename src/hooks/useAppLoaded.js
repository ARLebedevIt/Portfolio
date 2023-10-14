import { useEffect } from 'react'
import { useState } from 'react'
import { gsap } from "gsap";
import { useMediaQueries } from './useMediaQuery';

export const useAppLoaded = (ref) => {
  const { size1025 } = useMediaQueries()
  const [apploaded, setAppLoaded] = useState(false)
  useEffect(() => {
    if (apploaded === 'ready') {
      gsap.timeline().from(ref.current, {
        duration: 2,
        opacity: 0,
      })
    }
  }, [apploaded])
  useEffect(() => {
    if (apploaded != 'ready') {
      document.body.style.overflow = "hidden"
    } else document.body.style.overflow = "auto"
  }, [apploaded])
  useEffect(() => {
    const preloaderInit = (n) => {
      setTimeout(() => {
        setAppLoaded(true);
      }, n);
    }
    const preloaderToTrue = () => {
      if (!size1025) {
        preloaderInit(5000)
      } else preloaderInit(6200)
    }
    document.readyState == "complete" ? preloaderToTrue() : window.addEventListener("load", preloaderToTrue())
  }, [document.readyState])
  return {
    apploaded, setAppLoaded
  }
}