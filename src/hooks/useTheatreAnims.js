import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import useSound from 'use-sound';
import initSurrealPC from '../components/3DWorld/TheatreJS/PC/initAnimPC.json'
import initSurrealMOB from '../components/3DWorld/TheatreJS/Mobile/initMob.json'
import butterflyPC from '../components/3DWorld/TheatreJS/PC/butterflyPC.json'
import butterflyMOB from '../components/3DWorld/TheatreJS/Mobile/ButterflyMob.json'
import trafficAnim from '../components/3DWorld/TheatreJS/TrafficAnim.json'
import { getProject } from "@theatre/core";
import scrollSound from '../assets/sound/scrollSound.mp3'
import { useMediaQueries } from './useMediaQuery';

export const useTheatreAnims = (selected, openSurreal) => {
  const { size650 } = useMediaQueries()
  const demoSheet = getProject('Demo Project', { state: size650 ? initSurrealMOB : initSurrealPC }).sheet('Demo Sheet')
  const butterfly = getProject('ButterflyAnim', { state: size650 ? butterflyMOB : butterflyPC }).sheet('Demo Sheet')
  const traffic = getProject('TrafficAnim', { state: trafficAnim }).sheet('Demo Sheet')
  const [playScrollSound] = useSound(scrollSound, { volume: 0.4 });
  const [hiddenInit, setHidden] = useState(false)

  useEffect(() => {
    if (openSurreal) {
      demoSheet.project.ready.then(() => demoSheet.sequence.play({ iterationCount: 1 }))
      let timeout = setTimeout(() => {
        setHidden(true)
        butterfly.project.ready.then(() => butterfly.sequence.play({ iterationCount: 1, range: [2, 4] }))
        traffic.project.ready.then(() => traffic.sequence.play({ iterationCount: Infinity, range: [2, 6.29] }))
      }, 9900)
      return () => clearTimeout(timeout)
    }
  }, [openSurreal])
  
  useEffect(() => {
    const animSkills = () => butterfly.sequence.play({ iterationCount: 1, range: [8, 11] })
    const animAbout = () => butterfly.sequence.play({ iterationCount: 1, range: [5, 7.8] })
    const animProject = () => butterfly.sequence.play({ iterationCount: 1, range: [11, 14] })
    const animContacts = () => butterfly.sequence.play({ iterationCount: 1, range: [14, 17] })
    if (selected === 1) {
      animSkills()
    } else if (selected === 0) {
      animAbout()
    } else if (selected === 2) {
      animProject()
    } else if (selected === 3) {
      animContacts()
    }
    playScrollSound()
  }, [selected])
  return {
    demoSheet, hiddenInit, butterfly, traffic
  }
}