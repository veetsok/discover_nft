import React from "react";
import * as ST from "./styled";
import Text from "../../Libraries/main.library/src/UI_KIT/Atoms/Text";
import { TextEnum } from "../../Libraries/main.library/src/UI_KIT/Atoms/Text/enum";
import Image from "../../Libraries/main.library/src/UI_KIT/Atoms/Images";
import { ImageEnum } from "../../Libraries/main.library/src/UI_KIT/Atoms/Images/enum";

interface RatingTableProps {}

const RatingTable: React.FC<RatingTableProps> = () => {
  const titleData = [
    { id: 1, title: "Collection" },
    { id: 2, title: "Volume" },
    { id: 3, title: "24h %" },
    { id: 4, title: "Floor Price" },
    { id: 5, title: "Owners" },
    { id: 6, title: "Items" },
  ];
  const collectionData = [
    {
      id: 1,
      name: "Alex Ca.",
      subName: "By Alex.",
      volume: "8,456",
      day: "+ 27.78%",
      price: "3,5",
      owners: "2.2K",
      items: "500",
    },
    { id: 2, name: "", subName: "" },
    { id: 3, name: "", subName: "" },
    { id: 4, name: "", subName: "" },
    { id: 5, name: "", subName: "" },
    { id: 6, name: "", subName: "" },
  ];

  return (
    <ST.Container>
      <ST.Title>
        <Text type={TextEnum.enum_H2Text} children="Top Collection" />
      </ST.Title>

      <ST.RatingFilter>
        {titleData.map((e) => (
          <Text key={e.id} type={TextEnum.enum_H4Text} children={e.title} />
        ))}
      </ST.RatingFilter>
      <ST.RatingBlock>
        <ST.RatingInfo>
          <ST.RatingImage>
            <Image type={ImageEnum.enum_defaultImage} />
          </ST.RatingImage>
          <ST.RatingBlockName>
            <ST.RatingName></ST.RatingName>
            <ST.RatingSub></ST.RatingSub>
          </ST.RatingBlockName>
        </ST.RatingInfo>
      </ST.RatingBlock>
    </ST.Container>
  );
};
export default RatingTable;
