import React from "react";
import * as ST from "./styled";
import Text from "../../Libraries/main.library/src/UI_KIT/Atoms/Text";
import { TextEnum } from "../../Libraries/main.library/src/UI_KIT/Atoms/Text/enum";
import CardItem from "../../Libraries/main.library/src/UI_KIT/Cells/CardItem";

interface WeeklySliderProps {}

const WeeklySlider: React.FC<WeeklySliderProps> = () => {
  return (
    <ST.Container>
      <Text type={TextEnum.enum_H2Text} children="Weekly - Top NFT" />
      <ST.SlidersBlock>
        <CardItem />
      </ST.SlidersBlock>
    </ST.Container>
  );
};
export default WeeklySlider;
