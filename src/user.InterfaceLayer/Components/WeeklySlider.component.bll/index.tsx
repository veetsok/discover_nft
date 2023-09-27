import React, { useState } from "react";
import * as ST from "./styled";
import Text from "../../Libraries/main.library/src/UI_KIT/Atoms/Text";
import { TextEnum } from "../../Libraries/main.library/src/UI_KIT/Atoms/Text/enum";
import CardItem from "../../Libraries/main.library/src/UI_KIT/Cells/CardItem";
import { cardItems } from "../../Libraries/main.library/src/Widgets/exploreMarketplace.widget/const";
import Button from "../../Libraries/main.library/src/UI_KIT/Atoms/Button";
import { ButtonEnum } from "../../Libraries/main.library/src/UI_KIT/Atoms/Button/enum";

interface WeeklySliderProps {}

const WeeklySlider: React.FC<WeeklySliderProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cardItems.length) % cardItems.length);
  };

  return (
    <ST.Container>
      <Text type={TextEnum.enum_H2Text} children="Weekly - Top NFT" />
      <ST.SlidersBlock>
        {cardItems.map((e) => (
          <ST.SliderWrapper style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
            <CardItem
              key={`SlidersBlock${e.id}`}
              time={e.time}
              title={e.title}
              subTitle={e.subTitle}
              rate={e.rate}
              url={e.url}
            />
          </ST.SliderWrapper>
        ))}
      </ST.SlidersBlock>
      <ST.Slider>
        <Button type={ButtonEnum.enum_leftArrowButton} onClick={prevSlide} />
        <Button type={ButtonEnum.enum_rightArrowButton} onClick={nextSlide} />
      </ST.Slider>
    </ST.Container>
  );
};
export default WeeklySlider;
