import React from "react";
import * as ST from "./styled";
import Text from "../../UI_KIT/Atoms/Text";
import { TextEnum } from "../../UI_KIT/Atoms/Text/enum";
import Image from "../../UI_KIT/Atoms/Images";
import { ImageEnum } from "../../UI_KIT/Atoms/Images/enum";
import { UnleashSubTitleData } from "./const";
import Button from "../../UI_KIT/Atoms/Button";
import { ButtonEnum } from "../../UI_KIT/Atoms/Button/enum";
import BestSaller from "../bestSallers.widget";
import RecentViewed from "../RecentViewed.widget";
import Token from "../../UI_KIT/Cells/Token.cell";

interface UnleashProps {}

const Unleash: React.FC<UnleashProps> = () => {
  return (
    <ST.Container>
      <ST.Flex>
        <Text type={TextEnum.enum_H2Text} children="Just Unleash - " />
        <ST.Span>
          <Text type={TextEnum.enum_H2Text} children="Your Inner Collector" />
        </ST.Span>
        <ST.TextBlock>
          {UnleashSubTitleData.map((e) => (
            <ST.TextItem>
              <Image type={ImageEnum.enum_defaultImage} src="assets/icons/Unleash.svg" />
              <Text
                type={TextEnum.enum_H5Text}
                key={`UnleashSubTitleDataUnleash${e.id}`}
                children={e.title}
              />
            </ST.TextItem>
          ))}
          <ST.Button>
            <Button type={ButtonEnum.enum_ExploreBlack} children="Explore More" />
          </ST.Button>
        </ST.TextBlock>
        <ST.RecentPosition>
          <RecentViewed />
        </ST.RecentPosition>
      </ST.Flex>
      <BestSaller />
      <Token />
    </ST.Container>
  );
};
export default Unleash;
