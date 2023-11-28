import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import { GLTFPokeball } from "../../types/types";
import { Object3DEventMap } from "three";
import gsap from "gsap";

type Props = {};

const Bulbasaur: React.FC<Props> = () => {
  const { nodes, materials } = useGLTF("./pockeball.glb") as GLTFPokeball;
  const bulbasaur = useRef<Object3DEventMap | any>();

  const jump = () => {
    gsap.from(bulbasaur.current.position, {
      duration: 0.5,
      y: -0.1,
      ease: "power3.linear",
    });
    gsap.to(bulbasaur.current.position, {
      delay: 0.3,
      duration: 0.5,
      y: 0.2,
      ease: "power3.linear",
    });
    gsap.to(bulbasaur.current.position, {
      delay: 0.8,
      duration: 0.5,
      y: -0.1,
      ease: "power3.linear",
    });
  };

  return (
    <group
      ref={bulbasaur}
      onClick={() => jump()}
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
