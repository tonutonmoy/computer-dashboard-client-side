/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  useDeleteCouponMutation,
  useGetCouponQuery,
} from "../../redux/features/couponApi/couponApi";

const AllCoupon = () => {
  const { data } = useGetCouponQuery(null);
  const [deleteCouponFunction] = useDeleteCouponMutation();

  const deleteHandler = async (id: string) => {
    await deleteCouponFunction(id);
  };

  return (
    <div className="w-[90%] mx-auto pb-60">
      <div className="overflow-x-auto">
        <table className="table bg-gray-700 text-white w-full mt-4 border p-10">
          {/* head */}
          <thead>
            <tr className="text-white font-bold text-[15px]">
              <th>Category</th>
              <th>Code</th>

              <th>Amount Or Percentage</th>
              <th className=" text-center">Delete</th>
            </tr>
          </thead>
          {data?.data?.map((a: Record<string, number>) => (
            <tbody key={a?._id}>
              {/* row 1 */}

              <tr>
                <td>{a?.name}</td>
                <td>{a?.code}</td>
                <td>{a?.amountOrPercentage}</td>
                <td className=" text-center">
                  <button
                    onClick={() => deleteHandler(a?._id)}
                    className="rounded-lg bg-red-500 px-8 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllCoupon;
