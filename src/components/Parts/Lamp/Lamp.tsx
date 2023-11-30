import { useGLTF } from "@react-three/drei";
import React from "react";
import { GLTFPokeball } from "../../../types/types";
import { useAtom } from "jotai";
import switchLight from "../../../context/Context";
type Props = {};
import clickAudio from "../../../assets/click.mp3";

const click = new Audio(clickAudio);

const Lamp: React.FC<Props> = ({}) => {
  const { nodes, materials } = useGLTF("./pockeball.glb") as GLTFPokeball;

  const [light, setLight] = useAtom(switchLight);

  const handleLight = () => {
    setLight(!light);
    click.play();
  };

  return (
    <>
      <group
        position={[0.104, -0.205, 0.113]}
        onClick={() => handleLight()}
        onPointerEnter={() => (document.body.style.cursor = "pointer")}
        onPointerLeave={() => (document.body.style.cursor = "default")}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1.geometry}
          material={materials.lamp}
        >
          <meshStandardMaterial color={[1, 1.1, 1]} toneMapped={false} />
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
