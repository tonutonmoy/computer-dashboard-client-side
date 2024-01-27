import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../component/DashBoard/Dashboard";
import AllInventory from "../component/Inventory/AllInventory";
import AddInventory from "../component/Inventory/AddInventory";
import EditInventory from "../component/Inventory/EditInventory";

import Registration from "../component/Authentication/Registration";
import Login from "../component/Authentication/Login";
import RouteProvider from "../provider/RouteProvider";

import SalesHistory from "../component/SalesManagement/SalesHistory";
import SalesInChart from "../component/SalesManagement/SalesInChart";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RouteProvider>
        <Dashboard />
      </RouteProvider>
    ),
    children: [
      {
        path: "/",
        element: (
          <RouteProvider>
            <AllInventory />,
          </RouteProvider>
        ),
      },
      {
        path: "/add-inventory",
        element: (
          <RouteProvider>
            <AddInventory />
          </RouteProvider>
        ),
      },
      {
        path: "/single-inventory/:id",
        element: (
          <RouteProvider>
            <EditInventory />
          </RouteProvider>
        ),
      },
      {
        path: "/sales-chart",
        element: (
          <RouteProvider>
            <SalesInChart />
          </RouteProvider>
        ),
      },
      {
        path: "/sales-history",
        element: (
          <RouteProvider>
            <SalesHistory />
          </RouteProvider>
        ),
      },
    ],
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
