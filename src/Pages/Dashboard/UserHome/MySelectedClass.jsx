import { Helmet } from "react-helmet-async";
import useSelect from "../../../hooks/useSelect";
import { FcFullTrash } from "react-icons/fc";
import { MdPayment } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MySelectedClass = () => {
  const [select, refetch] = useSelect();

  const handleDelete = (item) => {
    Swal.fire({
      title: `Are you sure want to delete ${item.name}`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/selects/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Summer Camp | Selected Class</title>
      </Helmet>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-slate-400">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Instructor</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {select.map((item, index) => (
              <tr key={item._id} className="hover">
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>{item.instructor}</td>
                <th>
                  <Link to="/dashboard/payment">
                    <button className="btn btn-ghost btn-xs">
                      <MdPayment></MdPayment>
                      Pay
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost btn-md"
                  >
                    <FcFullTrash size={30}></FcFullTrash>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedClass;
