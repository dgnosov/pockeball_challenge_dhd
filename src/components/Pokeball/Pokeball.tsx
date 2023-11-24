import { useGLTF } from "@react-three/drei";
import { GLTFPokeball } from "../../types/types";
import DissolveMaterial from "../DissolveMaterial";
import { useState } from "react";
import Bulbasaur from "../Bulbasaur/Bulbasaur";
import Parts from "../Parts/Parts";

export function Pokeball() {
  const { nodes, materials } = useGLTF("./pockeball.glb") as GLTFPokeball;

  const [top, setTop] = useState(true);

  return (
    <group dispose={null}>
      <Bulbasaur />
      <Parts />

      <group rotation={[0, 0, -Math.PI / 2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_1.geometry}
          material={materials.Material_004}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_2.geometry}
          material={materials.black_stroke}
        />
      </group>
      <group
        position={[-0.003, 0, -0.002]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.961}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere001.geometry}
          material={materials.black_stroke}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere001_1.geometry}
          material={materials.Material_007}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor.geometry}
        material={materials.floor}
        scale={0.97}
      />

      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.pockeball_top.geometry}
        material={materials.Material_005}
        rotation={[-3.138, 0, -Math.PI / 2]}
      >
        <DissolveMaterial baseMaterial={materials.Material_005} visible={top} />
      </mesh> */}

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pockeball_middle.geometry}
        material={materials.Material_002}
        position={[0, 0.062, 0]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pockeball_middle001.geometry}
        material={materials.Material_002}
        position={[0, -0.078, 0]}
        rotation={[0, 0, -1.576]}
        scale={0.975}
      />
    </group>
  );
}

useGLTF.preload("./pockeball.glb");
