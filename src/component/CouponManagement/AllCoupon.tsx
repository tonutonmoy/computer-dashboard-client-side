/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  useDeleteCouponMutation,
  useGetCouponQuery,
} from "../../redux/features/couponApi/couponApi";
import Loging from "../../sharedComponent/Loging";

const AllCoupon = () => {
  const { data,isLoading } = useGetCouponQuery(null);
  const [deleteCouponFunction] = useDeleteCouponMutation();

  const deleteHandler = async (id: string) => {
    await deleteCouponFunction(id);
  };

  if (isLoading) {
    return <Loging/>;
  }

  return (
    <div className="w-[90%] mx-auto pb-60 ">
      <div className="overflow-x-auto ">
        <table className="table border-none bg-gradient-to-b from-gray-700 to-gray-600 bg-gradient-to-r text-white w-full mt-4 border p-10">
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
                    onClick={() => deleteHandler(String(a?._id))}
                  className="py-1 px-3 rounded-lg hover:bg-red-500 border-white bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-red-500/90 via-black to-red-500/90 text-white hover:border-white 
                text-[17px] font-[500]"
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
