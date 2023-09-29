import React from "react";
import * as ST from "./styled";
import Text from "../../UI_KIT/Atoms/Text";
import { TextEnum } from "../../UI_KIT/Atoms/Text/enum";
import Button from "../../UI_KIT/Atoms/Button";
import { ButtonEnum } from "../../UI_KIT/Atoms/Button/enum";
import { RecentData } from "./const";
import Recent from "../../UI_KIT/Cells/Recent.cell";

interface RecentViewedProps {}

const RecentViewed: React.FC<RecentViewedProps> = () => {
  return (
    <ST.Container>
      <ST.Navbar>
        <Text type={TextEnum.enum_H4Text} children="Recent Viewed" />
        <Button
          type={ButtonEnum.enum_svgImage}
          children={`<svg xmlns="http://www.w3.org/2000/svg" width="17" height="4" viewBox="0 0 17 4" fill="none"><path d="M7.447 1.84067C7.447 2.05794 7.84209 2.23407 8.32946 2.23407C8.81682 2.23407 9.21191 2.05794 9.21191 1.84067C9.21191 1.6234 8.81683 1.44727 8.32946 1.44727C7.84209 1.44727 7.447 1.6234 7.447 1.84067Z" stroke="#CBD5E0" stroke-width="1.76491" stroke-linecap="round" stroke-linejoin="round"/><path d="M1.26927 1.84067C1.26927 2.05794 1.66436 2.23407 2.15172 2.23407C2.63909 2.23407 3.03418 2.05794 3.03418 1.84067C3.03418 1.6234 2.63909 1.44727 2.15172 1.44727C1.66436 1.44727 1.26927 1.6234 1.26927 1.84067Z" stroke="#CBD5E0" stroke-width="1.76491" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.6238 1.84067C13.6238 2.05794 14.0188 2.23407 14.5062 2.23407C14.9936 2.23407 15.3887 2.05794 15.3887 1.84067C15.3887 1.6234 14.9936 1.44727 14.5062 1.44727C14.0188 1.44727 13.6238 1.6234 13.6238 1.84067Z" stroke="#CBD5E0" stroke-width="1.76491" stroke-linecap="round" stroke-linejoin="round"/></svg>`}
        />
      </ST.Navbar>
      <ST.ListBlock>
        {RecentData.map((e) => (
          <Recent
            name={e.name}
            subName={e.subName}
            volume={e.volume}
            day={e.day}
            image={e.image}
            count={e.count}
          />
        ))}
      </ST.ListBlock>
    </ST.Container>
  );
};
export default RecentViewed;
