import { OrbitControls, Stars } from "@react-three/drei";
import React, { useRef } from "react";
import SurrealWorldModel from "../SurrealWorldModel/SecondWorldModel";
import { editable as e, SheetProvider, PerspectiveCamera } from '@theatre/r3f'
import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";
import { ButterflyModel } from "../SurrealWorldModel/Butterfly";
import { SurrealTraffic } from "../SurrealWorldModel/SurrealTraffic";
import { useFrame } from "@react-three/fiber";
import { useTheatreAnims } from "../../../hooks/useTheatreAnims";

// studio.extend(extension)
// studio.initialize()

function Animate({ cameraRef, controls, lerping, to, target }) {
  useFrame(({ camera }, delta) => {
    if (lerping) {
      cameraRef.current.position.lerp(to, delta * 2.5)
      controls.current.target.lerp(target, delta * 2.5)
    }
  })
}

const SurrealWorldWrapper = React.memo((props) => {
  const orbitRef = useRef(null)
  const cameraRef = useRef(null)
  const { demoSheet, butterfly, hiddenInit, traffic } = useTheatreAnims(props.selected, props.openSurreal)
  return (
    <>
      <SheetProvider sheet={demoSheet}>
        <PerspectiveCamera ref={cameraRef} theatreKey="Camera" makeDefault fov={75} />
        <OrbitControls ref={orbitRef} dampingFactor={0.02} />
        <Animate cameraRef={cameraRef} controls={orbitRef} lerping={props.lerping} to={props.to} target={props.target} />
   
        <e.mesh receiveShadow position={[7.4, -1.9, -1.4]} theatreKey="Model">
          <SurrealWorldModel toSection={props.toSection} />
        </e.mesh>
      </SheetProvider>

      <SheetProvider visible={hiddenInit} sheet={butterfly}>
        <e.mesh theatreKey="Butterfly">
          <ButterflyModel />
        </e.mesh>
      </SheetProvider>

      <SheetProvider sheet={traffic}>
        <e.mesh visible={hiddenInit} theatreKey="Traffic">
          <SurrealTraffic />
        </e.mesh>
      </SheetProvider>

      <directionalLight intensity={.3} castShadow position={[-90, 65, 120]} shadow-mapSize={[1024, 1024]}>
        <orthographicCamera attach="shadow-camera" args={[-450, 140, 250]} />
      </directionalLight>

      <spotLight castShadow shadow-mapSize-height={1024} shadow-mapSize-width={1024} radiusBottom={400} position={[-5, 8.9, -7.4]}
        distance={10} angle={2} intensity={5} />

      <Stars radius={300} count={30000} fade speed={1.5} depth={0} factor={10} />
    </>
  )
})

export default SurrealWorldWrapper