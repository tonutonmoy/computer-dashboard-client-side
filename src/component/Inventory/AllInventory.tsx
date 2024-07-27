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
import Loging from "../../sharedComponent/Loging";

const AllInventory = () => {
  const { user } = useAppSelector((state) => state.auth);
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
    return <Loging/>;
  }

  const handleCheckboxChange = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    } else {
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

      {user?.role === "buyer" && (
        <section>
          <UserInventory inventoryData={inventoryData} />
        </section>
      )}
      {user?.role === "seller" && (
        <section>
          {selectedIds?.length > 0 ? (
            <div>
              <button
                onClick={() => deleteFunction(selectedIds)}
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
               className="py-1 px-3 rounded-lg btn-outline border-white bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-red-500/90 via-black to-red-500/90 text-white hover:border-white 
                text-[17px] font-[500]"
              >
                Delete {selectedIds?.length}{" "}
              </button>
            </div>
          ) : (
            ""
          )}
          <div className="overflow-x-auto ">
            <table className="table border-none bg-gradient-to-b from-gray-700 to-gray-600 bg-gradient-to-r text-white w-full mt-4 border p-10 ">
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
                      <div className="py-2 w-full px-3 flex justify-center   rounded-lg  hover:bg-blue-500 border-white bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-blue-500/90 via-black to-blue-500/90 text-white hover:border-white 
                text-[15px] font-[500]" onClick={() => dispatch(setProductId(a?._id))}>
                        <SalesModal />
                      </div>
                    </td>

                    <td>
                      <Link
                        to={`/dashboard/single-inventory/${a?._id}`}
                          className="py-2  justify-center rounded-lg  inline-flex w-full border-white bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-red-500/90 hover:bg-red-500 via-black to-red-500/90 text-white hover:border-white 
                text-[17px] font-[500]"
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
      )}
    </div>
  );
};

export default AllInventory;
