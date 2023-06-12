import useInstructorClass from "../../../hooks/useInstructorClass";

const MyClass = () => {
  const [classes] = useInstructorClass();

  return (
    <div>
      <h1>This is all my class</h1>

      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Status</th>
              <th>Total Enrolled Students</th>
              <th>Feedback</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((data, index) => (
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
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <button className="btn btn-sm">FeedBack</button>
                </td>
                <td>
                  <button className="btn btn-sm">Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClass;
