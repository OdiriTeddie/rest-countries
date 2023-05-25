import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default SharedLayout;
