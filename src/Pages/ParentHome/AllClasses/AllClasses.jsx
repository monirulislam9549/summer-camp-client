import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import ClassCard from "../ClassCard/ClassCard";

const AllClasses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
        // console.log(data);
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {classes.map((classs) => (
          <ClassCard classs={classs} key={classs._id}></ClassCard>
        ))}
      </div>
    </section>
  );
};

export default AllClasses;
