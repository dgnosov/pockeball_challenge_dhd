// import { CuboidCollider } from "@react-three/rapier";
import { useControls } from "leva";
import React from "react";
type Props = {};

const Ground: React.FC<Props> = ({}) => {
  const settings = useControls("Ground", {
    color: "#e83333",
  });

  return (
    <mesh rotation={[-(Math.PI / 2), 0, 0]} position={[0, -0.1, 0]}>
      <planeGeometry args={[30, 30, 30]} />
      <meshStandardMaterial color={settings.color} />
      {/* <CuboidCollider args={[14, 14, 0.5]} position={[0, 0, -0.5]} /> */}
    </mesh>
  );
};
export default Ground;
