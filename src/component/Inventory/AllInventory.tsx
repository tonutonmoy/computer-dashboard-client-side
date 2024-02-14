/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import {
  useDeleteInventoryMutation,
  useGetInventoryQuery,
} from "../../redux/features/inventoryApi/inventoryApi";
import {
  setInventoryData,
  setProductId,
} from "../../redux/features/inventoryApi/inventorySlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import InventoryFilterAndSearchBar from "./InventoryFilterAndSearchBar";
import SalesModal from "../SalesManagement/SalesModal";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { logout } from "../../redux/features/auth/authSlice";
import UserInventory from "./UserInventory";

const AllInventory = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const { data, isLoading } = useGetInventoryQuery(null, {
    refetchOnMountOrArgChange: true,
  });
  const dispatch = useAppDispatch();
  const { inventoryData } = useAppSelector((e) => e.inventory);
  const [deleteFunction, { data: deleteData }] = useDeleteInventoryMutation();

  useEffect(() => {
    dispatch(setInventoryData(data));
  }, [data]);

  if (deleteData?.data) {
    window.location.reload();
  }

  if (isLoading) {
    return;
  }
  console.log(data, "allInventory");

  const handleCheckboxChange = (id: string) => {
    // Check if the ID is already in the array
    if (selectedIds.includes(id)) {
      // If yes, remove it
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    } else {
      // If not, add it
      setSelectedIds([...selectedIds, id]);
    }
  };

  if (data?.errorMessage === "Unauthorized") {
    console.log("hello");
    dispatch(logout());
    window.location.reload();
  }

  return (
    <div className="w-[90%] mx-auto pb-60">
      <InventoryFilterAndSearchBar />

      <section>
        <UserInventory inventoryData={inventoryData} />
      </section>

      <section>
        {selectedIds?.length > 0 ? (
          <div>
            <button
              onClick={() => deleteFunction(selectedIds)}
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              className="inline-block bg-red-500 rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
              Delete {selectedIds?.length}{" "}
            </button>
          </div>
        ) : (
          ""
        )}
        <div className="overflow-x-auto">
          <table className="table bg-gray-700 text-white w-full mt-4 border p-10">
            {/* head */}
            <thead>
              <tr className="text-white font-bold text-[15px]">
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Brand</th>
                <th>Capacity</th>
                <th>Category</th>
                <th>Color</th>
                <th>Compatibility</th>
                <th>Condition</th>
                <th>Interface</th>
                <th>Quantity</th>
                <th className=" text-center"> Sell</th>
                <th>Duplicate & Edi</th>
              </tr>
            </thead>
            {inventoryData?.map((a: Record<string, number>) => (
              <tbody>
                {/* row 1 */}

                <tr>
                  <th>
                    <label>
                      <input
                        type="checkbox"
                        className="checkbox  bg-gray-200"
                        checked={selectedIds.includes(String(a?._id))}
                        onChange={() =>
                          handleCheckboxChange(a?._id?.toString())
                        }
                      />
                    </label>
                  </th>

                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        {a?.image && typeof a.image === "string" && (
                          <img src={a.image} alt="Product" />
                        )}
                      </div>
                    </div>
                  </td>
                  <td>{a?.name}</td>
                  <td>{a?.price}</td>
                  <td>{a?.brand}</td>
                  <td>{a?.capacity}</td>
                  <td>{a?.category}</td>
                  <td>{a?.color}</td>
                  <td>{a?.compatibility}</td>
                  <td>{a?.condition}</td>
                  <td>{a?.interface}</td>
                  <td>{a?.quantity}</td>
                  <td>
                    <div onClick={() => dispatch(setProductId(a?._id))}>
                      <SalesModal />
                    </div>
                  </td>

                  <td>
                    <Link
                      to={`/dashboard/single-inventory/${a?._id}`}
                      className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </Link>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>

        <ToastContainer />
      </section>
    </div>
  );
};

export default AllInventory;
