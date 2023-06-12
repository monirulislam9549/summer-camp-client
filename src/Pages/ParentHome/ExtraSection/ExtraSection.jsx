import image1 from "../../../assets/image1.jpg";
import image2 from "../../../assets/image2.jpg";
import image3 from "../../../assets/image3.jpg";
import image4 from "../../../assets/image4.png";
import image5 from "../../../assets/image5.jpg";
import { FaBasketballBall, FaHiking, FaSwimmer } from "react-icons/fa";
import { IoIosFootball } from "react-icons/io";
import SectionTitle from "../../../components/SectionTitle";
const ExtraSection = () => {
  return (
    <div>
      <SectionTitle
        title={"Our Latest Classes"}
        subTitle={"with Experienced Teacher "}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
        <div className="relative inline-block mx-auto mt-11 w-[400px]">
          <img src={image1} alt="Image" className="block h-auto " />
          <div className="absolute top-0 left-0 w-full h-full opacity-0 bg-black bg-opacity-50 flex flex-col items-center justify-center transition-opacity duration-300 hover:opacity-100">
            <div className="bg-blue-500 w-full h-80 opacity-50 flex items-center justify-center flex-row">
              <FaSwimmer fill="#D1A054" className="w-16 h-auto "></FaSwimmer>
              <p className="text-white font-bold">Enhancing Swimming </p>
            </div>
          </div>
        </div>
        <div className="relative inline-block mx-auto mt-11 w-[400px]">
          <img src={image2} alt="Image" className="block h-auto" />
          <div className="absolute top-0 left-0 w-full h-full opacity-0 bg-black bg-opacity-50 flex flex-col items-center justify-center transition-opacity duration-300 hover:opacity-100">
            <div className="bg-blue-500 w-full h-80 opacity-50 flex items-center justify-center flex-row">
              <IoIosFootball
                fill="#D1A054"
                className="w-16 h-auto "
              ></IoIosFootball>
              <p className="text-white font-bold">Enhancing Swimming </p>
            </div>
          </div>
        </div>
        <div className="relative inline-block mx-auto mt-11 w-[400px]">
          <img src={image3} alt="Image" className="block h-auto" />
          <div className="absolute top-0 left-0 w-full h-full opacity-0 bg-black bg-opacity-50 flex flex-col items-center justify-center transition-opacity duration-300 hover:opacity-100">
            <div className="bg-blue-500 w-full h-80 opacity-50 flex items-center justify-center flex-row">
              <FaSwimmer fill="#D1A054" className="w-16 h-auto "></FaSwimmer>
              <p className="text-white font-bold">Enhancing Swimming </p>
            </div>
          </div>
        </div>
        <div className="relative inline-block mx-auto mt-11 w-[400px]">
          <img src={image4} alt="Image" className="block h-auto" />
          <div className="absolute top-0 left-0 w-full h-full opacity-0 bg-black bg-opacity-50 flex flex-col items-center justify-center transition-opacity duration-300 hover:opacity-100">
            <div className="bg-blue-500 w-full h-80 opacity-50 flex items-center justify-center flex-row">
              <FaHiking fill="#D1A054" className="w-16 h-auto "></FaHiking>
              <p className="text-white font-bold">Enhancing Swimming </p>
            </div>
          </div>
        </div>
        <div className="relative inline-block mx-auto mt-11 w-[400px]">
          <img src={image5} alt="Image" className="block h-auto" />
          <div className="absolute top-0 left-0 w-full h-full opacity-0 bg-black bg-opacity-50 flex flex-col items-center justify-center transition-opacity duration-300 hover:opacity-100">
            <div className="bg-blue-500 w-full h-80 opacity-50 flex items-center justify-center flex-row">
              <FaBasketballBall
                fill="#D1A054"
                className="w-16 h-auto "
              ></FaBasketballBall>
              <p className="text-white font-bold">Enhancing Swimming </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
