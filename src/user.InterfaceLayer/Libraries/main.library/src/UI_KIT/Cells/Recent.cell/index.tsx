import React from "react";
import * as ST from "./styled";
import { ImageEnum } from "../../Atoms/Images/enum";
import { TextEnum } from "../../Atoms/Text/enum";
import Image from "../../Atoms/Images";
import Text from "../../Atoms/Text";

interface RecentProps {
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

const Recent: React.FC<RecentProps> = ({ image, name, subName, volume, count }) => {
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
          <Text type={TextEnum.enum_H6Text} children={subName} />
        </ST.ListItemBlock>
      </ST.ListItemName>
      <ST.Volume>
        <Image
          type={ImageEnum.enum_backGroundImage}
          background="/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/mdi_ethereum.svg"
        />
        <Text type={TextEnum.enum_H5Text} children={volume} />
      </ST.Volume>
    </ST.ListItem>
  );
};
export default Recent;
