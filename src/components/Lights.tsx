import React from "react";
import switchLight from "../context/Context";
import { useAtom } from "jotai";

type Props = {};

const Lights: React.FC<Props> = () => {
  const [light] = useAtom(switchLight);

  return (
    <>
      <pointLight
        intensity={light ? 1 : 0}
        color={"yellow"}
        position={[0.057, 2, 0.72]}
        castShadow
        shadow-bias={-0.01}
      />

      <directionalLight
        shadow-bias={-0.0001}
        position={[0.057, 10, 0.72]}
        intensity={light ? 1 : 0}
        castShadow
      />
      <ambientLight intensity={0.5} />
    </>
  );
};
export default Lights;
