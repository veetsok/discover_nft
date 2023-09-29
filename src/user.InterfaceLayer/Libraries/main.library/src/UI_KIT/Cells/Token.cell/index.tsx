import React from "react";
import * as ST from "./styled";
import Image from "../../Atoms/Images";
import { ImageEnum } from "../../Atoms/Images/enum";
import Text from "../../Atoms/Text";
import { TextEnum } from "../../Atoms/Text/enum";

interface TokenProps {}

const Token: React.FC<TokenProps> = () => {
  return (
    <ST.Container>
      <ST.TokenBlock>
        <ST.TokenBlockSImageS>
          <ST.Dote></ST.Dote>
          <ST.TokenBlockImage>
            <Image
              type={ImageEnum.enum_backGroundImage}
              background="/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/SunGlass1.png"
            />
            <ST.Position>
              <Image
                type={ImageEnum.enum_backGroundImage}
                background="/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/checkIcon.svg"
              />
            </ST.Position>
          </ST.TokenBlockImage>
        </ST.TokenBlockSImageS>

        <ST.TokenBlockName>
          <ST.TokenName>
            <Text type={TextEnum.enum_H6Text} children="New bid  " />
            <span>Rotation</span>
          </ST.TokenName>
          <span>0.002 ETH</span>
          <Text type={TextEnum.enum_H6Text} children="6 Oct 2022, 11:44 PM" />
        </ST.TokenBlockName>
      </ST.TokenBlock>
      <ST.TokenImage>
        <Image
          type={ImageEnum.enum_backGroundImage}
          background="/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/SunGlass1.png"
        />
      </ST.TokenImage>
    </ST.Container>
  );
};
export default Token;
