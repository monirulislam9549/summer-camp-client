import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import ClassCard from "../ClassCard/ClassCard";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {
  return (
    <div>
      <>
        <Helmet>
          <title>Summer Camp | Home</title>
        </Helmet>
        <Banner></Banner>
        <PopularClasses></PopularClasses>
        <PopularInstructors></PopularInstructors>
      </>
    </div>
  );
};

export default Home;
