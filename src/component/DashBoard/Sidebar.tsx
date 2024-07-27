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
              className="py-2 px-3 rounded-lg hover:bg-red-500 border-white bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-red-500/90 via-black to-red-500/90 text-white hover:border-white 
                text-[17px] font-[500]"
            >
              Logout
            </button>
          </div>
        </ul>
    </div>
  );
};

export default Sidebar;