import { useGLTF } from "@react-three/drei";
import { GLTFPokeball } from "../../types/types";
import { useEffect, useState } from "react";
import { Group } from "three/examples/jsm/libs/tween.module.js";
import { Object3D, Vector3 } from "three";

const objects = [
  {
    name: "pillow",
    position: [-0.207, 0.026, 0.471],
    rotation: [0, -0.023, 0],
    scale: 1,
    meshes: [
      {
        id: "pillow_1",
        cast_shadow: true,
        reveive_shadow: true,
        geometry: "Cube.geometry",
        material: "pillow",
      },
      {
        id: "pillow_2",
        cast_shadow: true,
        reveive_shadow: true,
        geometry: "Cube_1.geometry",
        material: "black_stroke",
      },
    ],
  },
  {
    name: "bulbasaur",
    position: [0.387, -0.098, -0.259],
    rotation: [-Math.PI / 2, 0, 1.077],
    scale: 0.039,
    meshes: [
      {
        id: "bulbasaur_1",
        cast_shadow: true,
        reveive_shadow: true,
        geometry: "Object_2_002.geometry",
        material: "lambert5SG",
        position: [0, 0, 0.151],
      },
      {
        id: "bulbasaur_2",
        cast_shadow: true,
        reveive_shadow: true,
        geometry: "Object_3.geometry",
        material: "lambert6SG",
        position: [0, 0, 0.151],
      },
    ],
  },
  {
    name: "bulbasaur",
    position: [0.387, -0.098, -0.259],
    rotation: [-Math.PI / 2, 0, 1.077],
    scale: 0.039,
    meshes: [
      {
        id: "bulbasaur_1",
        cast_shadow: true,
        reveive_shadow: true,
        geometry: "Object_2_002.geometry",
        material: "lambert5SG",
        position: [0, 0, 0.151],
      },
      {
        id: "bulbasaur_2",
        cast_shadow: true,
        reveive_shadow: true,
        geometry: "Object_3.geometry",
        material: "lambert6SG",
        position: [0, 0, 0.151],
      },
    ],
  },
];

export function Pokeball() {
  const { nodes, materials } = useGLTF("./pockeball.glb") as GLTFPokeball;
  const [isSceneRotate, setIsSceneRotate] = useState(false);
  const [grabObject, setGrabObject] = useState(false);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === "AltLeft") {
      setIsSceneRotate(true);
    }
  };

  const handleKeyUp = () => {
    setIsSceneRotate(false);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.addEventListener("keyup", handleKeyUp);
    };
  }, []);

  const mouseCoords = (x: number, y: number) => {
    let vector = new Vector3();
    vector.set(
      (x / window.innerWidth) * 2 - 1,
      -(y / window.innerHeight) * 2 + 1,
      0
    );
    return vector;
  };

  const moveObject = (object: Object3D, x: number, y: number) => {
    const getCoords = mouseCoords(x, y);

    object.position.set(getCoords.x, getCoords.y, object.position.z);
  };

  return (
    <group dispose={null}>
      {/* <group
        position={[-0.207, 0.026, 0.471]}
        rotation={[0, -0.023, 0]}
        name="pillow"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials.pillow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={materials.black_stroke}
        />
      </group> */}

      <group
        position={[0.387, -0.098, -0.259]}
        rotation={[-Math.PI / 2, 0, 1.077]}
        scale={0.039}
        name="bulbasaur"
        onClick={(e) => setGrabObject(() => (e ? true : false))}
        onPointerMove={(e) =>
          isSceneRotate
            ? false
            : grabObject
            ? moveObject(e.eventObject, e.clientX, e.clientY)
            : false
        }
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
      <group position={[-0.113, -0.08, -0.521]} rotation={[0, 0.43, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011.geometry}
          material={materials.towel}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011_1.geometry}
          material={materials.black_stroke}
        />
      </group>
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
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.pockeball_top.geometry}
        material={materials.Material_005}
        rotation={[-3.138, 0, -Math.PI / 2]}
      /> */}
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
      <group position={[-0.094, 0.011, 0.306]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials.bed}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_1.geometry}
          material={materials.black_stroke}
        />
      </group>
      <group position={[-0.096, 0, 0.315]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube017.geometry}
          material={materials.towel_material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube017_1.geometry}
          material={materials.black_stroke}
        />
      </group>
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
      <group position={[0.104, -0.205, 0.113]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1.geometry}
          material={materials.lamp}
        />
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
      </group>
      <group position={[-0.133, -0.098, 0.177]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials.carpet_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.black_stroke}
        />
      </group>
      <group position={[-0.133, -0.092, 0.177]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006.geometry}
          material={materials.carpet_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006_1.geometry}
          material={materials.black_stroke}
        />
      </group>
      <group position={[-0.133, -0.088, 0.177]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007.geometry}
          material={materials.carpet_3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007_1.geometry}
          material={materials.black_stroke}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./pockeball.glb");
