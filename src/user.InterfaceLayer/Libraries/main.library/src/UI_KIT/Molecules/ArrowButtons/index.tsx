import React from "react";
import Button from "../../Atoms/Button";
import { ButtonEnum } from "../../Atoms/Button/enum";
import * as ST from "./styled";

interface ArrowButtonsProps {}

const ArrowButtons: React.FC<ArrowButtonsProps> = () => {
  return (
    <ST.VerticalBtns>
      <Button type={ButtonEnum.enum_leftArrowButton} />
      <ST.Vertical></ST.Vertical>
      <Button type={ButtonEnum.enum_rightArrowButton} />
    </ST.VerticalBtns>
  );
};
export default ArrowButtons;
