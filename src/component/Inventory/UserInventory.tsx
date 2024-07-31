/* eslint-disable @typescript-eslint/no-explicit-any */
import {  useNavigate } from "react-router-dom";

const UserInventory = ({ inventoryData }: any) => {

  const navigate= useNavigate()

  const navigateHandler=(id:string)=>{
    navigate(`/dashboard/checkOut/${id}`)
  }
  
  return (
    <div className=" grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4 gap-10 ">
      {inventoryData?.map((a: any) => (
        <section className="py-10">
          <div className="">
            <article className="mx-auto shadow-lg border-none my-4 flex w-full flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
              <img src={a?.image} className="h-56 w-full object-cover" alt="" />
              <div className=" px-6 py-5 ">
                <h3 className=" font-semibold text-[20px] text-center">
                  {a?.name}
                </h3>

                <hr className="border-gray-300 dark:border-white my-5 " />
                <div className=" space-y-2 my-2   ">
                  <p>
                    <span className=" font-[500] text-[15px]">Brand:</span>{" "}
                    {a?.brand}
                  </p>
                  <p>
                    <span className=" font-[500]  text-[15px]">Capacity:</span>{" "}
                    {a?.capacity}
                  </p>
                  <p>
                    <span className=" font-[500] text-[15px]">Category:</span>{" "}
                    {a?.category}
                  </p>
                  <p>
                    <span className=" font-[500] text-[15px]">Color:</span>{" "}
                    {a?.color}
                  </p>
                  <p>
                    <span className=" font-[500] text-[15px]">
                      Compatibility:
                    </span>{" "}
                    {a?.compatibility}
                  </p>
                  <p>
                    <span className=" font-[500] text-[15px]">Condition:</span>{" "}
                    {a?.condition}
                  </p>
                  <p>
                    <span className=" font-[500] text-[15px]">Interface:</span>{" "}
                    {a?.interface}
                  </p>
                  <p>
                    <span className=" font-[500] text-[14px]">Available:</span>{" "}
                    {a?.quantity}
                  </p>
                  <p>
                    <span className=" font-[500] text-[15px]">Price:</span> ${" "}
                    {a?.price}
                  </p>
                </div>
              </div>
              <button onClick={()=> navigateHandler(a?._id)}
  disabled={a?.quantity === 0}
  className={`inline-block cursor-pointer ${a?.quantity === 0 ? 'opacity-50 cursor-not-allowed' : ''} select-none border bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-blue-500/90 text-white via-black to-blue-500/90 btn-outline px-3 py-2 text-center align-middle text-sm font-semibold leading-normal  no-underline shadow-sm`}
>

{a?.quantity === 0?"Not available" :"Buy Now"}
  
</button>
            
            </article>
          </div>
        </section>
      ))}
    </div>
  );
};

export default UserInventory;
