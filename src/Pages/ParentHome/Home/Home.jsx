import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import ExtraSection from "../ExtraSection/ExtraSection";
import { useScroll, motion } from "framer-motion";

const Home = () => {
  const { scrollYProgress } = useScroll;
  return (
    <div>
      <>
        <Helmet>
          <title>Summer Camp | Home</title>
        </Helmet>

        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <Banner></Banner>
        <PopularInstructors></PopularInstructors>
        <ExtraSection></ExtraSection>
      </>
    </div>
  );
};

export default Home;
