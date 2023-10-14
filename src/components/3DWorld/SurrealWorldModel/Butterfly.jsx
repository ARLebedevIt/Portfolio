import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations, useMatcapTexture } from '@react-three/drei'
import { useFrame } from "@react-three/fiber";

export function ButterflyModel() {
  const [itemTexture] = useMatcapTexture('660505_F2B090_DD4D37_AA1914', 256)
  const group = useRef(null)
  const { nodes, animations } = useGLTF('models/Butterfly.glb')
  const { actions, names } = useAnimations(animations, group)
  useFrame(() => {
    actions[names[0]].play()
  })
  return (
    <group ref={group} dispose={null}>
      <group name="Scene">
        <group name="GLTF_created_0" position={[-227.99, 76.75, -178.21]} rotation={[-Math.PI, 1.37, -Math.PI]} scale={5.33}>
          <primitive object={nodes.GLTF_created_0_rootJoint} />
        </group>
        <skinnedMesh castShadow name="Object_165" geometry={nodes.Object_165.geometry} skeleton={nodes.Object_165.skeleton} >
          <meshMatcapMaterial matcap={itemTexture} />
        </skinnedMesh>
      </group>
    </group>
  )
}

useGLTF.preload('models/Butterfly.glb')
