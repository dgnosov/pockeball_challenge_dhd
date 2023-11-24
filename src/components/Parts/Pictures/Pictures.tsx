import { useGLTF } from "@react-three/drei";
import React from "react";
import { GLTFPokeball } from "../../../types/types";
type Props = {};

const Pictures: React.FC<Props> = ({}) => {
  const { nodes, materials } = useGLTF("./pockeball.glb") as GLTFPokeball;

  return (
    <>
      <group position={[-0.641, 0.365, 0.73]} rotation={[0, -0.151, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015.geometry}
          material={materials.picture_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_1.geometry}
          material={materials.black_stroke}
        />
      </group>
      <group position={[-0.841, 0.365, 0.495]} rotation={[0, -0.485, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016.geometry}
          material={materials.picture_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016_1.geometry}
          material={materials.black_stroke}
        />
      </group>
    </>
  );
};
export default Pictures;
