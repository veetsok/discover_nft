import RatingTable from "../../../Components/RatingTable.component.bll";
import WeeklySlider from "../../../Components/WeeklySlider.component.bll";
import HeroHeader from "../../../Libraries/main.library/src/UI_KIT/Cells/HeroHeader";
import Navbar from "../../../Libraries/main.library/src/UI_KIT/Cells/Navbar";
import Marketplace from "../../../Libraries/main.library/src/Widgets/exploreMarketplace.widget";
import * as ST from "../style/style";

const MainPage: React.FC = () => {
  return (
    <ST.Container>
      <Navbar />
      <HeroHeader />
      <WeeklySlider />
      <RatingTable />
      <Marketplace />
    </ST.Container>
  );
};

export default MainPage;
