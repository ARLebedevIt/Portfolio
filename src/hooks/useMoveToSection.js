import { useCallback, useState } from "react";
import annotations from '../components/3DWorld/ThreeData/anotations.json'
import { useMediaQueries } from "./useMediaQuery";

export const useMoveToSection = () => {
  const { size650 } = useMediaQueries()
  const [lerping, setLerping] = useState(false)
  const [to, setTo] = useState(null)
  const [target, setTarget] = useState(null)
  const [selected, setSelected] = useState(-1)
  const toSection = useCallback((idx) => {
    setTo(size650 ?
      idx === 0 ? { x: -12.42, y: 10.4, z: -5.96 } : idx === 2 ? { x: -6.3, y: 10.9, z: -4.23 } : idx === 3 ? { x: 5.1, y: 9.5, z: -12.99 }
        : annotations[idx].camPos : annotations[idx].camPos)
    setTarget(annotations[idx].lookAt)
    setSelected(idx)
    setLerping(true)
  }, [size650])
  return {
    toSection, setLerping, to, target, selected, lerping
  }
}