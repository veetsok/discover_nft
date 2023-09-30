import React from "react";
import * as ST from "./styled";
import HeroText from "../../Molecules/HeroText";
import Features from "../../Molecules/Features";
import HeroHeaderSlider from "../../Molecules/HeroHeaderImage";
import Image from "../../Atoms/Images";
import { ImageEnum } from "../../Atoms/Images/enum";

interface HeroHeaderProps {}

const HeroHeader: React.FC<HeroHeaderProps> = () => {
  return (
    <ST.HeroHeader>
      <ST.HeroBlock>
        <HeroText />
        <Features />
      </ST.HeroBlock>
      <ST.HeroImageBLock>
        <HeroHeaderSlider />
      </ST.HeroImageBLock>
      <ST.ArrowImage>
        <Image
          type={ImageEnum.enum_defaultImage}
          src="~/public/icons/HeroHeaderImageArrow.svg"
        />
      </ST.ArrowImage>

      <ST.DoteImage>
        <Image
          type={ImageEnum.enum_defaultImage}
          src="/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/DotOrnament.svg"
        />
      </ST.DoteImage>
      <ST.DoteImageSec>
        <Image
          type={ImageEnum.enum_defaultImage}
          src="/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/DotOrnament.svg"
        />
      </ST.DoteImageSec>
    </ST.HeroHeader>
  );
};
export default HeroHeader;
