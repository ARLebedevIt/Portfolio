import React from 'react'
import { useGLTF, useMatcapTexture } from '@react-three/drei'
import { editable as e } from '@theatre/r3f'

export function SurrealTraffic() {
  const [itemTexture] = useMatcapTexture('3B3C3F_DAD9D5_929290_ABACA8', 256)
  const { nodes } = useGLTF('models/SurrealTraffic.glb')
  return (
    <group dispose={null}>
      <e.mesh theatreKey='Car1' geometry={nodes.C9.geometry} position={[-285.23, 63.43, -196.63]}
        rotation={[-1.57, -0.02, 2.12]} scale={4.1} >
        <meshMatcapMaterial matcap={itemTexture} />
      </e.mesh>
      <e.mesh theatreKey='Car2' geometry={nodes.C10.geometry} position={[-325.02, 68.31, -167.79]}
        rotation={[-1.57, 0.03, -1]} scale={4.1} >
        <meshMatcapMaterial matcap={itemTexture} />
      </e.mesh>
      <e.mesh theatreKey='Car3' geometry={nodes.C7.geometry} position={[-249.99, 63.52, -160.84]}
        rotation={[-1.57, 0.02, -0.99]} scale={4.1} >
        <meshMatcapMaterial matcap={itemTexture} />
      </e.mesh>
      <e.mesh theatreKey='Car4' geometry={nodes.C1.geometry} position={[-248.79, 69.93, -202.43]}
        rotation={[-1.57, -0.01, -0.99]} scale={4.69} >
        <meshMatcapMaterial matcap={itemTexture} />
      </e.mesh>
      <e.mesh theatreKey='Car5' geometry={nodes.C6.geometry} position={[-241.6, 89.29, -176.85]}
        rotation={[-1.57, 0, 2.15]} scale={4.69} >
        <meshMatcapMaterial matcap={itemTexture} />
      </e.mesh>
      <e.mesh theatreKey='Car6' geometry={nodes.C2.geometry} position={[-220.41, 79.5, -226.95]}
        rotation={[-Math.PI / 2, 0, -1.03]} scale={4.87} >
        <meshMatcapMaterial matcap={itemTexture} />
      </e.mesh>
      <e.mesh theatreKey='Car7' geometry={nodes.C3.geometry} position={[-293.2, 81.18, -160.89]}
        rotation={[-Math.PI / 2, 0, 2.13]} scale={4.53} >
        <meshMatcapMaterial matcap={itemTexture} />
      </e.mesh>
      <e.mesh theatreKey='Car8' geometry={nodes.C5.geometry} position={[-183.93, 64.02, -238.94]}
        rotation={[-Math.PI / 2, 0, -1.01]} scale={4.53} >
        <meshMatcapMaterial matcap={itemTexture} />
      </e.mesh>
      <e.mesh theatreKey='Car9' geometry={nodes.C8.geometry} position={[-345.42, 59.36, -130.4]}
        rotation={[-Math.PI / 2, 0, 2.14]} scale={4.53}>
        <meshMatcapMaterial matcap={itemTexture} />
      </e.mesh>
      <e.mesh theatreKey='Car10' geometry={nodes.C4.geometry} position={[-196.75, 82.76, -200.44]}
        rotation={[-1.55, 0.01, -1]} scale={3.31} >
        <meshMatcapMaterial matcap={itemTexture} />
      </e.mesh>
    </group>
  )
}

useGLTF.preload('models/SurrealTraffic.glb')