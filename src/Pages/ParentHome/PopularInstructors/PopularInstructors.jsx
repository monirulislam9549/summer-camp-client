import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import InstructorsCard from "../InstructorsCard/InstructorsCard";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  fetch("http://localhost:5000/instructors")
    .then((res) => res.json())
    .then((data) => setInstructors(data));
  return (
    <section>
      <SectionTitle
        subTitle={
          "With a diverse range of skills and a dedication to providing exceptional experiences at the summer camp ensures that campers receive top-notch instruction and mentorship from industry-leading experts, fostering personal growth and unforgettable memories."
        }
        title={"Our Popular Instructors "}
      ></SectionTitle>
      <div>
        {instructors.map((instructor) => (
          <InstructorsCard
            key={instructor._id}
            instructor={instructor}
          ></InstructorsCard>
        ))}
      </div>
    </section>
  );
};

export default PopularInstructors;
