import { useEffect } from "react";
import { useGetInventoryQuery } from "../../redux/features/inventoryApi/inventoryApi";
import { setInventoryData } from "../../redux/features/inventoryApi/inventorySlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import InventoryFilterAndSearchBar from "./InventoryFilterAndSearchBar";

const AllInventory = () => {
  const { data, isLoading } = useGetInventoryQuery(null);
  const dispatch = useAppDispatch();
  const { inventoryData } = useAppSelector((e) => e.inventory);

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
              <th></th>
            </tr>
          </thead>
          {inventoryData?.map((a: Record<string, number>) => (
            <tbody key={a?._id}>
              {/* row 1 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>

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
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllInventory;
