import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/ParentHome/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import ClassItem from "../Pages/ClassItem/ClassItem";
import MyEnrolledClass from "../Pages/Dashboard/UserHome/MyEnrolledClass";
import MySelectedClass from "../Pages/Dashboard/UserHome/MySelectedClass";

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
    element: <Dashboard></Dashboard>,
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
    ],
  },
]);
