import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUser = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  //   make user to admin
  const handleMakeAdmin = (user) => {
    fetch(
      `https://summer-school-server-kappa.vercel.app/users/admin/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          toast(`${user.name} is now admin`);
        }
      });
  };
  //  make user to instructor
  const handleMakeInstructor = (user) => {
    fetch(
      `https://summer-school-server-kappa.vercel.app/users/instructor/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          toast(`${user.name} is now instructor`);
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>Summer Camp | Home</title>
      </Helmet>
      <h1>This is All user {users.length}</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    onClick={() => handleMakeAdmin(user)}
                    disabled={user.role === "admin"}
                    className="btn btn-sm"
                  >
                    Make Admin
                  </button>
                  <button
                    onClick={() => handleMakeInstructor(user)}
                    disabled={user.role === "instructor"}
                    className="btn btn-sm"
                  >
                    Make Instructor
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AllUser;
