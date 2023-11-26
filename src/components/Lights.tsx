import React from "react";
import { ContactShadows } from "@react-three/drei";
import { useControls } from "leva";

type Props = {};

const Lights: React.FC<Props> = ({}) => {
  const CSSettings = useControls("Contact Shadows", {
    position: [0, -0.09, 0],
    scale: { min: 1, max: 50, value: 2, step: 1 },
    blur: { min: 1, max: 10, value: 1, step: 0.1 },
    opacity: { min: 0, max: 1, value: 0.5, step: 0.1 },
    far: { min: 1, max: 50, value: 8, step: 1 },
    color: "#0d0d0d",
  });

  return (
    <>
      <group scale={1.01}>
        <ContactShadows
          position={CSSettings.position}
          scale={CSSettings.scale}
          resolution={1024}
          far={CSSettings.far}
          color={CSSettings.color}
          opacity={CSSettings.opacity}
          blur={CSSettings.blur}
        />
      </group>
      <pointLight
        intensity={1}
        color={"yellow"}
        position={[0.057, 2, 0.72]}
        castShadow
        shadow-bias={-0.01}
      />

      <directionalLight position={[0.057, 2, 0.72]} />

      <ambientLight intensity={0.5} />
    </>
  );
};
export default Lights;
