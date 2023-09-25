import React from "react";
import * as ST from "./styled";
import Text from "../../Libraries/main.library/src/UI_KIT/Atoms/Text";
import { TextEnum } from "../../Libraries/main.library/src/UI_KIT/Atoms/Text/enum";

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

  return (
    <ST.Container>
      <ST.Title>
        <Text type={TextEnum.enum_H2Text} children="Top Collection" />
      </ST.Title>
      <ST.RatingBlock>
        <ST.RatingFilter>
          {titleData.map((e) => (
            <Text key={e.id} type={TextEnum.enum_H4Text} children={e.title} />
          ))}
        </ST.RatingFilter>
      </ST.RatingBlock>
    </ST.Container>
  );
};
export default RatingTable;
