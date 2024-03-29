import RatingTable from "../../../Components/RatingTable.component.bll";
import WeeklySlider from "../../../Components/WeeklySlider.component.bll";
import HeroHeader from "../../../Libraries/main.library/src/UI_KIT/Cells/HeroHeader";
import Navbar from "../../../Libraries/main.library/src/UI_KIT/Cells/Navbar";
import Banner from "../../../Libraries/main.library/src/Widgets/banner.widget";
import Marketplace from "../../../Libraries/main.library/src/Widgets/exploreMarketplace.widget";
import Footer from "../../../Libraries/main.library/src/Widgets/footer.widget";
import Unleash from "../../../Libraries/main.library/src/Widgets/unleash.widget";
import * as ST from "../style/style";

const MainPage: React.FC = () => {

  return (
    <>
      <ST.Container>
        <Navbar />
        <HeroHeader />
      </ST.Container>
      <ST.Backgroud>
        <WeeklySlider />
      </ST.Backgroud>
      <ST.Container>
        <RatingTable />
        <Marketplace />
        <Unleash />
        <Banner />
      </ST.Container>
      <ST.Black>
        <ST.Container>
          <Footer />
        </ST.Container>
      </ST.Black>
    </>
  );
};

export default MainPage;
