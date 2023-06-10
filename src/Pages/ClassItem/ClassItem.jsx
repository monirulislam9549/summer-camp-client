import { Helmet } from "react-helmet-async";
import AllClasses from "../ParentHome/AllClasses/AllClasses";

const ClassItem = () => {
  return (
    <div>
      <>
        <Helmet>
          <title>Summer Camp | Classes</title>
        </Helmet>
        <AllClasses></AllClasses>
      </>
    </div>
  );
};

export default ClassItem;
