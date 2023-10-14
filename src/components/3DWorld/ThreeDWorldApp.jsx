import { BakeShadows, Loader, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import SurrealWorldWrapper from "./SurrealWorldWrapper/SurrealWorldWrapper";
import SurrealButtons from "./SurrealNavigation/SurrealButtons";
import "./SurrealApp.scss";
import SurrealPreloader from "./SurrealPreloader/SurrealPreloader";
import { useMoveToSection } from "../../hooks/useMoveToSection";

const ThreeDWorld = React.memo(() => {
  const [openSurreal, setSurreal] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);
  const { toSection, setLerping, to, target, selected, lerping } =
    useMoveToSection();
  return (
    <div className="surrealWorld__wrapper">
      <SurrealButtons
        setInfoVisible={setInfoVisible}
        infoVisible={infoVisible}
        openSurreal={openSurreal}
        toSection={toSection}
      />
      <SurrealPreloader
        setSurreal={setSurreal}
        openSurreal={openSurreal}
      />
      <Canvas
        onClick={() => infoVisible && setInfoVisible(false)}
        shadows
        onPointerDown={() => setLerping(false)}
        onWheel={() => setLerping(false)}
        id="canvasSurrealWorld"
      >
        <Suspense fallback={null}>
          <SurrealWorldWrapper
            toSection={toSection}
            to={to}
            openSurreal={openSurreal}
            target={target}
            lerping={lerping}
            selected={selected}
          />
          <BakeShadows />
        </Suspense>
        <Preload all />
      </Canvas>
      <Loader
        dataInterpolation={(p) => `${Math.floor(p)}%`}
        dataStyles={{ fontSize: "30px", fontFamily: "defFont" }}
        containerStyles={{ background: "transparent", zIndex: 15 }}
      />
    </div>
  );
});

export default ThreeDWorld;
