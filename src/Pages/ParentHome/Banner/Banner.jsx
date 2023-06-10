import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className="text-center">
      <Carousel autoPlay={true} interval={1500} infiniteLoop={true}>
        <div>
          <img
            src={`https://i.ibb.co/Jr7cxkh/pexels-cottonbro-studio-9654593.jpg`}
          />
        </div>
        <div>
          <img
            src={`https://i.ibb.co/pJ8pbc7/pexels-kampus-production-6482319.jpg`}
          />
        </div>
        <div>
          <img
            src={`https://i.ibb.co/b1nRWBR/pexels-yulianto-poitier-1231365.jpg`}
          />
        </div>
        <div>
          <img
            src={`https://i.ibb.co/DkGJhXR/pexels-roxanne-minnish-8135971.jpg`}
            alt=""
          />
        </div>
        <div>
          <img
            src={`https://i.ibb.co/smb6fq2/pexels-juan-salamanca-61129.jpg`}
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
