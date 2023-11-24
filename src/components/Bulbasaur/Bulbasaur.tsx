import { useGLTF } from "@react-three/drei";
import React from "react";
import { GLTFPokeball } from "../../types/types";

type Props = {};

const Bulbasaur: React.FC<Props> = () => {
  const { nodes, materials } = useGLTF("./pockeball.glb") as GLTFPokeball;

  return (
    <group
      position={[0.387, -0.1, -0.259]}
      rotation={[-Math.PI / 2, 0, 1.077]}
      name="bulbasaur"
      scale={0.039}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2_002.geometry}
        material={materials.lambert5SG}
        position={[0, 0, 0.151]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_3.geometry}
        material={materials.lambert6SG}
        position={[0, 0, 0.151]}
      />
    </group>
  );
};
export default Bulbasaur;
