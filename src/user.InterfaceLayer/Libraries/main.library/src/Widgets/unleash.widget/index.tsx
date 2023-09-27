import React from "react";
import * as ST from "./styled";
import Text from "../../UI_KIT/Atoms/Text";
import { TextEnum } from "../../UI_KIT/Atoms/Text/enum";
import Image from "../../UI_KIT/Atoms/Images";
import { ImageEnum } from "../../UI_KIT/Atoms/Images/enum";
import { UnleashSubTitleData } from "./const";
import Button from "../../UI_KIT/Atoms/Button";
import { ButtonEnum } from "../../UI_KIT/Atoms/Button/enum";

interface UnleashProps {}

const Unleash: React.FC<UnleashProps> = () => {
  return (
    <ST.Container>
      <Text type={TextEnum.enum_H2Text} children="Just Unleash - " />
      <ST.Span>
        <Text type={TextEnum.enum_H2Text} children="Your Inner Collector" />
      </ST.Span>
      <ST.TextBlock>
        {UnleashSubTitleData.map((e) => (
          <ST.TextItem>
            <Image
              type={ImageEnum.enum_defaultImage}
              src="/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/Unleash.svg"
            />
            <Text
              type={TextEnum.enum_H5Text}
              key={`UnleashSubTitleDataUnleash${e.id}`}
              children={e.title}
            />
          </ST.TextItem>
        ))}
      </ST.TextBlock>

      <Button type={ButtonEnum.enum_blackButton} />
    </ST.Container>
  );
};
export default Unleash;
