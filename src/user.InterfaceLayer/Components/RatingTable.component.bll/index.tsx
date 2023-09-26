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
    {
      id: 2,
      name: "John Doe",
      subName: "By John.",
      volume: "7,892",
      day: "+ 15.32%",
      price: "2.8",
      owners: "1.8K",
      items: "450",
    },
    {
      id: 3,
      name: "Sarah Smith",
      subName: "By Sarah.",
      volume: "6,712",
      day: "+ 21.17%",
      price: "3.2",
      owners: "1.5K",
      items: "400",
    },
    {
      id: 4,
      name: "Mike Johnson",
      subName: "By Mike.",
      volume: "9,345",
      day: "+ 30.05%",
      price: "4.1",
      owners: "2.5K",
      items: "550",
    },
    {
      id: 5,
      name: "Emma Brown",
      subName: "By Emma.",
      volume: "7,621",
      day: "+ 18.94%",
      price: "2.9",
      owners: "1.7K",
      items: "480",
    },
    {
      id: 6,
      name: "David Wilson",
      subName: "By David.",
      volume: "8,912",
      day: "+ 25.81%",
      price: "3.6",
      owners: "2.0K",
      items: "520",
    },
  ];

  return (
    <ST.Container>
      <ST.Title>
        <Text type={TextEnum.enum_H2Text} children="Top Collection" />
      </ST.Title>

      <ST.Table>
        <ST.Thead>
          <ST.RatingFilter>
            {titleData.map((e) => (
              <Text key={e.id} type={TextEnum.enum_H4Text} children={e.title} />
            ))}
          </ST.RatingFilter>
        </ST.Thead>

        <ST.Tbody>
          <ST.RatingBlock>
            <ST.Collection>
              <ST.RatingImage>
                <Image
                  type={ImageEnum.enum_defaultImage}
                  src="/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/SunGlass1.png"
                />
              </ST.RatingImage>
              <ST.RatingBlockName>
                <ST.RatingName>
                  <Text type={TextEnum.enum_H5Text} children="Alex Ca." />
                </ST.RatingName>
                <ST.RatingSub>
                  <Text type={TextEnum.enum_H6Text} children="By Alex" />
                </ST.RatingSub>
              </ST.RatingBlockName>
            </ST.Collection>
            <ST.Volume>
              <Image
                type={ImageEnum.enum_defaultImage}
                src="/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/mdi_ethereum.svg"
              />
              <Text type={TextEnum.enum_H5Text} children="8454" />
            </ST.Volume>
            <ST.Days>
              <Text type={TextEnum.enum_H5Text} children="+ 27%" />
            </ST.Days>
            <ST.Price>
              <Image
                type={ImageEnum.enum_defaultImage}
                src="/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/mdi_ethereum.svg"
              />
              <Text type={TextEnum.enum_H5Text} children="8454" />
            </ST.Price>
            <ST.Owners>
              <Text type={TextEnum.enum_H5Text} children="2.2K" />
            </ST.Owners>
            <ST.Items>
              <Text type={TextEnum.enum_H5Text} children="500" />
            </ST.Items>
          </ST.RatingBlock>
        </ST.Tbody>
      </ST.Table>
    </ST.Container>
  );
};
export default RatingTable;
