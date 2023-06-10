import { GridLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div
      className="
        h-[90vh]
        flex 
        flex-col 
        justify-center 
        items-center 
      "
    >
      <GridLoader color="#0071ff" />
    </div>
  );
};

export default Spinner;
