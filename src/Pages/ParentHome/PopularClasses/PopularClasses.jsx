import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);
  return (
    <section>
      <SectionTitle
        subTitle={
          " With a variety of exciting themes and expert instructors provide a vibrant  and interactive environment where children can explore their interest, build new skills, and create lasting memories with their peers"
        }
        title={"Our Popular Classes"}
      ></SectionTitle>
    </section>
  );
};

export default PopularClasses;
