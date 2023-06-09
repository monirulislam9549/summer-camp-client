import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  const location = useLocation();
  const headerFooterLess =
    location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div>
      {!headerFooterLess && <Navbar></Navbar>}
      <div className="min-h-[calc(100vh-136px)]">
        <Outlet></Outlet>
      </div>
      {!headerFooterLess && <Footer></Footer>}
    </div>
  );
};

export default Main;
