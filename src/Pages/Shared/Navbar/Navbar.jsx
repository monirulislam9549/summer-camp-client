import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import useSelect from "../../../hooks/useSelect";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [select] = useSelect();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="flex flex-wrap place-items-center bg-opacity-30 z-10  bg-black text-white">
        <section className="mx-auto">
          {/* <!-- navbar --> */}
          <nav className="flex justify-between bg-gray-900 text-white w-screen ">
            <div className="px-5 xl:px-12 py-4 flex w-full items-center">
              <Link
                to="/"
                className="flex items-center justify-center
               text-3xl font-bold font-heading"
              >
                <img
                  className="w-12 rounded-full mr-3"
                  src={`https://i.ibb.co/kq9n0wJ/Screenshot-2023-06-09-142041.png`}
                  alt=""
                />
                {/* Logo Here. */}
                <p>CampWonderland</p>
              </Link>

              {/* <!-- Nav Links --> */}
              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li>
                  <Link to="/" className="hover:text-gray-200">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-200">Instructors</Link>
                </li>
                <li>
                  <Link to="/classes" className="hover:text-gray-200">
                    Classes
                    <div className="badge badge-secondary">
                      +{select?.length || 0}
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/selected"
                    className="hover:text-gray-200"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-200">Contact Us</Link>
                </li>
                <li>
                  {user ? (
                    <>
                      <Link onClick={handleLogOut}>Log Out</Link>
                    </>
                  ) : (
                    <>
                      <Link to="/login" className="hover:text-gray-200">
                        Login
                      </Link>
                    </>
                  )}
                </li>
              </ul>

              <div className="hidden xl:flex space-x-5 items-center">
                {/* <!-- Sign In / Register      --> */}
                <div className="flex items-center hover:text-gray-200">
                  <p className="text-white">{user?.displayName}</p>
                  <div className="avatar ml-4">
                    <div className="w-12 rounded-full">
                      <img src={user?.photoURL} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Responsive navbar --> */}

            <Link className="navbar-burger self-center mr-12 xl:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Link>
          </nav>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
