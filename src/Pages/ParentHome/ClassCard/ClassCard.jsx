import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useSelect from "../../../hooks/useSelect";

const ClassCard = ({ classs }) => {
  const { _id, image, name, price, instructor, available_seats } = classs;
  const { user } = useContext(AuthContext);
  const [, refetch] = useSelect();
  // const navigate = useNavigate();

  const handleAddToSelect = () => {
    if (user && user.email) {
      const selectClass = {
        selectClassId: _id,
        email: user.email,
        name,
        image,
        price,
        instructor,
      };
      fetch("http://localhost:5000/selects", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(selectClass),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              title: "Successfully Class Select!",
              text: "Do you want to continue",
              icon: "success",
              confirmButtonText: "Ok",
            });
          }
        });
    }
  };

  return (
    <div className="my-10">
      <div className="mx-auto mt-11 w-[400px] transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
        <img
          className="h-48 w-full object-cover object-center"
          src={image}
          alt=""
        />
        <div className="p-4">
          <div className="flex items-center">
            <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
              Instructor Name: {instructor}
            </h2>
            <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
              Class Name: {name}
            </h2>
          </div>

          <div className="flex items-center">
            <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
              Price: ${price}
            </p>
            <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
              Available seats: {available_seats}
            </p>
          </div>
        </div>
        <div>
          <button
            onClick={() => handleAddToSelect(classs)}
            className="btn btn-success mx-auto flex mb-2"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
