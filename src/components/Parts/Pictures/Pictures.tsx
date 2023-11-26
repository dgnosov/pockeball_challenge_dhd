import { useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { GLTFPokeball } from "../../../types/types";
import { Group } from "three/examples/jsm/libs/tween.module.js";
import { Object3DEventMap } from "three";
import gsap from "gsap";
type Props = {
  offsetPuctures: boolean;
};

const Pictures: React.FC<Props> = ({ offsetPuctures }) => {
  const { nodes, materials } = useGLTF("./pockeball.glb") as GLTFPokeball;
  const pictures = useRef<Object3DEventMap | any>(null);

  // console.log(pictures.current);

  useEffect(() => {
    if (!offsetPuctures) {
      gsap.to(pictures.current.position, {
        duration: 2,
        x: 0.5,
        y: 0,
        z: 0,
        ease: "power3.inOut",
      });

      return;
    }
    gsap.to(pictures.current.position, {
      duration: 2,
      x: 0,
      y: 0,
      z: 0,
      ease: "power3.inOut",
    });
  }, [offsetPuctures]);

  return (
    <group ref={pictures}>
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
    </group>
  );
};
export default Pictures;
