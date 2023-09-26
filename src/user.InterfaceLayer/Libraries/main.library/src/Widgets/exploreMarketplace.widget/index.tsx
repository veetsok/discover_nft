import React from "react";
import * as ST from "./styled";
import Text from "../../UI_KIT/Atoms/Text";
import { TextEnum } from "../../UI_KIT/Atoms/Text/enum";
import Button from "../../UI_KIT/Atoms/Button";
import { ButtonEnum } from "../../UI_KIT/Atoms/Button/enum";

interface MarketplaceProps {}

const Marketplace: React.FC<MarketplaceProps> = () => {
  const array = [
    { id: 1, text: "All", icon: "" },
    {
      id: 2,
      text: "Category",
      icon: "/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/category/Collection.svg",
    },
    {
      id: 3,
      text: "Collection",
      icon: "/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/category/Dollar.svg",
    },
    {
      id: 4,
      text: "Price",
      icon: "/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/category/List.svg",
    },
  ];

  return (
    <>
      <Text type={TextEnum.enum_H2Text} children="Explore Marketplace" />
      <ST.CategoryFilter>
        {array.map((e) => (
          <Button key={`CategoryFilter ${e.id}`} type={ButtonEnum.enum_whiteButton}>
            {e.text}
            <img src={e.icon} />
          </Button>
        ))}
      </ST.CategoryFilter>
    </>
  );
};
export default Marketplace;
