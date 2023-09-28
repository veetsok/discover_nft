import React from "react";
import Button from "../../Atoms/Button";
import { ButtonEnum } from "../../Atoms/Button/enum";
import * as ST from "./styled";

interface ArrowButtonsProps {
  onPrev?: () => void;
  onNext?: () => void;
}

const ArrowButtons: React.FC<ArrowButtonsProps> = ({ onPrev, onNext }) => {
  return (
    <ST.VerticalBtns>
      <Button type={ButtonEnum.enum_leftArrowButton} onClick={onPrev} />
      <ST.Vertical></ST.Vertical>
      <Button type={ButtonEnum.enum_rightArrowButton} onClick={onNext} />
    </ST.VerticalBtns>
  );
};
export default ArrowButtons;
