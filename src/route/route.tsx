import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../component/DashBoard/Dashboard";
import AllInventory from "../component/Inventory/AllInventory";
import AddInventory from "../component/Inventory/AddInventory";
import EditInventory from "../component/Inventory/EditInventory";
import SalesHistory from "../component/SalesManagement/SalesHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <AllInventory />,
      },
      {
        path: "/add-inventory",
        element: <AddInventory />,
      },
      {
        path: "/single-inventory/:id",
        element: <EditInventory />,
      },
      {
        path: "/sales-history",
        element: <SalesHistory />,
      },
    ],
  },
]);

export default router;
