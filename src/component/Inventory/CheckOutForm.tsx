/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

import { useGetSingleCouponQuery } from "../../redux/features/couponApi/couponApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCreatePurchaseMutation } from "../../redux/features/purchaseApi/purchaseApi";
import { useAppSelector } from "../../redux/hooks";

const CheckOutForm = ({ singleData, currentDate }: any) => {
  const { user } = useAppSelector((state) => state.auth);
  const [code, setCode] = useState("");
  const [createPurchaseFunction] = useCreatePurchaseMutation();

  const { data: codeData } = useGetSingleCouponQuery(code || "");
  const [count, setCount] = useState(1);
  const [total, totalCost] = useState(0);

  const handleIncrement = () => {
    if (count >= singleData?.data?.quantity) {
      return toast.error(
        `your quantity bigger than product quantity! available quantities is ${singleData?.data?.quantity}`
      );
    }
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    const Subtotal = singleData?.data?.price * count || 0;

    const shippingCost = 10;

    let result = Subtotal + shippingCost;

    if (codeData?.data?.name === "Shipping") {
      result = result - Number(codeData?.data?.amountOrPercentage);
    }
    if (codeData?.data?.name === "Fixed") {
      result = result - Number(codeData?.data?.amountOrPercentage);
    }
    if (codeData?.data?.name === "Percentage") {
      const percentageToDrop = codeData?.data?.amountOrPercentage;

      const dropAmount = (percentageToDrop / 100) * result;
      result -= dropAmount;
    }
    totalCost(result);
  }, [total, count, singleData, codeData]);

  const purchaseHandler = async () => {
    const info = {
      name: singleData?.data?.name,
      category: singleData?.data?.category,
      brand: singleData?.data?.brand,
      compatibility: singleData?.data?.compatibility,
      interface: singleData?.data?.interface,
      capacity: singleData?.data?.capacity,
      color: singleData?.data?.color,
      buyerName: user?.username,
      buyerEmail: user?.email,
      quantity: count,
      price: total,
      date: currentDate,
    };

    await createPurchaseFunction(info)
      .unwrap()
      .then((a) => {
        console.log(a);
        if (a?.success === true) {
          return toast.success("Purchasing complete");
        }

        if (a?.success === false) {
          return toast.error(a?.errorMessage);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <section>
      <section className=" bg-gray-100 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mt-8 max-w-md md:mt-12">
            <div className="rounded-3xl bg-white shadow-lg relative">
              {/*  */}

              <div className=" text-center  ">
                <input
                  onChange={(e) => setCode(e.target.value)}
                  placeholder=" Promo code"
                  type="text"
                  name="color"
                  className="input input-bordered w-[30%] h-[45px]  absolute left-[3%] top-[0%]   input-md max-w-xs my-3 font-semibold text-[15px]     text-gray-500"
                  // disabled
                />
              </div>

              <div className="w-[30%]  absolute right-[3%] top-[3%]">
                <div className="flex flex-row h-10 w-full rounded-lg bg-transparent mt-1">
                  <button
                    onClick={handleDecrement}
                    data-action="decrement"
                    className=" bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-red-500/90 via-black to-red-500/90  hover:text-white text-white hover:bg-gray-800 h-full w-20 rounded-l cursor-pointer outline-none"
                  >
                    <span className="m-auto text-2xl font-thin">−</span>
                  </button>
                  <div className="outline-none    focus:outline-none  w-full bg-gray-100 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default  items-center text-gray-700  outline-none ps-3">
                    <p className="  text-center p-2 pr-6"> {count}</p>
                  </div>
                  <button
                    onClick={handleIncrement}
                    data-action="increment"
                    className="bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-red-500/90 via-black to-red-500/90 hover:text-white text-white hover:bg-gray-800 h-full w-20 rounded-r cursor-pointer"
                  >
                    <span className="m-auto text-2xl font-thin">+</span>
                  </button>
                </div>
              </div>
              {/*  */}
              <div className="px-4 py-6 sm:px-8 sm:py-10">
                <div className="flow-root"></div>

                <div className="mt-6 space-y-3 border-t border-b py-8">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-400">Subtotal</p>
                    <p className="text-lg font-semibold text-gray-900">
                      ${singleData?.data?.price}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-400">Shipping</p>
                    <p className="text-lg font-semibold text-gray-900">$10</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Total</p>
                  <p className="text-2xl font-semibold text-gray-900">
                    <span className="text-xs font-normal text-gray-400">
                      USD
                    </span>{" "}
                    {total}
                  </p>
                </div>

                <div className="mt-6 text-center">
                  <button
                    onClick={purchaseHandler}
                    type="button"
                    className="group inline-flex w-full items-center justify-center rounded-md bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-blue-500/90 via-black to-blue-500/90 px-3 py-2 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow btn-outline hover:bg-gray-800"
                  >
                    Purchase
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </section>
  );
};

export default CheckOutForm;
