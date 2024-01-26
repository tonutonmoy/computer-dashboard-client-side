import { useEffect } from "react";
import { useGetInventoryQuery } from "../../redux/features/inventoryApi/inventoryApi";
import {
  setInventoryData,
  setProductId,
} from "../../redux/features/inventoryApi/inventorySlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import InventoryFilterAndSearchBar from "./InventoryFilterAndSearchBar";
import SalesModal from "../SalesManagement/SalesModal";
import { Link } from "react-router-dom";

const AllInventory = () => {
  const { data, isLoading } = useGetInventoryQuery(null, {
    refetchOnMountOrArgChange: true,
  });
  const dispatch = useAppDispatch();
  const { inventoryData, sellProductId } = useAppSelector((e) => e.inventory);

  console.log(sellProductId, "l");
  useEffect(() => {
    dispatch(setInventoryData(data));
  }, [data]);

  if (isLoading) {
    return;
  }

  console.log(inventoryData, "data");

  return (
    <div className="w-[90%] mx-auto pb-60">
      <InventoryFilterAndSearchBar />

      {/* */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
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
              <th> Sell</th>
              <th>Duplicate & Edi</th>
              <th></th>
            </tr>
          </thead>
          {inventoryData?.map((a: Record<string, number>) => (
            <tbody>
              {/* row 1 */}

              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
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
                <td></td>
                <td>
                  <Link
                    to={`/single-inventory/${a?._id}`}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
    </div>
  );
};

export default AllInventory;
