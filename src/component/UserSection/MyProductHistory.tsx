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

      {data?.data?.length > 0 ? (
        <section>
          <div className="overflow-x-auto">
            <table className="table bg-gray-700 text-white w-full mt-4 border p-10">
              {/* head */}
              <thead>
                <tr className="text-white font-bold text-[15px]">
                  <th> Name</th>
                  <th>brand</th>

                  <th>Capacity</th>

                  <th>Category</th>
                  <th>Date</th>
                  <th>Color</th>
                  <th>Compatibility</th>
                  <th>Interface</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              {data?.data?.map((a: Record<string, number>) => (
                <tbody key={a?._id}>
                  {/* row 1 */}

                  <tr>
                    <td>{a?.name}</td>
                    <td>{a?.brand}</td>
                    <td>{a?.capacity}</td>

                    <td>{a?.category}</td>

                    <td>
                      {a?.date ? new Date(a?.date).toLocaleDateString() : ""}
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
        </section>
      ) : (
        <section>
          <h3 className=" text-[20px] font-[500] text-red-500 text-center">
            No data available
          </h3>
        </section>
      )}
    </div>
  );
};

export default MyProductHistory;
