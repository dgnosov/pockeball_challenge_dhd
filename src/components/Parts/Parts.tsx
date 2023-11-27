import React, { useEffect, useState } from "react";
import Bed from "./Bed/Bed";
import Rug from "./Rugs/Rugs";
import Pictures from "./Pictures/Pictures";
import Closet from "./Closet/Closet";
import Lamp from "./Lamp/Lamp";
import FlowersAndMushrooms from "./FlowersAndMushrooms/FlowersAndMushrooms";
import { TopPart } from "../Pokeball/TopPart/TopPart";

type Props = {};

const Parts: React.FC<Props> = () => {
  const [offsetPuctures, setOffsetPictures] = useState(false);

  const handleOffsetPictures = (offset: boolean) => setOffsetPictures(offset);

  return (
    <>
      <TopPart handleOffsetPictures={handleOffsetPictures} />
      <Bed />
      <Rug />
      <Pictures offsetPuctures={offsetPuctures} />
      <Closet />
      <Lamp />
      <FlowersAndMushrooms />
    </>
  );
};
export default Parts;
