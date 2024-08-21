import { useState } from "react";
import { useGetSinglePurchaseQuery } from "../../redux/features/purchaseApi/purchaseApi";
import { useAppSelector } from "../../redux/hooks";
import Loging from "../../sharedComponent/Loging";
import ReviewModal from "../../sharedComponent/ReviewModal";
import { useGetUserQuery } from "../../redux/features/auth/authApi";

const MyProductHistory = () => {
  const [modal, setModal] = useState(false);
  const { user } = useAppSelector((state) => state.auth);
  const { data ,isLoading} = useGetSinglePurchaseQuery(user?.email);
  const { data: userData} = useGetUserQuery('');

  const [id,setId]=useState('')
  const handler=(e:string)=>{
 console.log(id,'idsCDsCsssdasddas')
    setId(e)
    setModal(true)

  }
  if (isLoading) {
    return <Loging/>;
  }

  console.log(data)

  return (
    <div className="w-[90%] mx-auto pb-60">
      <h2 className=" text-[30px] font-semibold text-gray-700 text-center my-10 ">
        My Product History
      </h2>

      {data?.data?.length > 0 ? (
        <section>
          <div className="overflow-x-auto ">
            <table className="table border-none bg-gradient-to-b from-gray-700 to-gray-600 bg-gradient-to-r text-white w-full mt-4 border p-10">
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
                  <th>Review</th>
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
                    <td > <span
                        onClick={() => handler(a?.productId.toString())}
                        className="text-white bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))]  text-[15px] from-blue-500/90 via-black to-blue-500/90 btn-outline py-1 px-3 rounded-lg font-semibold focus:none cursor-pointer"
                      >
                       Review 
                      </span></td>
                  </tr>
                </tbody>
              ))}
              
             {modal&&<ReviewModal
             email={userData?.data?.email}
             id={id}
             name={userData?.data?.name}
             image={userData?.data?.image}
            
                    setModal={setModal}
                    />}

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
