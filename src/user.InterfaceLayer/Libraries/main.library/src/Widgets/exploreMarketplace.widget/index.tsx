import React from "react";
import * as ST from "./styled";
import Text from "../../UI_KIT/Atoms/Text";
import { TextEnum } from "../../UI_KIT/Atoms/Text/enum";
import Button from "../../UI_KIT/Atoms/Button";
import { ButtonEnum } from "../../UI_KIT/Atoms/Button/enum";
import CardItem from "../../UI_KIT/Cells/CardItem";
import { cardItems } from "./const";

interface MarketplaceProps {}

const Marketplace: React.FC<MarketplaceProps> = () => {
  const array = [
    { id: 1, text: "All", icon: "" },
    {
      id: 2,
      text: "Category",
      icon: "assets/icons/category/Collection.svg",
    },
    {
      id: 3,
      text: "Collection",
      icon: "assets/icons/category/Dollar.svg",
    },
    {
      id: 4,
      text: "Price",
      icon: "assets/icons/category/List.svg",
    },
  ];

  return (
    <ST.Container>
      <Text type={TextEnum.enum_H2Text} children="Explore Marketplace" />
      <ST.CategoryFilter>
        {array.map((e) => (
          <Button key={`CategoryFilter ${e.id}`} type={ButtonEnum.enum_whiteButton}>
            <img src={e.icon} />
            <Text type={TextEnum.enum_H5Text} children={e.text} />
          </Button>
        ))}
      </ST.CategoryFilter>

      <ST.ExploreItems>
        {cardItems.map((e) => (
          <ST.ExploreItem>
            <CardItem
              key={`ExploreItemsCards${e.id}`}
              url={e.url}
              time={e.time}
              title={e.title}
              subTitle={e.subTitle}
              rate={e.rate}
            />
          </ST.ExploreItem>
        ))}
      </ST.ExploreItems>

      <ST.ExploreAll>
        <Button type={ButtonEnum.enum_Explore} children="Explore All" />
      </ST.ExploreAll>
    </ST.Container>
  );
};
export default Marketplace;
