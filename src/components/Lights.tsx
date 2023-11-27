import React from "react";

type Props = {};

const Lights: React.FC<Props> = () => {
  return (
    <>
      <pointLight
        intensity={1}
        color={"yellow"}
        position={[0.057, 2, 0.72]}
        castShadow
        shadow-bias={-0.01}
      />

      <directionalLight
        shadow-bias={-0.0001}
        position={[0.057, 10, 0.72]}
        intensity={1}
        castShadow
      />
      <ambientLight intensity={0.5} />
    </>
  );
};
export default Lights;
