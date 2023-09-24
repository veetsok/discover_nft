import React from "react";
import * as ST from "./styled";
import Image from "../../Atoms/Images";
import Button from "../../Atoms/Button";
import { ButtonEnum } from "../../Atoms/Button/enum";

interface HeroHeaderImageProps {}

const HeroHeaderImage: React.FC<HeroHeaderImageProps> = () => {
  return (
    <ST.Container>
      <Image />
      <Image />
      <Image />
      <Image />

      <Button type={ButtonEnum.enum_leftArrowButton} />
      <Button type={ButtonEnum.enum_rightArrowButton} />
    </ST.Container>
  );
};
export default HeroHeaderImage;
