import React from "react";
import Text from "../../Atoms/Text";
import { TextEnum } from "../../Atoms/Text/enum";
import * as ST from "./styled";

interface FeaturesProps {}

const Features: React.FC<FeaturesProps> = () => {
  const FeaturesData = [
    { id: 1, title: "430K+", subTitle: "Art Works" },
    { id: 2, title: "159K+", subTitle: "Creators" },
    { id: 3, title: "87K+", subTitle: "Collections" },
  ];

  return (
    <ST.Features>
      {FeaturesData.map((e) => (
        <>
          <ST.SubTitle>
            <Text
              type={TextEnum.enum_H3Text}
              key={`featuresTitle${e.id}`}
              children={e.title}
            />
            <Text
              type={TextEnum.enum_H6Text}
              key={`featuresSubtitle${e.id}`}
              children={e.subTitle}
            />
          </ST.SubTitle>
        </>
      ))}
    </ST.Features>
  );
};
export default Features;
