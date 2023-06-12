import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

// const image_hosting_key = import.meta.env.VITE_Image_Upload_token;

const SignUp = () => {
  const navigate = useNavigate();

  const { updateUserProfile, createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photo).then(() => {
          const saveUser = {
            name: data.name,
            email: data.email,
            photo: data.photo,
          };

          fetch("https://summer-school-server-kappa.vercel.app/users", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                navigate("/");
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User created Successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Helmet>
        <title>Summer Camp | Sign Up</title>
      </Helmet>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Sign Up now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-red-500">Name is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-500">Email is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 8,
                      pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    })}
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-500">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-500">Password must be 6 character</p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-500">
                      Password less than 8 character
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-500">
                      Password must have one uppercase, one number and one
                      special character
                    </p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 8,
                      pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    })}
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-500">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-500">Password must be 6 character</p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-500">
                      Password less than 8 character
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-500">
                      Password must have one uppercase, one number and one
                      special character
                    </p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Image</span>
                  </label>
                  <input
                    {...register("photo", { required: true })}
                    type="text"
                    //   placeholder=""
                    className="input input-bordered"
                  />
                  {errors.photo && (
                    <span className="text-red-500">Image is required</span>
                  )}
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </form>
              <p>
                <Link to="/login">Already Have an Account?</Link>
              </p>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
