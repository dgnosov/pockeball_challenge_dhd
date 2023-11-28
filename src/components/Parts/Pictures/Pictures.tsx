import { useGLTF } from "@react-three/drei";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { GLTFPokeball } from "../../../types/types";
import { Group } from "three/examples/jsm/libs/tween.module.js";
import { Object3DEventMap } from "three";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";
type Props = {
  offsetPuctures: boolean;
};

const Pictures: React.FC<Props> = ({ offsetPuctures }) => {
  const { nodes, materials } = useGLTF("./pockeball.glb") as GLTFPokeball;
  const pictures = useRef<Object3DEventMap | any>(null);
  const picture_1 = useRef<Object3DEventMap | any>();
  const picture_2 = useRef<Object3DEventMap | any>();

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

  useFrame((state) => {
    if (!picture_1.current) return;
    const time = state.clock.getElapsedTime();
    picture_1.current.position.y = 0.36 + Math.sin(time) / 40;
    picture_2.current.position.y = 0.3 + Math.sin(time) / 60;
  });

  const [permissionToRotate, setPermissionToRotate] = useState(true);

  const rotate = (picture: MutableRefObject<any>) => {
    if (!permissionToRotate) return;
    setPermissionToRotate(false);
    gsap.to(picture.current.rotation, {
      duration: 2,
      x: 0,
      y: -0.151 + Math.PI * 2,
      z: 0,
      ease: "power3.linear",
      onComplete: () => {
        picture.current.rotation.y = -0.151;
        setPermissionToRotate(true);
      },
    });
  };

  return (
    <group ref={pictures}>
      <group
        onClick={() => rotate(picture_1)}
        ref={picture_1}
        position={[-0.641, 0.365, 0.73]}
        rotation={[0, -0.151, 0]}
      >
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
      <group
        onClick={() => rotate(picture_2)}
        ref={picture_2}
        position={[-0.841, 0.365, 0.495]}
        rotation={[0, -0.485, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016.geometry}
          material={materials.flowers_middle}
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
