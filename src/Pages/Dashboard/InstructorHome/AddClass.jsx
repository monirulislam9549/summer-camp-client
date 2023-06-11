import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddclassName = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          const imageLink = imageData.data.display_url;
          const { name, price, instructor, available_seats, email } = data;
          console.log(data);
          const classItem = {
            image: imageLink,
            name,
            price: parseFloat(price),
            instructor,
            available_seats,
            email,
          };
          console.log(classItem);
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>Summer Camp | Add className</title>
      </Helmet>

      <div className="max-w-2xl mx-auto bg-white p-16">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-6 mb-6 lg:grid-cols-2">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Class Name
              </label>
              <select
                {...register("name", { required: true })}
                className="select select-primary w-full max-w-xs "
              >
                <option>What is the best TV show?</option>
                <option>Game of Thrones</option>
                <option>Lost</option>
                <option>Breaking Bad</option>
                <option>Walking Dead</option>
              </select>
            </div>
            <div>
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Instructor Name
              </label>
              <input
                {...register("instructor", { required: true })}
                type="text"
                placeholder="Type here"
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Instructor Email
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Type here"
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Price
              </label>
              <input
                {...register("price", { required: true })}
                type="text"
                placeholder="Type here"
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Available Seats
              </label>
              <input
                {...register("available_seats", { required: true })}
                type="text"
                placeholder="Type here"
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Images
              </label>
              <input
                {...register("image", { required: true })}
                type="file"
                className="file-input file-input-bordered file-input-primary w-full max-w-xs"
              />
            </div>
          </div>

          <div className="flex">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddclassName;
