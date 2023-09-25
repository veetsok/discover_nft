import React from "react";

import * as ST from "./styled";
import Button from "../../Atoms/Button";
import { ButtonEnum } from "../../Atoms/Button/enum";
import { ImageEnum } from "../../Atoms/Images/enum";
import { TextEnum } from "../../Atoms/Text/enum";
import Image from "../../Atoms/Images";
import Text from "../../Atoms/Text";
interface CardItemProps {}

const CardItem: React.FC<CardItemProps> = () => {
  return (
    <ST.SliderBlock>
      <ST.SliderBlockImages>
        <Image
          type={ImageEnum.enum_backGroundImage}
          background="/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/SunGlass1.png"
        />
        <ST.TimeBlur>
          <Text type={TextEnum.enum_H5Text} children="19H 09m 12s" />
        </ST.TimeBlur>
      </ST.SliderBlockImages>

      <ST.SubImagePad>
        <ST.SliderBlockTitle>
          <Text type={TextEnum.enum_H4Text} children="Sun-Glass" />
        </ST.SliderBlockTitle>

        <ST.Subtitle>
          <ST.SubtitleBlock>
            <Text type={TextEnum.enum_H6Text} children="Current bid" />

            <ST.Rate>
              <Image
                type={ImageEnum.enum_defaultImage}
                src="/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/mdi_ethereum.svg"
              />
              <Text type={TextEnum.enum_H5Text} children="1.75" />
            </ST.Rate>
          </ST.SubtitleBlock>

          <Button type={ButtonEnum.enum_blackButton} children="PLACE BID" />
        </ST.Subtitle>
      </ST.SubImagePad>
    </ST.SliderBlock>
  );
};
export default CardItem;
