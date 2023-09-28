import React, { useState } from "react";
import * as ST from "./styled";
import ArrowButtons from "../ArrowButtons";
import Image from "../../Atoms/Images";
import { ImageEnum } from "../../Atoms/Images/enum";
import { cardItems } from "../../../Widgets/exploreMarketplace.widget/const";

interface HeroHeaderSliderImageProps {}

const HeroHeaderSlider: React.FC<HeroHeaderSliderImageProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cardItems.length - 1 : prevIndex - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cardItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getNextSlideIndex = (currentIndex: number) =>
    (currentIndex + 1) % cardItems.length;

  return (
    <ST.Container>
      <ST.MainBlockItem>
        <ST.ItemImageBlock>
          <Image
            type={ImageEnum.enum_backGroundImage}
            background={cardItems[currentIndex].url}
            alt="Main Item"
          />
        </ST.ItemImageBlock>
      </ST.MainBlockItem>
      <ST.SecondBlockItem>
        <Image
          type={ImageEnum.enum_backGroundImage}
          background={cardItems[getNextSlideIndex(currentIndex)].url}
          alt="Next Slide"
        />
      </ST.SecondBlockItem>
      <ST.ArrowBtn>
        <ArrowButtons onPrev={handlePrevSlide} onNext={handleNextSlide} />
      </ST.ArrowBtn>
    </ST.Container>
  );
};
export default HeroHeaderSlider;
