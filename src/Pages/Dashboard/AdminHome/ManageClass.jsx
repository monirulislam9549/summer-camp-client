import axios from "axios";
import { useEffect, useState } from "react";

const ManageClass = () => {
  const [allClasses, setAllClasses] = useState([]);
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get("http://localhost:5000/classes");
        const data = response.data;
        setAllClasses(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchClasses();
  }, []);
  return (
    <div>
      This is manage class
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>#</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available seats</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {allClasses.map((data, index) => (
              <tr key={data._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded">
                      <img src={data.image} />
                    </div>
                  </div>
                </td>
                <td>{data.name}</td>
                <td>{data.instructor}</td>
                <td>{data.email}</td>
                <td>{data.available_seats}</td>
                <td>{data.price}</td>
                <td>
                  <button className="btn btn-sm">Approve</button>
                  <button className="btn btn-sm">Deny</button>
                  <button className="btn btn-sm">Feedback</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClass;
