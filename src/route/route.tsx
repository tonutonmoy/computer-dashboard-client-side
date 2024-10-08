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
import CheckOut from "../component/Inventory/CheckOut";
import PurchaseInChart from "../component/PurchaseManagement/PurchaseChart";
import PurchaseHistory from "../component/PurchaseManagement/PurchaseHistory";
import Servicing from "../component/ServicingManagement/Servicing";
import ServicingManagement from "../component/ServicingManagement/ServicingManagement";
import MyProductHistory from "../component/UserSection/MyProductHistory";
import SSLPaymentSuccess from "../component/Inventory/SSLPaymentSuccess";
import SSLPaymentFail from "../component/Inventory/SSLPaymentFail";
import SSLPaymentCancel from "../component/Inventory/SSLPaymentCancel";
import Profile from "../component/DashBoard/Profile/Profile";

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
        path: "/dashboard/checkOut/:id",
        element: (
          <RouteProvider>
            <CheckOut />
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
        path: "/dashboard/servicing-management",
        element: (
          <RouteProvider>
            <ServicingManagement />
          </RouteProvider>
        ),
      },
      {
        path: "/dashboard/servicing",
        element: (
          <RouteProvider>
            <Servicing />
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
      {
        path: "/dashboard/purchase-history",
        element: (
          <RouteProvider>
            <PurchaseHistory />
          </RouteProvider>
        ),
      },
      {
        path: "/dashboard/purchase-chart",
        element: (
          <RouteProvider>
            <PurchaseInChart />
          </RouteProvider>
        ),
      },
      {
        path: "/dashboard/my-product-history",
        element: (
          <RouteProvider>
            <MyProductHistory />
          </RouteProvider>
        ),
      },
      {
        path: "/dashboard/profile",
        element: (
          <RouteProvider>
            <Profile />
          </RouteProvider>
        ),
      },
      {
        path: "/dashboard/payment/success",
        element: <SSLPaymentSuccess />,
      },
      {
        path: "/dashboard/payment/fail",
        element: <SSLPaymentFail />,
      },
      {
        path: "/dashboard/payment/cancel",
        element: <SSLPaymentCancel />,
      },
    ],
  },
]);

export default router;
