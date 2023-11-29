import { useGLTF } from "@react-three/drei";
import React, { useRef, useState } from "react";
import { GLTFPokeball } from "../../types/types";
import { Object3DEventMap } from "three";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import jumpAudiomp3 from "../../assets/jump.mp3";

const jumpAudio = new Audio(jumpAudiomp3);

gsap.registerPlugin(CustomEase);

type Props = {};

const Bulbasaur: React.FC<Props> = () => {
  const { nodes, materials } = useGLTF("./pockeball.glb") as GLTFPokeball;
  const bulbasaur = useRef<Object3DEventMap | any>();
  const [allowJump, setAllowJump] = useState(true);

  const jump = () => {
    if (!allowJump) return;
    setAllowJump(false);
    jumpAudio.play();
    gsap.to(bulbasaur.current.position, {
      duration: 2.5,
      ease: CustomEase.create(
        "custom",
        "M0,0 C0,0 0.077,0.588 0.2,0.7 0.302,0.631 0.4,0.194 0.501,-0.011 0.68,0.05 0.939,0 1,-0.05 "
      ),
      y: 0.1,
      onComplete: () => {
        bulbasaur.current.position.y = -0.1;
        setAllowJump(true);
      },
    });
    gsap.to(bulbasaur.current.rotation, {
      duration: 1.5,
      ease: "power3.ease",
      z: Math.PI * 2 + 1.077,
      onComplete: () => {
        bulbasaur.current.rotation.z = 1.077;
        setAllowJump(true);
      },
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
