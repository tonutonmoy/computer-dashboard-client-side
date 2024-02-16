/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";

const UserInventory = ({ inventoryData }: any) => {
  console.log(inventoryData);
  return (
    <div className=" grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-10 ">
      {inventoryData?.map((a: any) => (
        <section className="py-10">
          <div className="">
            <article className="mx-auto my-4 flex w-full flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
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

              <Link
                to={`/dashboard/checkOut/${a?._id}`}
                className="inline-block cursor-pointer select-none  border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm"
              >
                Buy Now
              </Link>
            </article>
          </div>
        </section>
      ))}
    </div>
  );
};

export default UserInventory;
