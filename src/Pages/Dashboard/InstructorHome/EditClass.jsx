import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const EditClass = () => {
  const { id } = useParams();
  const handleEdit = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const available_seats = form.seats.value;
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
        console.log(data);
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Updated  Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
        // form.reset();
      });
  };

  return (
    <div>
      <h1>Edit Class </h1>
      <form onSubmit={handleEdit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
        <div className="form-control mt-6">
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
