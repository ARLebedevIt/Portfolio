import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations, useMatcapTexture } from '@react-three/drei'

export function Scanner(props) {
  const [blueTexture] = useMatcapTexture('515151_DCDCDC_B7B7B7_9B9B9B', 256)
  const [faceTexture] = useMatcapTexture('3B3C3F_DAD9D5_929290_ABACA8', 256)
  const group = useRef(null)
  const { nodes, animations, materials } = useGLTF('models/ScannerPreloader.glb')
  const { actions, names } = useAnimations(animations, group)
  useEffect(() => {
    actions[names[0]].play()
  }, [])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model" position={[0, -3.83, -0.33]} rotation={[-Math.PI / 2, 0, Math.PI / 2 * 2]}
          scale={0.06}>
          <group name="c80305373e16494482736b61b620e337fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="BottomSide_low" position={[-54.57, 46.3, 21]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="BottomSideRot_low">
                    <mesh name="BottomSideRot_low_Head_0" geometry={nodes.BottomSideRot_low_Head_0.geometry}>
                    <meshMatcapMaterial matcap={faceTexture} />
                    </mesh>
                  </group>
                  <mesh name="BottomSide_low_Head_0" geometry={nodes.BottomSide_low_Head_0.geometry}>
                    <meshMatcapMaterial matcap={faceTexture} />
                  </mesh>
                </group>
                <group name="BottomSideRight_low" position={[54.57, 46.3, 21]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="BottomSideRot_lowRight">
                    <mesh name="BottomSideRot_lowRight_Head_0" geometry={nodes.BottomSideRot_lowRight_Head_0.geometry}>
                    <meshMatcapMaterial matcap={faceTexture} />
                    </mesh>
                  </group>
                  <mesh name="BottomSideRight_low_Head_0" geometry={nodes.BottomSideRight_low_Head_0.geometry}>
                    <meshMatcapMaterial matcap={faceTexture} />
                  </mesh>
                </group>
                <group name="BottomSideRot001_low" position={[-54.45, 46.47, 20.98]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="BottomSideRot001_low_Head_0" geometry={nodes.BottomSideRot001_low_Head_0.geometry}>
                  <meshMatcapMaterial matcap={faceTexture} />
                  </mesh>
                </group>
                <group name="BottomSideRot001_lowRight" position={[54.45, 46.47, 20.98]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="BottomSideRot001_lowRight_Head_0" geometry={nodes.BottomSideRot001_lowRight_Head_0.geometry}>
                  <meshMatcapMaterial matcap={faceTexture} />
                  </mesh>
                </group>
                <group name="Brain_low" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="Brain_low_Head_0" geometry={nodes.Brain_low_Head_0.geometry}>
                    <meshMatcapMaterial matcap={blueTexture} color={'blue'} />
                  </mesh>
                </group>
                <group name="Eyes_low" position={[0, 122.9, -23.02]} rotation={[-Math.PI / 2, 0, 0]} scale={8.16}>
                  <group name="EyesRot001_low" scale={12.26}>
                    <mesh name="EyesRot001_low_Head_0" geometry={nodes.EyesRot001_low_Head_0.geometry}>
                      <meshMatcapMaterial matcap={faceTexture} />
                    </mesh>
                  </group>
                  <group name="EyesRot_low" scale={12.26}>
                    <mesh name="EyesRot_low_Head_0" geometry={nodes.EyesRot_low_Head_0.geometry}>
                      <meshMatcapMaterial matcap={faceTexture} />
                    </mesh>
                  </group>
                  <mesh name="Eyes_low_Head_0" geometry={nodes.Eyes_low_Head_0.geometry}>
                    <meshMatcapMaterial matcap={faceTexture} />
                  </mesh>
                </group>
                <group name="EyesRot001_low001" position={[-56.56, 122.73, -15.33]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="EyesRot001_low001_Head_0" geometry={nodes.EyesRot001_low001_Head_0.geometry}>
                    <meshMatcapMaterial matcap={faceTexture} />
                  </mesh>
                </group>
                <group name="EyesRot001_low002" position={[56.56, 122.73, -15.33]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="EyesRot001_low002_Head_0" geometry={nodes.EyesRot001_low002_Head_0.geometry}>
                    <meshMatcapMaterial matcap={faceTexture} /></mesh>
                </group>
                <group name="Plane002" position={[0, 8.58, 4.91]} rotation={[Math.PI, -0.79, 0]} scale={2.12}>
                  <mesh name="Plane002_Holograms_0" geometry={nodes.Plane002_Holograms_0.geometry} material={materials.Holograms}>
                  </mesh>
                </group>
                <group name="Plane003" position={[0, 8.58, 4.91]} rotation={[0, -0.79, 0]} scale={2.12}>
                  <mesh name="Plane003_Holograms_0" geometry={nodes.Plane003_Holograms_0.geometry} material={materials.Holograms}>
                  </mesh>
                </group>
                <group name="side_low" position={[-65.34, 111.46, 9.88]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="SideRot004_low">
                    <mesh name="SideRot004_low_Head_0" geometry={nodes.SideRot004_low_Head_0.geometry}>
                    <meshMatcapMaterial matcap={faceTexture} />
                    </mesh>
                  </group>
                  <mesh name="side_low_Head_0" geometry={nodes.side_low_Head_0.geometry} material={materials.Head} >
                    <meshMatcapMaterial matcap={faceTexture} />
                  </mesh>
                </group>
                <group name="sideRight_low" position={[65.34, 111.46, 9.88]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="SideRot004_lowRight">
                    <mesh name="SideRot004_lowRight_Head_0" geometry={nodes.SideRot004_lowRight_Head_0.geometry}>
                      <meshMatcapMaterial matcap={faceTexture} />
                    </mesh>
                  </group>
                  <mesh name="sideRight_low_Head_0" geometry={nodes.sideRight_low_Head_0.geometry}>
                    <meshMatcapMaterial matcap={faceTexture} />
                  </mesh>
                </group>
                <group name="SideRot001_low" position={[-65.34, 111.46, 9.88]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="SideRot001_low_Head_0" geometry={nodes.SideRot001_low_Head_0.geometry}>
                    <meshMatcapMaterial matcap={faceTexture} />
                  </mesh>
                </group>
                <group name="SideRot001_lowRight" position={[65.34, 111.46, 9.88]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="SideRot001_lowRight_Head_0" geometry={nodes.SideRot001_lowRight_Head_0.geometry}>
                    <meshMatcapMaterial matcap={faceTexture} />
                  </mesh>
                </group>
                <group name="SideRot002_low" position={[-65.34, 111.46, 9.88]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="SideRot002_low_Head_0" geometry={nodes.SideRot002_low_Head_0.geometry}>
                    <meshMatcapMaterial matcap={faceTexture} />
                  </mesh>
                </group>
                <group name="SideRot002_lowRight" position={[65.34, 111.46, 9.88]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="SideRot002_lowRight_Head_0" geometry={nodes.SideRot002_lowRight_Head_0.geometry}>
                    <meshMatcapMaterial matcap={faceTexture} />
                  </mesh>
                </group>
                <group name="SideRot003_low" position={[-65.34, 111.46, 9.88]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="SideRot003_low_Head_0" geometry={nodes.SideRot003_low_Head_0.geometry}>
                    <meshMatcapMaterial matcap={faceTexture} />
                  </mesh>
                </group>
                <group name="SideRot003_lowRight" position={[65.34, 111.46, 9.88]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="SideRot003_lowRight_Head_0" geometry={nodes.SideRot003_lowRight_Head_0.geometry}>
                    <meshMatcapMaterial matcap={faceTexture} />
                  </mesh>
                </group>
                <group name="Sphere002" position={[0, 98.27, 19.26]} rotation={[-Math.PI / 2, 0, 0]} scale={8.9}>
                  <mesh name="Sphere002_Holograms_0" geometry={nodes.Sphere002_Holograms_0.geometry} material={materials.Holograms} >
                  </mesh>
                </group>
                <group name="Top_low" position={[0, 65.48, 61.53]} rotation={[-1.57, 0, 0]} scale={100}>
                  <group name="TopInner_low" position={[0, 0.62, -0.65]}>
                    <mesh name="TopInner_low_Head_0" geometry={nodes.TopInner_low_Head_0.geometry}>
                      <meshMatcapMaterial matcap={faceTexture} />
                    </mesh>
                  </group>
                  <group name="TopRot001_low" position={[0, 0.62, -0.65]}>
                    <mesh name="TopRot001_low_Head_0" geometry={nodes.TopRot001_low_Head_0.geometry}>
                      <meshMatcapMaterial matcap={faceTexture} />
                    </mesh>
                  </group>
                  <group name="TopRot001_lowRigt" position={[0, 0.62, -0.65]}>
                    <mesh name="TopRot001_lowRigt_Head_0" geometry={nodes.TopRot001_lowRigt_Head_0.geometry}>
                      <meshMatcapMaterial matcap={faceTexture} />
                    </mesh>
                  </group>
                  <mesh name="Top_low_Head_0" geometry={nodes.Top_low_Head_0.geometry}>
                    <meshMatcapMaterial matcap={faceTexture} />
                  </mesh>
                </group>
                <group name="TopRot002_low" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="TopRot002_low_Head_0" geometry={nodes.TopRot002_low_Head_0.geometry}>
                  <meshMatcapMaterial matcap={faceTexture} />
                  </mesh>
                </group>
                <group name="TopRot002_lowRigt" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="TopRot002_lowRigt_Head_0" geometry={nodes.TopRot002_lowRigt_Head_0.geometry}>
                  <meshMatcapMaterial matcap={faceTexture} />
                  </mesh>
                </group>
                <group name="TopRot_low" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="TopRot_low_Head_0" geometry={nodes.TopRot_low_Head_0.geometry}>
                  <meshMatcapMaterial matcap={faceTexture} />
                  </mesh>
                </group>
                <group name="TopRot_lowRigt" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="TopRot_lowRigt_Head_0" geometry={nodes.TopRot_lowRigt_Head_0.geometry}>
                  <meshMatcapMaterial matcap={faceTexture} />
                  </mesh>
                </group>
                <group name="Back_low" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="Back_low_Head_0" geometry={nodes.Back_low_Head_0.geometry}>
                    <meshMatcapMaterial matcap={faceTexture} />
                  </mesh>
                </group>
                <group name="BrainWireCon_low" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="BrainWireCon_low_Head_0" geometry={nodes.BrainWireCon_low_Head_0.geometry}>
                    <meshMatcapMaterial matcap={blueTexture} />
                  </mesh>
                </group>
                <group name="Ear_low" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="Ear_low_Head_0" geometry={nodes.Ear_low_Head_0.geometry}>
                    <meshMatcapMaterial matcap={faceTexture} />
                  </mesh>
                </group>
                <group name="Inside_face_low" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="Inside_face_low_Head_0" geometry={nodes.Inside_face_low_Head_0.geometry}>
                  <meshMatcapMaterial matcap={faceTexture} />
                  </mesh>
                </group>
                <group name="inside_low" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="inside_low_Head_0" geometry={nodes.inside_low_Head_0.geometry}>
                    <meshMatcapMaterial matcap={blueTexture} color={'blue'} />
                  </mesh>
                </group>
                <group name="Mouth_low" rotation={[-Math.PI / 2, 0, 0]} scale={8.16}>
                  <mesh name="Mouth_low_Head_0" geometry={nodes.Mouth_low_Head_0.geometry} >
                    <meshMatcapMaterial matcap={faceTexture} />
                  </mesh>
                </group>
                <group name="SideRot_low" position={[-65.34, 111.46, 9.88]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="SideRot_low_Head_0" geometry={nodes.SideRot_low_Head_0.geometry}>
                  <meshMatcapMaterial matcap={faceTexture} />
                  </mesh>
                </group>
                <group name="SideRot_lowRight" position={[65.34, 111.46, 9.88]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="SideRot_lowRight_Head_0" geometry={nodes.SideRot_lowRight_Head_0.geometry}>
                  <meshMatcapMaterial matcap={faceTexture} />
                  </mesh>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('models/ScannerPreloader.glb')