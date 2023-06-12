import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const EditClass = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const handleEdit = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = parseFloat(form.price.value);
    const available_seats = parseFloat(form.seats.value);
    const updateData = {
      price,
      available_seats,
    };
    fetch(`http://localhost:5000/editClasses/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          navigate("/dashboard/myClass");
          Swal.fire({
            title: "Success!",
            text: "Updated  Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <h1 className="text-center mb-10 text-3xl font-bold">Edit Class </h1>
      <form onSubmit={handleEdit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              name="price"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Seats</span>
            </label>
            <input
              type="number"
              name="seats"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control mt-6 w-1/3 mx-auto">
          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="Update Class"
          />
        </div>
      </form>
    </div>
  );
};

export default EditClass;
