import React from "react";
import * as ST from "./styled";
import { ImageEnum } from "../../Atoms/Images/enum";
import { TextEnum } from "../../Atoms/Text/enum";
import Image from "../../Atoms/Images";
import Text from "../../Atoms/Text";

interface RatingBlockProps {
  name: string;
  subName: string;
  volume: string;
  day: string;
  price: string;
  owners: string;
  items: string;
  image: string;
}

const RatingBlock: React.FC<RatingBlockProps> = ({
  name,
  subName,
  volume,
  day,
  price,
  owners,
  items,
  image,
}: RatingBlockProps) => {
  return (
    <ST.RatingBlock>
      <ST.Collection>
        <ST.RatingImage>
          <Image type={ImageEnum.enum_backGroundImage} background={image} />
        </ST.RatingImage>
        <ST.RatingBlockName>
          <ST.RatingName>
            <Text type={TextEnum.enum_H5Text} children={name} />
          </ST.RatingName>
          <ST.RatingSub>
            <Text type={TextEnum.enum_H6Text} children={subName} />
          </ST.RatingSub>
        </ST.RatingBlockName>
      </ST.Collection>
      <ST.Volume>
        <Image
          type={ImageEnum.enum_backGroundImage}
          background="/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/mdi_ethereum.svg"
        />
        <Text type={TextEnum.enum_H5Text} children={volume} />
      </ST.Volume>
      <ST.Days>
        <Text type={TextEnum.enum_H5Text} children={day} />
      </ST.Days>
      <ST.Price>
        <Image
          type={ImageEnum.enum_backGroundImage}
          background="/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/mdi_ethereum.svg"
        />
        <Text type={TextEnum.enum_H5Text} children={price} />
      </ST.Price>
      <ST.Owners>
        <Text type={TextEnum.enum_H5Text} children={owners} />
      </ST.Owners>
      <ST.Items>
        <Text type={TextEnum.enum_H5Text} children={items} />
      </ST.Items>
    </ST.RatingBlock>
  );
};
export default RatingBlock;
