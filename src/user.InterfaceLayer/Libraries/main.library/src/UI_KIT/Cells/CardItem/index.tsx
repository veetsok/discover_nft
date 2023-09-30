import React from "react";

import * as ST from "./styled";
import Button from "../../Atoms/Button";
import { ButtonEnum } from "../../Atoms/Button/enum";
import { ImageEnum } from "../../Atoms/Images/enum";
import { TextEnum } from "../../Atoms/Text/enum";
import Image from "../../Atoms/Images";
import Text from "../../Atoms/Text";

export interface CardItemProps {
  url?: string;
  time?: string;
  title?: string;
  subTitle?: string;
  rate?: string;
}

const CardItem: React.FC<CardItemProps> = ({ url, time, title, subTitle, rate }) => {
  return (
    <ST.SliderBlock>
      <ST.SliderBlockImages>
        <Image type={ImageEnum.enum_backGroundImage} background={url} />
        <ST.TimeBlur>
          <Text type={TextEnum.enum_H5Text} children={time} />
        </ST.TimeBlur>
      </ST.SliderBlockImages>

      <ST.SubImagePad>
        <ST.SliderBlockTitle>
          <Text type={TextEnum.enum_H4Text} children={title} />
        </ST.SliderBlockTitle>

        <ST.Subtitle>
          <ST.SubtitleBlock>
            <Text type={TextEnum.enum_H6Text} children={subTitle} />

            <ST.Rate>
              <Image
                type={ImageEnum.enum_defaultImage}
                src="assets/icons/mdi_ethereum.svg"
              />
              <Text type={TextEnum.enum_H5Text} children={rate} />
            </ST.Rate>
          </ST.SubtitleBlock>

          <Button type={ButtonEnum.enum_blackButton} children="PLACE BID" />
        </ST.Subtitle>
      </ST.SubImagePad>
    </ST.SliderBlock>
  );
};
export default CardItem;
