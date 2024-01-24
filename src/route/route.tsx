import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../component/DashBoard/Dashboard";
import AllInventory from "../component/Inventory/AllInventory";
import AddInventory from "../component/Inventory/AddInventory";

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
    ],
  },
]);

export default router;
