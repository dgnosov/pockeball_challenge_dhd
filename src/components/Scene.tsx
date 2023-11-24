import React, { useEffect } from "react";
import { Pokeball } from "./Pokeball/Pokeball";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import Sparks from "./Sparks";

type Props = {};

const Scene: React.FC<Props> = ({}) => {
  const { camera } = useThree();

  const rotateCamera = () => {
    gsap.to(camera.position, {
      duration: 2,
      x: 40,
      y: 30,
      z: -10,
      delay: 1,
      ease: "power3.inOut",
    });
  };

  useEffect(() => {
    rotateCamera();
  }, []);

  return (
    <>
      <Pokeball />
      {/* <Sparks count={14} /> */}
    </>
  );
};
export default Scene;
