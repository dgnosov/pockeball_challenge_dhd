import { useGLTF } from "@react-three/drei";
import React from "react";
import { GLTFPokeball } from "../../../types/types";
type Props = {};

const Lamp: React.FC<Props> = ({}) => {
  const { nodes, materials } = useGLTF("./pockeball.glb") as GLTFPokeball;

  return (
    <>
      <group position={[0.104, -0.205, 0.113]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1.geometry}
          material={materials.lamp}
        />

        <mesh
          scale={0.9}
          position={[-0.1, 0, -0.1]}
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1.geometry}
          material={materials.lamp}
        >
          <meshPhysicalMaterial
            color={"gold"}
            roughness={0.2}
            metalness={0.5}
            emissive={"white"}
            emissiveIntensity={6}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_2.geometry}
          material={materials.black_stroke}
        />
      </group>
      <group position={[0.057, -0.538, 0.72]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={materials.lamp_stick}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_1.geometry}
          material={materials.black_stroke}
        />
      </group>
    </>
  );
};
export default Lamp;
