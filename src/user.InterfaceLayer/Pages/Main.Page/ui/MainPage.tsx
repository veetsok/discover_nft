import WeeklySlider from "../../../Components/WeeklySlider";
import HeroHeader from "../../../Libraries/main.library/src/UI_KIT/Cells/HeroHeader";
import Navbar from "../../../Libraries/main.library/src/UI_KIT/Cells/Navbar";
import * as ST from "../style/style";

const MainPage: React.FC = () => {
  return (
    <ST.Container>
      <Navbar />
      <HeroHeader />
      <WeeklySlider />
    </ST.Container>
  );
};

export default MainPage;
