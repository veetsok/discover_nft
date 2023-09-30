import React from "react";
import * as ST from "./styled";
import Text from "../../UI_KIT/Atoms/Text";
import { TextEnum } from "../../UI_KIT/Atoms/Text/enum";
import Button from "../../UI_KIT/Atoms/Button";
import { ButtonEnum } from "../../UI_KIT/Atoms/Button/enum";
import Image from "../../UI_KIT/Atoms/Images";
import { ImageEnum } from "../../UI_KIT/Atoms/Images/enum";

interface BannerProps {}

const Banner: React.FC<BannerProps> = () => {
  return (
    <ST.Container>
      <ST.Block>
        <Text type={TextEnum.enum_H2Text} children="Create and Sell NFTs" />
        <Text type={TextEnum.enum_H4Text} children="World’s Largest NFT Place" />

        <Button type={ButtonEnum.enum_whiteButton} children="Explore More" />
        <Button type={ButtonEnum.enum_whiteButton} children="Sell Artwork" />
      </ST.Block>
      <ST.BlockImage>
        <Image
          type={ImageEnum.enum_backGroundImage}
          background="assets/icons/SunGlass1.png"
        />
      </ST.BlockImage>
    </ST.Container>
  );
};
export default Banner;
