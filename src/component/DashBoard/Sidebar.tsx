import { Link, useLocation } from "react-router-dom";

const Sidebar = ({logOutHandler,user,setIsOpen}:any) => {
  const location = useLocation();
  return (
    <div className=" relative h-full">
      <ul className="menu p-4 w-60 md:w-80 min-h-full  bg-gradient-to-b from-gray-700 to-gray-500 bg-gradient-to-r space-y-4  text-gray-100 pt-16 lg:pt-10">
          <ul className=" space-y-4">
           
              <Link  onClick={() => setIsOpen(false)} to="/dashboard"    className={`flex items-center text-white  px-3 py-2 font-semibold text-[17px]  ${
                  location?.pathname === "/dashboard" &&
                  " bg-blue-300/70  rounded-xl"
                }`}>Inventory</Link>
           
            {user?.role === "seller" && (
              
                <Link  onClick={() => setIsOpen(false)} to="/dashboard/add-inventory" className={`flex items-center text-white  px-3 py-2 font-semibold text-[17px]  ${
                  location?.pathname === "/dashboard/add-inventory" &&
                  " bg-blue-300/70  rounded-xl"
                }`}>Add Inventory</Link>
           
            )}
          </ul>
          {user?.role === "seller" && (
            <ul className=" space-y-4">
         
                <Link  onClick={() => setIsOpen(false)} to="/dashboard/coupon" className={`flex items-center text-white  px-3 py-2 font-semibold text-[17px]  ${
                  location?.pathname === "/dashboard/coupon" &&
                  " bg-blue-300/70  rounded-xl"
                }`}> Coupon Management</Link>
              
            </ul>
          )}
          <ul className=" space-y-4">
            {user?.role === "buyer" && (
              
                <Link  onClick={() => setIsOpen(false)} to="/dashboard/servicing" className={`flex items-center text-white  px-3 py-2 font-semibold text-[17px]  ${
                  location?.pathname === "/dashboard/servicing" &&
                  " bg-blue-300/70  rounded-xl"
                }`}> Servicing</Link>
              
            )}
            {user?.role === "seller" && (
              
                <Link  onClick={() => setIsOpen(false)}   to="/dashboard/servicing-management" className={`flex items-center text-white  px-3 py-2 font-semibold text-[17px]  ${
                  location?.pathname === "/dashboard/servicing-management" &&
                  " bg-blue-300/70  rounded-xl"
                }`}>
                  {" "}
                  Service Management
                </Link>
              
            )}
          </ul>
          {user?.role === "seller" && (
            <ul className=" space-y-4">
             
                <Link  onClick={() => setIsOpen(false)} to="/dashboard/sales-history" className={`flex items-center text-white  px-3 py-2 font-semibold text-[17px]  ${
                  location?.pathname === "/dashboard/sales-history" &&
                  " bg-blue-300/70  rounded-xl"
                }`}>Sales History</Link>
           
             
                <Link  onClick={() => setIsOpen(false)} to="/dashboard/sales-chart" className={`flex items-center text-white  px-3 py-2 font-semibold text-[17px]  ${
                  location?.pathname === "/dashboard/sales-chart" &&
                  " bg-blue-300/70  rounded-xl"
                }`}>Sales Chart</Link>
              
            </ul>
          )}
          {user?.role === "seller" && (
            <ul className=" space-y-4">
              
                <Link  onClick={() => setIsOpen(false)} to="/dashboard/purchase-history" className={`flex items-center text-white  px-3 py-2 font-semibold text-[17px]  ${
                  location?.pathname === "/dashboard/purchase-history" &&
                  " bg-blue-300/70  rounded-xl"
                }`}>Purchase History</Link>
              
             
                <Link  onClick={() => setIsOpen(false)} to="/dashboard/purchase-chart" className={`flex items-center text-white  px-3 py-2 font-semibold text-[17px]  ${
                  location?.pathname === "/dashboard/purchase-chart" &&
                  " bg-blue-300/70  rounded-xl"
                }`}>Purchase Chart</Link>
              
            </ul>
          )}

          {user?.role === "buyer" && (
            <ul className=" space-y-4">
              
                <Link  onClick={() => setIsOpen(false)} to="/dashboard/my-product-history" className={`flex items-center text-white  px-3 py-2 font-semibold text-[17px]  ${
                  location?.pathname === "/dashboard/my-product-history" &&
                  " bg-blue-300/70  rounded-xl"
                }`}>
                  My Product History
                </Link>
            
            </ul>
          )}

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
  );
};

export default Sidebar;