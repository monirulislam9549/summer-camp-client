import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/ParentHome/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import ClassItem from "../Pages/ClassItem/ClassItem";
import MyEnrolledClass from "../Pages/Dashboard/UserHome/MyEnrolledClass";
import MySelectedClass from "../Pages/Dashboard/UserHome/MySelectedClass";
import MyPaymentHistory from "../Pages/Dashboard/UserHome/MyPaymentHistory";
import PrivateRoute from "./PrivateRoute";
import AllUser from "../Pages/Dashboard/AdminHome/AllUser";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "classes",
        element: <ClassItem></ClassItem>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      //  user/student home
      {
        path: "selected",
        element: <MySelectedClass></MySelectedClass>,
      },
      {
        path: "enrolled",
        element: <MyEnrolledClass></MyEnrolledClass>,
      },
      {
        path: "payment",
        element: <MyPaymentHistory></MyPaymentHistory>,
      },
      {
        path: "manageUsers",
        element: <AllUser></AllUser>,
      },
    ],
  },
]);
