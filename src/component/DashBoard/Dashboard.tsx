import {  Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  console.log(user?.role, "role");


  const logOutHandler = () => {
    dispatch(logout());
  };
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle"  checked={isOpen}
          onChange={toggleSidebar} />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label
            htmlFor="my-drawer-2"
            className="align-middle select-none btn-outline font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-5  rounded-full bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-blue-500/90 via-black to-blue-500/90 duration-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none lg:hidden  fixed top-3 left-3"
          >
            Menu
          </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <Sidebar logOutHandler={logOutHandler} setIsOpen={setIsOpen} user={user}/>
        {isOpen && (
            <label
              htmlFor="my-drawer-2"
              className=" left-3  top-3 hover:bg-red-500  align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-3 rounded-full bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-red-500/90 via-black to-red-500/90  duration-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none lg:hidden fixed "
            >
              x
            </label>
          )}
      </div>
    </div>
  );
};

export default Dashboard;
