import { useGLTF } from "@react-three/drei";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { GLTFPokeball } from "../../../types/types";
import { Object3DEventMap } from "three";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";
import kickAudio from "../../../assets/kick.mp3";

const kick = new Audio(kickAudio);

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

  const [permissionToRotate_1, setPermissionToRotate_1] = useState(true);
  const [permissionToRotate_2, setPermissionToRotate_2] = useState(true);

  const rotate_picture_1 = (picture: MutableRefObject<any>) => {
    if (!permissionToRotate_1) return;
    setPermissionToRotate_1(false);
    gsap.to(picture.current.rotation, {
      duration: 2,
      x: 0,
      y: -0.151 + Math.PI * 2,
      z: 0,
      ease: "power3.linear",
      onComplete: () => {
        picture.current.rotation.y = -0.151;
        setPermissionToRotate_1(true);
      },
    });
    kick.play();
  };

  const rotate_picture_2 = (picture: MutableRefObject<any>) => {
    if (!permissionToRotate_2) return;
    setPermissionToRotate_2(false);
    gsap.to(picture.current.rotation, {
      duration: 2,
      x: 0,
      y: -0.151 + Math.PI * 2,
      z: 0,
      ease: "power3.linear",
      onComplete: () => {
        picture.current.rotation.y = -0.151;
        setPermissionToRotate_2(true);
      },
    });
    kick.play();
  };

  return (
    <group ref={pictures}>
      <group
        onClick={() => rotate_picture_1(picture_1)}
        onPointerEnter={() => (document.body.style.cursor = "pointer")}
        onPointerLeave={() => (document.body.style.cursor = "default")}
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
        onClick={() => rotate_picture_2(picture_2)}
        onPointerEnter={() => (document.body.style.cursor = "pointer")}
        onPointerLeave={() => (document.body.style.cursor = "default")}
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
