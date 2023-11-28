import React from "react";
import { Pokeball } from "./Pokeball/Pokeball";
import Lights from "./Lights";
import Parts from "./Parts/Parts";
import Sparks from "./Sparks";

type Props = {};

const Scene: React.FC<Props> = ({}) => {
  return (
    <>
      <Lights />
      <Parts />
      <Pokeball />
      <Sparks />
    </>
  );
};
export default Scene;
