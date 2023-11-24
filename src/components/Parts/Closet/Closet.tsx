import { useGLTF } from "@react-three/drei";
import React from "react";
import { GLTFPokeball } from "../../../types/types";
type Props = {};

const Closet: React.FC<Props> = ({}) => {
  const { nodes, materials } = useGLTF("./pockeball.glb") as GLTFPokeball;

  return (
    <>
      <group position={[-0.284, 0.111, -0.207]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials.closet_material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_1.geometry}
          material={materials.black_stroke}
        />
      </group>
      <group position={[-0.277, 0.116, -0.203]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019.geometry}
          material={materials.box}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_1.geometry}
          material={materials.black_stroke}
        />
      </group>
      <group position={[-0.344, 0.202, -0.216]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube020.geometry}
          material={materials.box}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube020_1.geometry}
          material={materials.black_stroke}
        />
      </group>
      <group position={[-0.313, 0.245, -0.209]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023.geometry}
          material={materials.metall}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023_1.geometry}
          material={materials.black_stroke}
        />
      </group>
      <group
        position={[-0.436, 0.129, 0.001]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 3.566, 1]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube025.geometry}
          material={materials.metall}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube025_1.geometry}
          material={materials.black_stroke}
        />
      </group>
      <group
        position={[-0.446, 0.203, -0.338]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 2.762, 1]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026.geometry}
          material={materials.metall}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026_1.geometry}
          material={materials.black_stroke}
        />
      </group>
      <group position={[-0.344, 0.115, -0.216]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials.box}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials.black_stroke}
        />
      </group>
      <group
        position={[-0.446, 0.116, -0.338]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 2.762, 1]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials.metall}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_1.geometry}
          material={materials.black_stroke}
        />
      </group>
      <group position={[-0.344, 0.018, -0.216]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials.box}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_1.geometry}
          material={materials.black_stroke}
        />
      </group>
      <group
        position={[-0.446, 0.019, -0.338]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 2.762, 1]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={materials.metall}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007_1.geometry}
          material={materials.black_stroke}
        />
      </group>

      <group position={[-0.313, 0.017, -0.209]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials.metall}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_1.geometry}
          material={materials.black_stroke}
        />
      </group>
    </>
  );
};
export default Closet;
