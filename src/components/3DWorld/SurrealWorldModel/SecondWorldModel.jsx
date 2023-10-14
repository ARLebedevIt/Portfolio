import React, { useEffect, useRef, useState } from "react";
import {
  MeshDistortMaterial,
  useGLTF,
  useMatcapTexture,
  useTexture,
} from "@react-three/drei";
import { descProjects } from "../../../data/projectsData";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import easterEggImg from "../../../assets/image/easterEggImg.png";
import { useTranslation } from "react-i18next";
import { useMediaQueries } from "../../../hooks/useMediaQuery";

const SurrealWorldModel = React.memo((props) => {
  const { nodes } = useGLTF("models/SurrealWorld.glb");
  const { size650 } = useMediaQueries()
  const projects = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [indexItems, setIndexItems] = useState(0);
  const { t, i18n } = useTranslation();
  const [easterEggVisible, setEasterEggVisible] = useState(false);
  const [isInRangeP, setInRangeP] = useState(null);
  const [itemsTexture] = useMatcapTexture("3B3C3F_DAD9D5_929290_ABACA8", 256);
  const descProjectsSize = descProjects.length;
  let projectsImg = descProjects[indexItems].image;
  let [projectTexture] = useTexture([projectsImg]);
  useEffect(() => {
    descProjects.forEach((item) => useTexture.preload(item.image));
    useTexture.preload(easterEggImg);
  }, []);

  const validateIndex = (currIdx) => {
    if (currIdx === descProjectsSize) {
      return 0;
    } else if (currIdx === -1) {
      return descProjectsSize - 1;
    }
    return currIdx;
  };
  const [easterEggTexture] = useTexture([easterEggImg]);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  const distance = size650 ? 15 : 11;
  const vec = new Vector3();

  useFrame((state) => {
    const rangeProjects =
      state.camera.position.distanceTo(
        projects.current.getWorldPosition(vec)
      ) <= distance;
    if (rangeProjects !== isInRangeP) setInRangeP(rangeProjects);
  });
  return (
    <group {...props} scale={[0.1, 0.1, 0.1]} dispose={null}>
      {i18n.language === "ru" ? (
        <group>
          <mesh
            visible={indexItems == 0}
            geometry={nodes.CNIText.geometry}
            material={nodes.CNIText.material}
            position={[-72.04, 57.22, 23.16]}
            rotation={[0, 0.63, -0.01]}
            scale={[-1.6, -1.6, -2.7]}
          >
            <MeshDistortMaterial
              distort={0.1}
              speed={5}
              color={"#fefefe"}
              metalness={6.5}
            />
          </mesh>
          <mesh
            visible={indexItems == 1}
            geometry={nodes.PortfolioText.geometry}
            material={nodes.PortfolioText.material}
            position={[-71.88, 57.22, 23.03]}
            rotation={[0, 0.63, -0.01]}
            scale={[-2, -2, -2.2]}
          >
            <MeshDistortMaterial
              distort={0.1}
              speed={5}
              color={"#fefefe"}
              metalness={6.5}
            />
          </mesh>
          <mesh
            visible={indexItems == 2}
            geometry={nodes.WebArticlesText.geometry}
            material={nodes.WebArticlesText.material}
            position={[-71.88, 57.22, 23.03]}
            rotation={[0, 0.63, -0.01]}
            scale={[-1.8, -1.8, -1.7]}
          >
            <MeshDistortMaterial
              distort={0.1}
              speed={5}
              color={"#fefefe"}
              metalness={6.5}
            />
          </mesh>
          <mesh
            visible={indexItems == 3}
            geometry={nodes.ArtLinkText.geometry}
            material={nodes.ArtLinkText.material}
            position={[-71.69, 57.19, 22.99]}
            rotation={[0.01, 0.63, -0.01]}
            scale={-2.04}
          >
            <MeshDistortMaterial
              distort={0.1}
              speed={5}
              color={"#fefefe"}
              metalness={6.5}
            />
          </mesh>
          <mesh
            visible={indexItems == 4}
            geometry={nodes.VueDesc.geometry}
            material={nodes.VueDesc.material}
            position={[-71.85, 57.21, 23.07]}
            rotation={[0, 0.63, -0.01]}
            scale={[-3.71, -3.71, -4.02]}
          >
            <MeshDistortMaterial
              distort={0.1}
              speed={5}
              color={"#fefefe"}
              metalness={6.5}
            />
          </mesh>
          <mesh
            visible={indexItems == 5}
            geometry={nodes.LatteDesc.geometry}
            material={nodes.LatteDesc.material}
            position={[-71.63, 57.21, 23.01]}
            rotation={[0, 0.63, -0.01]}
            scale={[-2, -2, -2.1]}
          >
            <MeshDistortMaterial
              distort={0.1}
              speed={5}
              color={"#fefefe"}
              metalness={6.5}
            />
          </mesh>
          <mesh
            visible={indexItems == 6}
            geometry={nodes.DFDesc.geometry}
            material={nodes.DFDesc.material}
            position={[-71.06, 57.2, 22.58]}
            rotation={[0, 0.63, -0.01]}
            scale={[-2.3, -2.3, -2.9]}
          >
            <MeshDistortMaterial
              distort={0.1}
              speed={5}
              color={"#fefefe"}
              metalness={6.5}
            />
          </mesh>
          <mesh
            geometry={nodes.AboutMeText.geometry}
            material={nodes.AboutMeText.material}
            position={[-163.44, 33.72, -56.83]}
            rotation={[0.34, 1.37, -0.36]}
            scale={[-2.25, -1.75, -3.03]}
          >
            <MeshDistortMaterial
              distort={0.1}
              speed={5}
              emissive={"white"}
              emissiveIntensity={1.5}
            />
          </mesh>
        </group>
      ) : (
        <group>
          <mesh
            visible={indexItems == 0}
            geometry={nodes.CNITextEN.geometry}
            material={nodes.CNITextEN.material}
            position={[-72.15, 57.2, 22.36]}
            rotation={[0.01, 0.63, -0.01]}
            scale={[-1.6, 1.7, -3]}
          >
            <MeshDistortMaterial
              distort={0.1}
              speed={5}
              color={"#fefefe"}
              metalness={6.5}
            />
          </mesh>
          <mesh
            visible={indexItems == 1}
            geometry={nodes.PortfolioTextEN.geometry}
            material={nodes.PortfolioTextEN.material}
            position={[-71.26, 57.19, 23.57]}
            rotation={[0.01, 0.63, -0.01]}
            scale={[-2, -2, -2.7]}
          >
            <MeshDistortMaterial
              distort={0.1}
              speed={5}
              color={"#fefefe"}
              metalness={6.5}
            />
          </mesh>
          <mesh
            visible={indexItems == 2}
            geometry={nodes.WebArticlesTextEN.geometry}
            material={nodes.WebArticlesTextEN.material}
            position={[-71.88, 57.22, 23.03]}
            rotation={[0, 0.63, -0.01]}
            scale={[-1.8, -1.8, -1.7]}
          >
            <MeshDistortMaterial
              distort={0.1}
              speed={5}
              color={"#fefefe"}
              metalness={6.5}
            />
          </mesh>
          <mesh
            visible={indexItems == 3}
            geometry={nodes.ArtLinkTextEN.geometry}
            material={nodes.ArtLinkTextEN.material}
            position={[-71.03, 57.19, 22.5]}
            rotation={[0.01, 0.63, -0.01]}
            scale={[-2.14, -2.14, -2.43]}
          >
            <MeshDistortMaterial
              distort={0.1}
              speed={5}
              color={"#fefefe"}
              metalness={6.5}
            />
          </mesh>
          <mesh
            visible={indexItems == 4}
            geometry={nodes.VueDescEN.geometry}
            material={nodes.VueDescEN.material}
            position={[-72.15, 57.2, 22.36]}
            rotation={[0.01, 0.63, -0.01]}
            scale={[-2.15, -2.15, -2.53]}
          >
            <MeshDistortMaterial
              distort={0.1}
              speed={5}
              color={"#fefefe"}
              metalness={6.5}
            />
          </mesh>
          <mesh
            visible={indexItems == 5}
            geometry={nodes.LatteDescEN.geometry}
            material={nodes.LatteDescEN.material}
            position={[-70.56, 57.18, 23.05]}
            rotation={[0.01, 0.63, -0.01]}
            scale={[-2.11, -2.11, -2.06]}
          >
            <MeshDistortMaterial
              distort={0.1}
              speed={5}
              color={"#fefefe"}
              metalness={6.5}
            />
          </mesh>
          <mesh
            visible={indexItems == 6}
            geometry={nodes.DFDescEN.geometry}
            material={nodes.DFDescEN.material}
            position={[-71.18, 57.19, 22.22]}
            rotation={[0.01, 0.63, -0.01]}
            scale={[-2.11, -2.11, -2.51]}
          >
            <MeshDistortMaterial
              distort={0.1}
              speed={5}
              color={"#fefefe"}
              metalness={6.5}
            />
          </mesh>
          <mesh
            geometry={nodes.AboutMeTextEN.geometry}
            material={nodes.AboutMeTextEN.material}
            position={[-163.45, 33.65, -56.88]}
            rotation={[0.34, 1.37, -0.36]}
            scale={[-2.83, -2.85, -2.81]}
          >
            <MeshDistortMaterial
              distort={0.1}
              speed={5}
              emissive={"white"}
              emissiveIntensity={1.5}
            />
          </mesh>
        </group>
      )}
      <mesh
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        onClick={() => window.open(descProjects[2].link)}
        geometry={nodes.ALText.geometry}
        material={nodes.ALText.material}
        position={[-19.41, 33.92, -133.86]}
        rotation={[-0.01, 0.07, -0.02]}
        scale={-8.57}
      >
        <MeshDistortMaterial
          distort={0.3}
          speed={5}
          color={"white"}
          metalness={7}
        />
      </mesh>
      <mesh
        visible={easterEggVisible}
        geometry={nodes.PCScreen.geometry}
        position={[-70.37, 31.2, -143.86]}
        rotation={[-1.5, 0.14, -2.03]}
        scale={3.9}
      >
        <meshMatcapMaterial map={easterEggTexture} /> :
      </mesh>
      <mesh
        geometry={nodes.WiresInHead.geometry}
        material={nodes.WiresInHead.material}
        position={[-100.64, 28.22, -54.04]}
        rotation={[0.81, -0.17, 1.54]}
        scale={[-0.55, -0.62, -0.64]}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        onClick={() => window.open(descProjects[2].link)}
        geometry={nodes.ALicon.geometry}
        material={nodes.ALicon.material}
        position={[-23.13, 32.65, -125.26]}
        rotation={[-1.63, 0.26, -1.41]}
        scale={[0.9, 0.9, 1.69]}
      >
        <MeshDistortMaterial
          distort={0.3}
          speed={5}
          color={"white"}
          metalness={7}
        />
      </mesh>
      <mesh
        ref={projects}
        geometry={nodes.MonitorImage.geometry}
        material={nodes.MonitorImage.material}
        position={[-71.41, 67.75, 66.02]}
        rotation={[1.67, -0.07, 2.51]}
        scale={[18.89, 183.63, 12.83]}
      >
        <meshBasicMaterial
          transparent
          opacity={isInRangeP ? 1 : 0}
          map={projectTexture}
        />
      </mesh>
      <mesh
        onClick={() => setIndexItems((prev) => validateIndex(prev + 1))}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        geometry={nodes.MonitorIconsLeft.geometry}
        material={nodes.MonitorIconsLeft.material}
        position={[-114.64, 29.88, 82.1]}
        rotation={[-1.48, 0.07, -0.93]}
        scale={4.5}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        onClick={() => setIndexItems((prev) => validateIndex(prev - 1))}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        geometry={nodes.MonitorIconsRight.geometry}
        material={nodes.MonitorIconsRight.material}
        position={[-114.64, 29.88, 82.1]}
        rotation={[-1.48, 0.07, -0.93]}
        scale={4.5}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Map.geometry}
        material={nodes.Map.material}
        position={[-198.68, 33.13, -45.88]}
        rotation={[-1.61, 0.08, 1.38]}
        scale={[104.67, 129.64, 105.78]}
      >
        <meshMatcapMaterial color={"grey"} matcap={itemsTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Pen5.geometry}
        material={nodes.Pen5.material}
        position={[-94.97, 34.24, -54.92]}
        rotation={[0.96, 1.07, -2.48]}
        scale={[12.32, 16.42, 12.28]}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Tiger.geometry}
        material={nodes.Tiger.material}
        position={[-141.92, 62.89, -44.81]}
        rotation={[-1.58, 0.27, -1.48]}
        scale={0.09}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Pen1.geometry}
        material={nodes.Pen1.material}
        position={[-90.88, 42.94, -47.99]}
        rotation={[2.97, -0.3, 2.55]}
        scale={1.06}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Pen4.geometry}
        material={nodes.Pen4.material}
        position={[-98.93, 41.2, -52.54]}
        rotation={[2.87, -0.34, 2.9]}
        scale={1.16}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Pen2.geometry}
        material={nodes.Pen2.material}
        position={[-101.65, 40.69, -51.02]}
        rotation={[2.59, -0.72, 2.58]}
        scale={1.51}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Pen3.geometry}
        material={nodes.Pen3.material}
        position={[-98.85, 37.5, -53.19]}
        rotation={[2.76, -0.86, 2.93]}
        scale={1.21}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        geometry={nodes.Birthmark.geometry}
        material={nodes.Birthmark.material}
        position={[-126.5, 32.06, -63.12]}
        rotation={[-0.03, -0.06, -0.01]}
        scale={1.01}
      >
        <meshStandardMaterial
          color={"white"}
          emissive={"white"}
          emissiveIntensity={0.7}
        />
      </mesh>
      <mesh
        geometry={nodes.BoltR.geometry}
        material={nodes.BoltR.material}
        position={[-62.21, 29.48, -77.98]}
        rotation={[-0.03, -0.06, -0.01]}
        scale={1.01}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        geometry={nodes.Chip.geometry}
        material={nodes.Chip.material}
        position={[229.9, 71.62, -210.78]}
        rotation={[-0.03, -0.06, -0.01]}
        scale={1.01}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        geometry={nodes.Ear.geometry}
        material={nodes.Ear.material}
        position={[229.62, 71.65, -211.34]}
        rotation={[-0.03, -0.06, -0.01]}
        scale={1.01}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        geometry={nodes.Ear2.geometry}
        material={nodes.Ear2.material}
        position={[229.62, 71.65, -211.34]}
        rotation={[-0.03, -0.06, -0.01]}
        scale={1.01}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        geometry={nodes.Ear3.geometry}
        material={nodes.Ear3.material}
        position={[229.62, 71.65, -211.34]}
        rotation={[-0.03, -0.06, -0.01]}
        scale={1.01}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        geometry={nodes.Ear4.geometry}
        material={nodes.Ear4.material}
        position={[229.62, 71.65, -211.34]}
        rotation={[-0.03, -0.06, -0.01]}
        scale={1.01}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        geometry={nodes.EyeBlack.geometry}
        material={nodes.EyeBlack.material}
        position={[-138.74, 43.28, -55.64]}
        rotation={[-0.03, -0.06, -0.01]}
        scale={1.01}
      >
        <meshStandardMaterial color={"black"} />
      </mesh>
      <mesh
        geometry={nodes.EyeLaser.geometry}
        material={nodes.EyeLaser.material}
        position={[-137.89, 43.05, -54.07]}
        rotation={[-0.03, -0.06, -0.01]}
        scale={1.01}
      >
        <meshStandardMaterial
          color={"white"}
          emissive={"white"}
          emissiveIntensity={3}
        />
      </mesh>
      <mesh
        geometry={nodes.EyesBehind.geometry}
        material={nodes.EyesBehind.material}
        position={[-137.89, 43.05, -54.07]}
        rotation={[-0.03, -0.06, -0.01]}
        scale={1.01}
      >
        <meshStandardMaterial color={"black"} />
      </mesh>
      <mesh
        geometry={nodes.FaceLButtons.geometry}
        material={nodes.FaceLButtons.material}
        position={[-140, 38.01, -65.89]}
        rotation={[-0.03, -0.06, -0.01]}
        scale={1.01}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        geometry={nodes.FaceLPlane.geometry}
        material={nodes.FaceLPlane.material}
        position={[-140, 38.01, -65.89]}
        rotation={[-0.03, -0.06, -0.01]}
        scale={1.01}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        geometry={nodes.FaceLWires.geometry}
        material={nodes.FaceLWires.material}
        position={[-137.94, 40.14, -67.9]}
        rotation={[-0.03, -0.05, -0.02]}
        scale={1.01}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        geometry={nodes.Glasses.geometry}
        material={nodes.Glasses.material}
        position={[-140.69, 44.63, -56.98]}
        rotation={[-0.03, -0.06, -0.01]}
        scale={1.01}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        geometry={nodes.GlassesLens.geometry}
        material={nodes.GlassesLens.material}
        position={[-138.25, 44.3, -58.25]}
        rotation={[-0.03, -0.06, -0.01]}
        scale={1.01}
      >
        <meshStandardMaterial color={"white"} transparent opacity={0.2} />
      </mesh>
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.Head.geometry}
        material={nodes.Head.material}
        position={[-120.77, 35.93, -39.79]}
        rotation={[-0.03, -0.06, -0.01]}
        scale={1.01}
      >
        <meshStandardMaterial
          color={"white"}
          metalness={0.1}
          roughness={0.02}
        />
      </mesh>
      <mesh
        geometry={nodes.HeadBack.geometry}
        material={nodes.HeadBack.material}
        position={[228.32, 71.79, -213.2]}
        rotation={[-0.03, -0.06, -0.01]}
        scale={1.01}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        geometry={nodes.HeadBack2.geometry}
        material={nodes.HeadBack2.material}
        position={[228.78, 71.59, -212.69]}
        rotation={[-0.03, -0.06, -0.01]}
        scale={1.01}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        geometry={nodes.HeadBones.geometry}
        material={nodes.HeadBones.material}
        position={[-130.73, 37.83, -65.63]}
        rotation={[-0.03, -0.06, -0.01]}
        scale={1.01}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        geometry={nodes.HeadFrame.geometry}
        material={nodes.HeadFrame.material}
        position={[230.71, 71.6, -211.23]}
        rotation={[-0.03, -0.06, -0.01]}
        scale={1.01}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        geometry={nodes.HeadInside.geometry}
        material={nodes.HeadInside.material}
        position={[232.89, 70.36, -212.72]}
        rotation={[-0.03, -0.06, -0.01]}
        scale={1.01}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.HeadWiresBack.geometry}
        material={nodes.HeadWiresBack.material}
        position={[230.91, 72.4, -210.36]}
        rotation={[-0.03, -0.06, -0.01]}
        scale={1.01}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Wires.geometry}
        material={nodes.Wires.material}
        position={[-136.45, 45.79, -33.18]}
        rotation={[-0.03, -0.06, -0.01]}
        scale={1.01}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Wires2.geometry}
        material={nodes.Wires2.material}
        position={[-131.21, 58.72, -28.1]}
        rotation={[-0.03, -0.06, -0.01]}
        scale={1.01}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Wires2Head.geometry}
        material={nodes.Wires2Head.material}
        position={[229.85, 72.27, -212.16]}
        rotation={[-0.03, -0.06, -0.01]}
        scale={1.01}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Bush1.geometry}
        material={nodes.Bush1.material}
        position={[-148.97, 28.57, -4.73]}
        rotation={[-0.08, 0.58, -0.03]}
        scale={0.04}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Bush2.geometry}
        material={nodes.Bush2.material}
        position={[-158.5, 28.07, -105.6]}
        rotation={[-0.08, 0.58, -0.03]}
        scale={0.04}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Bush3.geometry}
        material={nodes.Bush3.material}
        position={[-65.09, 33, -80.23]}
        rotation={[-0.08, 0.58, -0.03]}
        scale={0.04}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Bush4.geometry}
        material={nodes.Bush4.material}
        position={[13.63, 27.45, -73.55]}
        rotation={[0.11, -0.98, 0.16]}
        scale={0.04}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Bush5.geometry}
        material={nodes.Bush5.material}
        position={[-62.91, 31.51, -18.42]}
        rotation={[-0.56, -1.18, -0.34]}
        scale={0.04}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Bush6.geometry}
        material={nodes.Bush6.material}
        position={[7.23, 29.93, -133.08]}
        rotation={[0.11, -0.98, 0.16]}
        scale={0.04}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        geometry={nodes.Bush7.geometry}
        material={nodes.Bush7.material}
        position={[-50.69, 29.75, -139.67]}
        rotation={[0.02, -0.43, 0.1]}
        scale={0.06}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        geometry={nodes.Bush8.geometry}
        material={nodes.Bush8.material}
        position={[-117.75, 27.04, 15.69]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.41}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        geometry={nodes.MonitorDesc.geometry}
        material={nodes.MonitorDesc.material}
        position={[-91.34, 56.19, 37.03]}
        rotation={[-0.01, 0.64, 0]}
        scale={-61.16}
      >
        <meshMatcapMaterial color={"grey"} matcap={itemsTexture} />
      </mesh>
      <mesh
        geometry={nodes.MonitorDescFrame.geometry}
        material={nodes.MonitorDescFrame.material}
        position={[-62.12, 57.08, 35.39]}
        rotation={[1.56, 0, 2.08]}
        scale={-61.53}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        geometry={nodes.MonitorIcons.geometry}
        material={nodes.MonitorIcons.material}
        position={[-114.64, 29.88, 82.1]}
        rotation={[-1.48, 0.07, -0.93]}
        scale={4.5}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        geometry={nodes.MonitorScreen.geometry}
        material={nodes.MonitorScreen.material}
        position={[-114.64, 29.88, 82.1]}
        rotation={[-1.48, 0.07, -0.93]}
        scale={4.5}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Ago.geometry}
        material={nodes.Ago.material}
        position={[34.75, 131.54, -30.22]}
        rotation={[0.85, -0.82, 2.09]}
        scale={0.93}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Apollon.geometry}
        material={nodes.Apollon.material}
        position={[-150.58, 45.59, -72.66]}
        rotation={[0, 0.1, -Math.PI]}
        scale={0.68}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Armchair.geometry}
        material={nodes.Armchair.material}
        position={[-170.31, 34.99, -77.43]}
        rotation={[0.49, 0.71, 3.03]}
        scale={6.07}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        geometry={nodes.Ballerina.geometry}
        material={nodes.Ballerina.material}
        position={[-216.68, 116.76, -97.32]}
        rotation={[-Math.PI / 2, 0, -3.14]}
        scale={32.52}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Bird.geometry}
        material={nodes.Bird.material}
        position={[-50.21, 28.02, -45.99]}
        rotation={[3.13, -0.83, -2.88]}
        scale={0.06}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Bones.geometry}
        material={nodes.Bones.material}
        position={[-24.38, 41.39, -105.52]}
        rotation={[-1.57, -0.11, 0.73]}
        scale={-0.12}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Bridge.geometry}
        material={nodes.Bridge.material}
        position={[-31.67, 45.97, -8.6]}
        rotation={[-1.44, -0.19, 0.45]}
        scale={[1.5, 3.23, 1.36]}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        geometry={nodes.Butterfly.geometry}
        material={nodes.Butterfly.material}
        position={[-175.49, 118.28, -20.16]}
        rotation={[-1.52, 0.08, 0.83]}
        scale={1.51}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Cactus.geometry}
        material={nodes.Cactus.material}
        position={[-162.29, 24.8, -94.37]}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        geometry={nodes.Chain.geometry}
        material={nodes.Chain.material}
        position={[-220.5, 92.17, -89.87]}
        rotation={[0.86, 0.82, -0.64]}
        scale={0.67}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        geometry={nodes.Clock.geometry}
        material={nodes.Clock.material}
        position={[-154.18, 29.28, -197.99]}
        rotation={[0.48, 0.61, 2.57]}
        scale={[-4.12, -2.82, -5.31]}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.ColumnL.geometry}
        material={nodes.ColumnL.material}
        position={[-84, 43, -83]}
        scale={[2.23, 15.32, 2.23]}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.ColumnR.geometry}
        material={nodes.ColumnR.material}
        position={[-150.73, 38.97, -71.43]}
        scale={[2.23, 17.49, 2.23]}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Columns.geometry}
        material={nodes.Columns.material}
        position={[-94.04, 26.66, -158.98]}
        rotation={[Math.PI, -1.14, Math.PI]}
        scale={[1.83, 1.62, 1.62]}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Crystal.geometry}
        position={[-180.21, 26.7, -106.09]}
        rotation={[-2.06, -0.09, -1.08]}
        scale={0.27}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        onPointerEnter={() => setHovered(true)}
        onClick={() => window.open(t("Contacts.CV"))}
        onPointerLeave={() => setHovered(false)}
        geometry={nodes.CVicon.geometry}
        material={nodes.CVicon.material}
        position={[-22.15, 34.65, -77.7]}
        rotation={[0, -0.02, 0]}
      >
        <MeshDistortMaterial
          distort={0.3}
          speed={5}
          color={"white"}
          metalness={7}
        />
      </mesh>
      <mesh
        onPointerEnter={() => setHovered(true)}
        onClick={() => window.open(t("Contacts.CV"))}
        onPointerLeave={() => setHovered(false)}
        geometry={nodes.CVText.geometry}
        material={nodes.CVText.material}
        position={[-22.44, 33.78, -87.24]}
        rotation={[0, 0.07, -0.03]}
        scale={[-6.9, -6.9, -7.48]}
      >
        <MeshDistortMaterial
          distort={0.3}
          speed={5}
          color={"white"}
          metalness={7}
        />
      </mesh>
      <mesh
        receiveShadow
        geometry={nodes.Desert.geometry}
        material={nodes.Desert.material}
        position={[-108.23, 28.87, -68.84]}
        rotation={[1.56, 0.01, 0.51]}
        scale={[-128.49, -126.71, -125.99]}
      ></mesh>
      <mesh
        geometry={nodes.DNA.geometry}
        material={nodes.DNA.material}
        position={[34.06, 64.61, -113.36]}
        rotation={[-1.54, -0.02, -0.42]}
        scale={[0.21, 4.1, 0.29]}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        onPointerEnter={() => setHovered(true)}
        onClick={() => {
          setEasterEggVisible(true);
          props.toSection(4);
        }}
        castShadow
        geometry={nodes.EasterEgg.geometry}
        material={nodes.EasterEgg.material}
        position={[-63.72, 31.75, 76.06]}
        rotation={[0.83, 1.42, -0.71]}
        scale={0.01}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Elephant.geometry}
        material={nodes.Elephant.material}
        position={[-25.67, 28.8, -27.21]}
        rotation={[-1.68, -0.04, 0.98]}
        scale={1.59}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        onPointerEnter={() => setHovered(true)}
        onClick={() => window.open("https://github.com/ARLebedevIt")}
        onPointerLeave={() => setHovered(false)}
        castShadow
        geometry={nodes.GitHubicon.geometry}
        material={nodes.GitHubicon.material}
        position={[-23.12, 34.15, -92.74]}
      >
        <MeshDistortMaterial
          distort={0.3}
          speed={5}
          color={"white"}
          metalness={7}
        />
      </mesh>
      <mesh
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        onClick={() => window.open(descProjects[indexItems].github)}
        geometry={nodes.GitHubProj.geometry}
        material={nodes.GitHubProj.material}
        position={[-74.47, 57.69, 32.28]}
        rotation={[0.02, 0.59, -0.02]}
        scale={0.82}
      >
        <MeshDistortMaterial
          distort={0.3}
          speed={5}
          color={"white"}
          metalness={6}
        />
      </mesh>
      <mesh
        onPointerEnter={() => setHovered(true)}
        onClick={() => window.open("https://github.com/ARLebedevIt")}
        onPointerLeave={() => setHovered(false)}
        castShadow
        geometry={nodes.GitHubText.geometry}
        material={nodes.GitHubText.material}
        position={[-23.52, 33.78, -102.87]}
        rotation={[0, 0.07, -0.03]}
        scale={[-6.9, -6.9, -7.48]}
      >
        <MeshDistortMaterial
          distort={0.3}
          speed={5}
          color={"white"}
          metalness={7}
        />
      </mesh>
      <mesh
        geometry={nodes.Handkerchief.geometry}
        material={nodes.Handkerchief.material}
        position={[-132.68, 33.62, 28.73]}
        rotation={[-Math.PI, 0.3, 0]}
        scale={0.01}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        geometry={nodes.Hat.geometry}
        material={nodes.Hat.material}
        position={[-171.89, 33.66, -79.78]}
        rotation={[-0.77, 0.21, 1.05]}
        scale={2.96}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Helmet.geometry}
        material={nodes.Helmet.material}
        position={[-152.38, 26.75, 3.37]}
        rotation={[-1.01, -0.08, 1.88]}
        scale={4.87}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.House.geometry}
        material={nodes.House.material}
        position={[-202.77, 36.58, -2.96]}
        rotation={[-1.3, -0.05, 2.23]}
        scale={3.83}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Key.geometry}
        material={nodes.Key.material}
        position={[-143.07, 96.06, -14.5]}
        rotation={[-0.47, -0.31, 2.21]}
        scale={41.08}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        geometry={nodes.KeyboardMouse.geometry}
        material={nodes.KeyboardMouse.material}
        position={[-76.4, 30.49, -148.78]}
        rotation={[-1.64, 0.21, -2.1]}
        scale={0.51}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Kopie.geometry}
        material={nodes.Kopie.material}
        position={[11.71, 52.72, -115.06]}
        rotation={[-1.5, 0.17, -1.38]}
        scale={[0.3, 0.37, 0.12]}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Lamp.geometry}
        material={nodes.Lamp.material}
        position={[-54.44, 32.99, -73.01]}
        rotation={[0.98, -0.05, -0.21]}
        scale={7.56}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        onPointerEnter={() => setHovered(true)}
        onClick={() => window.open(descProjects[indexItems].link)}
        onPointerLeave={() => setHovered(false)}
        geometry={nodes.Link.geometry}
        material={nodes.Link.material}
        position={[-99.82, 58.02, 51.78]}
        rotation={[3.08, 1.06, 0.07]}
        scale={0.07}
      >
        <MeshDistortMaterial
          distort={0.4}
          speed={5}
          color={"white"}
          metalness={6}
        />
      </mesh>
      <mesh
        onPointerEnter={() => setHovered(true)}
        onClick={() => (window.location = "mailto:arlebedevit@gmail.com")}
        onPointerLeave={() => setHovered(false)}
        geometry={nodes.Mailicon.geometry}
        material={nodes.Mailicon.material}
        position={[-23.83, 33.91, -109.09]}
        rotation={[0, 0.01, -0.03]}
      >
        <MeshDistortMaterial
          distort={0.3}
          speed={5}
          color={"white"}
          metalness={7}
        />
      </mesh>
      <mesh
        onPointerEnter={() => setHovered(true)}
        onClick={() => (window.location = "mailto:arlebedevit@gmail.com")}
        onPointerLeave={() => setHovered(false)}
        geometry={nodes.MailText.geometry}
        material={nodes.MailText.material}
        position={[-23.77, 33.76, -118.09]}
        rotation={[0, 0.07, -0.03]}
        scale={[-6.9, -6.9, -7.48]}
      >
        <MeshDistortMaterial
          distort={0.3}
          speed={5}
          color={"white"}
          metalness={7}
        />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Notes1.geometry}
        material={nodes.Notes1.material}
        position={[-81.66, 30.56, -94.75]}
        rotation={[3.09, -0.59, 2.97]}
        scale={0.61}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Notes2.geometry}
        material={nodes.Notes2.material}
        position={[-122.84, 30.53, -69.9]}
        rotation={[3.13, 0.4, 2.98]}
        scale={0.47}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.PC.geometry}
        material={nodes.PC.material}
        position={[-63.94, 33.09, -152.71]}
        rotation={[-1.64, 0.21, -2.1]}
        scale={3.9}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.PCMonitor.geometry}
        material={nodes.PCMonitor.material}
        position={[-70.37, 31.2, -143.86]}
        rotation={[-1.5, 0.14, -2.03]}
        scale={3.9}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        geometry={nodes.PianoKeys.geometry}
        material={nodes.PianoKeys.material}
        position={[-64.63, 29.52, -110.82]}
        rotation={[-1.23, -0.05, 3.1]}
        scale={[18.92, 23.01, 19.56]}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        geometry={nodes.PianoKeys2.geometry}
        material={nodes.PianoKeys2.material}
        position={[-68.81, 29.15, -123.11]}
        rotation={[-2.42, 0.08, 3.07]}
        scale={[20.02, 27.29, 23.61]}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        geometry={nodes.PianoKeys3.geometry}
        material={nodes.PianoKeys3.material}
        position={[-62, 29.61, -123.85]}
        rotation={[-2.49, 0.22, 2.99]}
        scale={[22.26, 30.34, 26.24]}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Rapier.geometry}
        material={nodes.Rapier.material}
        position={[-216.2, 32.78, -96.09]}
        rotation={[0, -1.41, 0]}
        scale={0.63}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        geometry={nodes.Ruins.geometry}
        material={nodes.Ruins.material}
        position={[-169.53, 26.05, -200.21]}
        rotation={[-1.54, -0.01, -0.52]}
        scale={6.18}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        geometry={nodes.SkillsText.geometry}
        material={nodes.SkillsText.material}
        position={[-87.08, 33.41, -154.29]}
        rotation={[-0.01, 1.05, 0]}
        scale={-6.42}
      >
        <MeshDistortMaterial
          distort={0.1}
          speed={5}
          color={"white"}
          metalness={7}
        />
      </mesh>
      <mesh
        geometry={nodes.Skull.geometry}
        material={nodes.Skull.material}
        position={[-51.44, 26.73, -47.72]}
        rotation={[-1.43, 0.57, 0.81]}
        scale={1.87}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        geometry={nodes.StairsFloor.geometry}
        material={nodes.StairsFloor.material}
        position={[15.81, 82.94, -87.02]}
        rotation={[0.15, -0.03, 0.1]}
        scale={11.49}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        geometry={nodes.StairsMain.geometry}
        material={nodes.StairsMain.material}
        position={[-118.11, 101.87, -84.91]}
        rotation={[-Math.PI / 2, 0, 0.98]}
        scale={7.57}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        geometry={nodes.Sunflower.geometry}
        material={nodes.Sunflower.material}
        position={[-264.06, 89.64, -36.31]}
        rotation={[-2.92, 0.59, -0.84]}
        scale={[0.62, 0.68, 0.62]}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Tentacles.geometry}
        material={nodes.Tentacles.material}
        position={[-166.22, 8.16, 71.69]}
        rotation={[-2.81, 0.13, 1.53]}
        scale={3.03}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Thinker.geometry}
        material={nodes.Thinker.material}
        position={[-83.85, 59.3, -83.64]}
        rotation={[-1.57, 0.01, -2.31]}
        scale={6.78}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Tower.geometry}
        material={nodes.Tower.material}
        position={[-200.29, 52.77, -1.07]}
        rotation={[0.27, -0.13, 0.05]}
        scale={[0.002, 0.003, 0.0025]}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Wire.geometry}
        material={nodes.Wire.material}
        position={[-190.57, 40.08, -82.25]}
        rotation={[-0.24, 0.25, 0.47]}
        scale={[9.65, 0.53, 0.28]}
      >
        <meshMatcapMaterial matcap={itemsTexture} />
      </mesh>
    </group>
  );
});

useGLTF.preload("models/SurrealWorld.glb");

export default SurrealWorldModel;
