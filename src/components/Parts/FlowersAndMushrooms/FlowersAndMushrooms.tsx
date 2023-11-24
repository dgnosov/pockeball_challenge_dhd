import { useGLTF } from "@react-three/drei";
import React from "react";
import { GLTFPokeball } from "../../../types/types";
type Props = {};

const FlowersAndMushrooms: React.FC<Props> = ({}) => {
  const { nodes, materials } = useGLTF("./pockeball.glb") as GLTFPokeball;

  return (
    <>
      <group
        position={[0.118, 0.043, 0.509]}
        rotation={[Math.PI, -1.18, Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere006.geometry}
          material={materials.green}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere006_1.geometry}
          material={materials.black_stroke}
        />
      </group>
      <group position={[-0.565, -0.105, -0.638]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere009.geometry}
          material={materials.mushroom_top}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere009.geometry}
          material={materials.mushroom_top}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere009_1.geometry}
          material={materials.black_stroke}
        />
      </group>
      <group position={[-0.566, -0.103, -0.639]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere010.geometry}
          material={materials.mushroom_bottom}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere010_1.geometry}
          material={materials.black_stroke}
        />
      </group>
      <group position={[0.265, -0.055, 0.283]} rotation={[0, -0.469, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={materials.cup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_1.geometry}
          material={materials.black_stroke}
        />
      </group>
      <group position={[0.29, -0.01, 0.301]} rotation={[1.94, -0.496, 2.253]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005.geometry}
          material={materials.green}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005_1.geometry}
          material={materials.black_stroke}
        />
      </group>
      <group
        position={[-0.662, -0.004, 0.135]}
        rotation={[1.94, -0.496, 2.253]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials.green}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_1.geometry}
          material={materials.black_stroke}
        />
      </group>
      <group
        position={[0.186, -0.055, 0.42]}
        rotation={[Math.PI, -0.369, Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004.geometry}
          material={materials.cup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_1.geometry}
          material={materials.black_stroke}
        />
      </group>
      <group position={[0.037, -0.013, 0.059]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005.geometry}
          material={materials.cup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005_1.geometry}
          material={materials.black_stroke}
        />
      </group>
      <group
        position={[-0.685, -0.055, 0.117]}
        rotation={[-Math.PI, 0.837, -Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008.geometry}
          material={materials.cup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008_1.geometry}
          material={materials.black_stroke}
        />
      </group>
      <group
        position={[-0.64, -0.055, -0.51]}
        rotation={[Math.PI, -0.939, Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015.geometry}
          material={materials.cup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015_1.geometry}
          material={materials.black_stroke}
        />
      </group>
      <group position={[-0.565, -0.055, -0.638]} rotation={[0, 0.706, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder016.geometry}
          material={materials.cup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder016_1.geometry}
          material={materials.black_stroke}
        />
      </group>
      <group position={[-0.513, 0.36, -0.189]} rotation={[0, 0.212, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017.geometry}
          material={materials.cup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_1.geometry}
          material={materials.black_stroke}
        />
      </group>
      <group position={[-0.641, 0.042, -0.512]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere005.geometry}
          material={materials.green}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere005_1.geometry}
          material={materials.black_stroke}
        />
      </group>
      <group position={[0.188, -0.087, 0.41]} rotation={[0.176, 0.088, 0.049]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere011.geometry}
          material={materials.mushroom_top}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere011_1.geometry}
          material={materials.black_stroke}
        />
      </group>
      <group position={[0.232, -0.116, 0.397]} rotation={[0.176, 0.088, 0.049]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere013.geometry}
          material={materials.mushroom_top}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere013_1.geometry}
          material={materials.black_stroke}
        />
      </group>
      <group
        position={[0.194, -0.118, 0.367]}
        rotation={[-1.528, 1.518, 1.698]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere015.geometry}
          material={materials.mushroom_top}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere015_1.geometry}
          material={materials.black_stroke}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere_006.geometry}
        material={materials.black_stroke}
        position={[0.185, -0.006, 0.423]}
        rotation={[0.176, 0.088, 0.049]}
      />
      <group position={[0.229, -0.035, 0.409]} rotation={[0.176, 0.088, 0.049]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere014.geometry}
          material={materials.mushroom_bottom}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere014_1.geometry}
          material={materials.black_stroke}
        />
      </group>
      <group
        position={[0.188, -0.037, 0.381]}
        rotation={[-1.601, 1.521, 1.781]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere016.geometry}
          material={materials.mushroom_bottom}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere016_1.geometry}
          material={materials.black_stroke}
        />
      </group>
      <group
        position={[-0.479, 0.431, -0.207]}
        rotation={[1.393, -0.585, 1.256]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane007.geometry}
          material={materials.green}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane007_1.geometry}
          material={materials.black_stroke}
        />
      </group>
      <group
        position={[-0.509, 0.614, -0.186]}
        rotation={[Math.PI, -0.473, Math.PI]}
        scale={0.568}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere_1.geometry}
          material={materials.flower_tops}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere_2.geometry}
          material={materials.black_stroke}
        />
      </group>
      <group
        position={[-0.535, 0.426, -0.2]}
        rotation={[1.261, 0.188, 3.127]}
        scale={0.379}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve002.geometry}
          material={materials.flowers_middle}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve002_1.geometry}
          material={materials.black_stroke}
        />
      </group>{" "}
    </>
  );
};
export default FlowersAndMushrooms;
