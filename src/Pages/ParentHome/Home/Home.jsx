import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import ExtraSection from "../ExtraSection/ExtraSection";

const Home = () => {
  return (
    <div>
      <>
        <Helmet>
          <title>Summer Camp | Home</title>
        </Helmet>
        <Banner></Banner>
        <PopularInstructors></PopularInstructors>
        <ExtraSection></ExtraSection>
      </>
    </div>
  );
};

export default Home;
