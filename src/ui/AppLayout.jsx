import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import ButtonGradient from "../assets/svg/ButtonGradient";

const AppLayout = () => {
  return (
    <>
      <div className=" pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Outlet />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default AppLayout;
