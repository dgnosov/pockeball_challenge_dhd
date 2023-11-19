import React from "react";
import Ground from "./Ground";
import { Pokeball } from "./Pokeball/Pokeball";

type Props = {};

const Scene: React.FC<Props> = ({}) => {
  return (
    <>
      <Pokeball />
      <Ground />
    </>
  );
};
export default Scene;
