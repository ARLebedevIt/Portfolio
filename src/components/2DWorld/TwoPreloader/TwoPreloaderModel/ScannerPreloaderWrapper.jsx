import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Scanner } from "./ScannerPreloader";
import './ScannerPreloader.scss'
import { EffectComposer, Glitch } from "@react-three/postprocessing";
import { useMediaQueries } from "../../../../hooks/useMediaQuery";

const ScannerPreloaderWrapper = React.memo((props) => {
  const { size1600 } = useMediaQueries()
  return (
    <div className='wrapperScan'>
      <Canvas>
        <Suspense fallback={null}>
          <directionalLight intensity={.6} position={[0, 5, 9]} />
          <PerspectiveCamera makeDefault rotation={[-0.2, 0, 0.]} position={[-0.11, 4.6, 30.63]} />
          <mesh>
            <Scanner />
          </mesh>
        </Suspense>
        {!size1600 && <EffectComposer>
          <Glitch delay={[1.5, 1.6]}
            duration={[0.6, 1.0]}
            strength={[0.3, 1]}
            ratio={1.25} />
        </EffectComposer>} 
      </Canvas>
    </div>
  )
})

export default ScannerPreloaderWrapper