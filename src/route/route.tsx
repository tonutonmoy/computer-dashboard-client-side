import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../component/DashBoard/Dashboard";
import AllInventory from "../component/Inventory/AllInventory";
import AddInventory from "../component/Inventory/AddInventory";
import EditInventory from "../component/Inventory/EditInventory";

import Registration from "../component/Authentication/Registration";
import Login from "../component/Authentication/Login";
import RouteProvider from "../provider/RouteProvider";

import CouponManagement from "../component/CouponManagement/CouponManagement";
import SalesHistory from "../component/SalesManagement/SalesHistory";
import SalesInChart from "../component/SalesManagement/SalesInChart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },

  {
    path: "/dashboard",
    element: (
      <RouteProvider>
        <Dashboard />
      </RouteProvider>
    ),
    children: [
      {
        path: "/dashboard",

        element: (
          <RouteProvider>
            <AllInventory />,
          </RouteProvider>
        ),
      },
      {
        path: "/dashboard/add-inventory",
        element: (
          <RouteProvider>
            <AddInventory />
          </RouteProvider>
        ),
      },
      {
        path: "/dashboard/single-inventory/:id",
        element: (
          <RouteProvider>
            <EditInventory />
          </RouteProvider>
        ),
      },
      {
        path: "/dashboard/coupon",
        element: (
          <RouteProvider>
            <CouponManagement />
          </RouteProvider>
        ),
      },
      {
        path: "/dashboard/sales-chart",
        element: (
          <RouteProvider>
            <SalesInChart />
          </RouteProvider>
        ),
      },
      {
        path: "/dashboard/sales-history",
        element: (
          <RouteProvider>
            <SalesHistory />
          </RouteProvider>
        ),
      },
    ],
  },
]);

export default router;
