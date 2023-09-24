import React from "react";
import * as ST from "./styled";
import Text from "../../Atoms/Text";
import { TextEnum } from "../../Atoms/Text/enum";
import Button from "../../Atoms/Button";
import { ButtonEnum } from "../../Atoms/Button/enum";

interface HeroTextProps {}

const HeroText: React.FC<HeroTextProps> = () => {
  return (
    <ST.HeroText>
      <ST.Title>
        <Text type={TextEnum.enum_H1Text} children="Discover And Create NFTs" />
      </ST.Title>
      <ST.SubTitle>
        <Text
          type={TextEnum.enum_H4Text}
          children="Discover, Create and Sell NFTs On Our NFT Marketplace With Over Thousands Of NFTs And Get a $20 bonus."
        />
      </ST.SubTitle>
      <ST.Buttons>
        <Button type={ButtonEnum.enum_blackButton} children="Explore More" />
        <Button type={ButtonEnum.enum_whiteButton} children="create NFT" />
      </ST.Buttons>
    </ST.HeroText>
  );
};
export default HeroText;
