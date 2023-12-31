import {
  FaBookOpen,
  FaBookmark,
  FaRegBookmark,
  FaUserAlt,
} from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import { MdPayment } from "react-icons/md";
import useSelect from "../hooks/useSelect";
import { FcHome } from "react-icons/fc";
import { SiGoogleclassroom } from "react-icons/si";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
  const [select] = useSelect();

  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-white">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">
              <Link
                to="/"
                className="flex items-center justify-center
               text-xl font-bold font-heading"
              >
                <img
                  className="w-12 rounded-full mr-3"
                  src={`https://i.ibb.co/kq9n0wJ/Screenshot-2023-06-09-142041.png`}
                  alt=""
                />
                {/* Logo Here. */}
                <p>CampWonderland</p>
              </Link>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                {isAdmin ? (
                  <>
                    <li>
                      <NavLink to="/dashboard/adminHome">
                        Admin Home
                        <FcHome></FcHome>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/manageClass">
                        Manage Classes
                        <SiGoogleclassroom></SiGoogleclassroom>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/manageUsers">
                        Manage Users
                        <FaUserAlt></FaUserAlt>
                      </NavLink>
                    </li>
                  </>
                ) : isInstructor ? (
                  <>
                    <li>
                      <NavLink to="/dashboard/addClass">
                        Add Class
                        <FaBookOpen></FaBookOpen>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/myClass">
                        My Class
                        <FaBookmark></FaBookmark>
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <NavLink to="/dashboard/selected">
                        My Select Class
                        <FaRegBookmark></FaRegBookmark>
                        <span className="badge badge-secondary">
                          +{select?.length || 0}
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/enrolled">
                        My Enrolled Class
                        <FaBookmark></FaBookmark>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/paymentHistory">
                        Payment History
                        <MdPayment></MdPayment>
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
          {/* Page content here */}

          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200">
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
