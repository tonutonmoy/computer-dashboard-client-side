import { useGetSinglePurchaseQuery } from "../../redux/features/purchaseApi/purchaseApi";
import { useAppSelector } from "../../redux/hooks";

const MyProductHistory = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { data } = useGetSinglePurchaseQuery(user?.email);

  console.log(data);
  return (
    <div className="w-[90%] mx-auto pb-60">
      <h2 className=" text-[30px] font-semibold text-gray-700 text-center my-10 ">
        My Product History
      </h2>
      <div className="overflow-x-auto">
        <table className="table bg-gray-700 text-white w-full mt-4 border p-10">
          {/* head */}
          <thead>
            <tr className="text-white font-bold text-[15px]">
              <th> Name</th>
              <th>brand</th>

              <th>Capacity</th>
              <th>Model</th>
              <th>Category</th>
              <th>Date</th>
              <th>Color</th>
              <th>Compatibility</th>
              <th>Interface</th>
              <th className=" text-center">Quantity</th>
              <th className=" text-center">Price</th>
            </tr>
          </thead>
          {data?.data?.map((a: Record<string, number>) => (
            <tbody key={a?._id}>
              {/* row 1 */}

              <tr>
                <td>{a?.name}</td>
                <td>{a?.brand}</td>
                <td>{a?.capacity}</td>
                <td>{a?.model}</td>
                <td>{a?.category}</td>

                <td>
                  {a?.Date ? new Date(a.dataAndTime).toLocaleDateString() : ""}
                </td>
                <td>{a?.color}</td>
                <td>{a?.compatibility}</td>
                <td>{a?.interface}</td>
                <td>{a?.quantity}</td>
                <td>{a?.price}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyProductHistory;
