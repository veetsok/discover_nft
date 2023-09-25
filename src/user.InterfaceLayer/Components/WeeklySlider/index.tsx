import React from "react";
import * as ST from "./styled";
import Text from "../../Libraries/main.library/src/UI_KIT/Atoms/Text";
import { TextEnum } from "../../Libraries/main.library/src/UI_KIT/Atoms/Text/enum";
import Image from "../../Libraries/main.library/src/UI_KIT/Atoms/Images";
import { ImageEnum } from "../../Libraries/main.library/src/UI_KIT/Atoms/Images/enum";
import Button from "../../Libraries/main.library/src/UI_KIT/Atoms/Button";
import { ButtonEnum } from "../../Libraries/main.library/src/UI_KIT/Atoms/Button/enum";

interface WeeklySliderProps {}

const WeeklySlider: React.FC<WeeklySliderProps> = () => {
  return (
    <ST.Container>
      <Text type={TextEnum.enum_H2Text} children="Weekly - Top NFT" />
      <ST.SlidersBlock>
        <ST.SliderBlock>
          <ST.SliderBlockImages>
            <Image
              type={ImageEnum.enum_backGroundImage}
              background="/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/SunGlass1.png"
            />
          </ST.SliderBlockImages>
          <ST.SliderBlockTitle>
            <Text type={TextEnum.enum_H3Text} children="Sun-Glass" />
          </ST.SliderBlockTitle>
          <Text type={TextEnum.enum_H6Text} children="Current bid" />
          <Image type={ImageEnum.enum_defaultImage} />
          <Text type={TextEnum.enum_H5Text} />
          <Button type={ButtonEnum.enum_blackButton} children="PLACE BID" />
        </ST.SliderBlock>
      </ST.SlidersBlock>
    </ST.Container>
  );
};
export default WeeklySlider;
