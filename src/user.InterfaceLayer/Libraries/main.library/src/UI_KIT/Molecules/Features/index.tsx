import React from "react";
import Text from "../../Atoms/Text";
import { TextEnum } from "../../Atoms/Text/enum";
import * as ST from "./styled";

interface FeaturesProps {}

const Features: React.FC<FeaturesProps> = () => {
  const array = [
    { id: 1, title: "430K+", subTitle: "Art Works" },
    { id: 1, title: "159K+", subTitle: "Creators" },
    { id: 1, title: "87K+", subTitle: "Collections" },
  ];

  return (
    <ST.Features>
      {array.map((e) => (
        <>
          <ST.SubTitle>
            <Text type={TextEnum.enum_H3Text} key={e.id} children={e.title} />
            <Text type={TextEnum.enum_H6Text} key={e.id} children={e.subTitle} />
          </ST.SubTitle>
        </>
      ))}
    </ST.Features>
  );
};
export default Features;
