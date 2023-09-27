import React from "react";
import * as ST from "./styled";
import ArrowButtons from "../ArrowButtons";
import Image from "../../Atoms/Images";
import { ImageEnum } from "../../Atoms/Images/enum";
interface HeroHeaderSliderImageProps {}

const HeroHeaderSlider: React.FC<HeroHeaderSliderImageProps> = () => {
  return (
    <ST.Container>
      <ST.MainBlockItem>
        <ST.ItemImageBlock>
          <Image
            type={ImageEnum.enum_defaultImage}
            src="/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/SunGlass1.png"
            alt="Main Item"
          />
          <ST.ItemBlur />
        </ST.ItemImageBlock>
      </ST.MainBlockItem>

      <ST.SecondBlockItem>
        <Image
          type={ImageEnum.enum_defaultImage}
          src="/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/SunGlass1.png"
          alt="Main Item"
        />
        <ST.ItemBlur />
      </ST.SecondBlockItem>

      <ST.ArrowBtn>
        <ArrowButtons />
      </ST.ArrowBtn>
    </ST.Container>
  );
};
export default HeroHeaderSlider;
