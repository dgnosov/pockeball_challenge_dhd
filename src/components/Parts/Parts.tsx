import React from "react";
import Bed from "./Bed/Bed";
import Rug from "./Rugs/Rugs";
import Pictures from "./Pictures/Pictures";
import Closet from "./Closet/Closet";
import Lamp from "./Lamp/Lamp";
import FlowersAndMushrooms from "./FlowersAndMushrooms/FlowersAndMushrooms";
type Props = {};

const Parts: React.FC<Props> = ({}) => {
  return (
    <>
      <Bed />
      <Rug />
      <Pictures />
      <Closet />
      <Lamp />
      <FlowersAndMushrooms />
    </>
  );
};
export default Parts;
