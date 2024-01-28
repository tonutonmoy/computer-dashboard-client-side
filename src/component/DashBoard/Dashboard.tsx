import { Link, Outlet } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";

const Dashboard = () => {
  const dispatch = useAppDispatch();

  const logOutHandler = () => {
    dispatch(logout());
  };
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-gray-100 space-y-4  text-base-content">
          <li className=" text-[17px] font-semibold ">
            <Link to="/dashboard">Inventory</Link>
          </li>
          <li className=" text-[17px] font-semibold ">
            <Link to="/dashboard/add-inventory">Add Inventory</Link>
          </li>
          <ul className=" space-y-4">
            <li className=" text-[17px] font-semibold ">
              <Link to="/dashboard/sales-history">Sales History</Link>
            </li>
            <li className=" text-[17px] font-semibold ">
              <Link to="/dashboard/sales-chart">Sales Chart</Link>
            </li>
          </ul>

          <div className="mt-[100px] absolute bottom-[10%] right-[50%]">
            <button
              onClick={logOutHandler}
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              className="inline-block rounded bg-red-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
              logout
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
