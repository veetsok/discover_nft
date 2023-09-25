import React from "react";
import * as ST from "./styled";
import Text from "../../Libraries/main.library/src/UI_KIT/Atoms/Text";
import { TextEnum } from "../../Libraries/main.library/src/UI_KIT/Atoms/Text/enum";

interface WeeklySliderProps {}

const WeeklySlider: React.FC<WeeklySliderProps> = () => {
  return (
    <ST.Container>
      <Text type={TextEnum.enum_H2Text} children="Weekly - Top NFT" />
      <ST.SliderBlock></ST.SliderBlock>
    </ST.Container>
  );
};
export default WeeklySlider;
