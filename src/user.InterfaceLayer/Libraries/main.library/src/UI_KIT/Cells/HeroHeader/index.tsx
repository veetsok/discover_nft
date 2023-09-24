import React from "react";
import * as ST from "./styled";
import HeroText from "../../Molecules/HeroText";
import Features from "../../Molecules/Features";
import HeroHeaderImage from "../../Molecules/HeroHeaderImage";

interface HeroHeaderProps {}

const HeroHeader: React.FC<HeroHeaderProps> = () => {
  return (
    <ST.HeroHeader>
      <ST.HeroBlock>
        <HeroText />
        <Features />
      </ST.HeroBlock>
      <ST.HeroImageBLock>
        <HeroHeaderImage />
      </ST.HeroImageBLock>
    </ST.HeroHeader>
  );
};
export default HeroHeader;
