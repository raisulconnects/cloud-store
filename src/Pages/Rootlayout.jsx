import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import { useSelector } from "react-redux";

export default function Rootlayout() {
  useSelector((state) => state.cart);

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
