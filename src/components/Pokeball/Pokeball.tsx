import { useGLTF } from "@react-three/drei";
import { GLTFPokeball } from "../../types/types";
import Bulbasaur from "../Bulbasaur/Bulbasaur";
import Parts from "../Parts/Parts";

export function Pokeball() {
  const { nodes, materials } = useGLTF("./pockeball.glb") as GLTFPokeball;

  return (
    <group dispose={null}>
      <Bulbasaur />
      <group name="pokeball">
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

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.floor.geometry}
          material={materials.floor}
          scale={0.97}
        />

        <group>
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
      </group>
    </group>
  );
}

useGLTF.preload("./pockeball.glb");
