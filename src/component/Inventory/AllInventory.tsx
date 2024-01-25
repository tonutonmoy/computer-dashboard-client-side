import { useGetInventoryQuery } from "../../redux/features/inventoryApi/inventoryApi";
import InventoryFilterAndSearchBar from "./InventoryFilterAndSearchBar";

const AllInventory = () => {
  const { data, isLoading } = useGetInventoryQuery(null);

  if (isLoading) {
    return;
  }
  console.log(data);
  return (
    <div className="w-[90%] mx-auto">
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
          {data?.data?.map((a: Record<string, number>) => (
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
