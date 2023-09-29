import React from "react";
import * as ST from "./styled";
import { ImageEnum } from "../../Atoms/Images/enum";
import { TextEnum } from "../../Atoms/Text/enum";
import Image from "../../Atoms/Images";
import Text from "../../Atoms/Text";
import Button from "../../Atoms/Button";
import { ButtonEnum } from "../../Atoms/Button/enum";

interface BestSellItemsProps {
  name?: string;
  mail?: string;
  subName?: string;
  volume?: string;
  day?: string;
  price?: string;
  owners?: string;
  items?: string;
  image?: string;
  count?: string;
  follow?: boolean;
}

const BestSellItems: React.FC<BestSellItemsProps> = ({
  image,
  name,
  mail,
  follow,
  count,
}) => {
  return (
    <ST.ListItem>
      <ST.ListItemName>
        <ST.ListItemImage>
          <Image type={ImageEnum.enum_backGroundImage} background={image} />
          <ST.Notifications>
            <Text type={TextEnum.enum_H6Text} children={count} />
          </ST.Notifications>
        </ST.ListItemImage>
        <ST.ListItemBlock>
          <Text type={TextEnum.enum_H5Text} children={name} />
          <Text type={TextEnum.enum_H6Text} children={mail} />
        </ST.ListItemBlock>
      </ST.ListItemName>
      {follow ? (
        <Button type={ButtonEnum.enum_followButton} children="Follow" />
      ) : (
        <ST.False>
          <Button type={ButtonEnum.enum_followButton} children="Unfollow" />
        </ST.False>
      )}
    </ST.ListItem>
  );
};
export default BestSellItems;
