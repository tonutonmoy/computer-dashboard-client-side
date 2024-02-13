/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useCreateCouponMutation } from "../../redux/features/couponApi/couponApi";

const CreateCoupon = () => {
  const [select, setSelect] = useState("");

  const [createCoupon] = useCreateCouponMutation();
  console.log(select);

  const handler = async (e: any) => {
    e.preventDefault();
    const code = e.target.code.value;
    let amountOrPercentage = Number(e.target.amountOrPercentage.value);

    if (select === "Shipping") {
      amountOrPercentage = Number(0);
    }

    const info = {
      code,
      amountOrPercentage,
      name: select,
    };

    await createCoupon(info);
  };

  return (
    <div className="m-10 w-screen max-w-screen-md">
      <div className="flex flex-col">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
          <form onSubmit={handler} className="">
            <div className="grid  space-y-4">
              <div className="flex flex-col ">
                <label
                  htmlFor="manufacturer"
                  className="text-sm font-medium text-stone-600"
                >
                  Select
                </label>

                <select
                  required
                  onChange={(e) => setSelect(e?.target?.value)}
                  id="manufacturer"
                  className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                >
                  <option></option>
                  <option>Percentage</option>
                  <option>Fixed </option>
                  <option>Shipping</option>
                </select>
              </div>
              <div className="flex flex-col ">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-stone-600"
                >
                  Code
                </label>
                <input
                  name="code"
                  required
                  type="text"
                  id="name"
                  placeholder="code"
                  className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>

              <div
                className={`flex flex-col ${
                  select === "Shipping" ? "hidden" : ""
                } `}
              >
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-stone-600"
                >
                  Amount or Percentage
                </label>
                <input
                  disabled={select === "Shipping"}
                  name="amountOrPercentage"
                  required
                  type="number"
                  id="name"
                  placeholder="amount or percentage"
                  className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
            </div>

            <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
              <div>
                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring"
                >
                  Add
                </button>
              </div>
            </div>
          </form>
          <div>
            <button
              onClick={() => window.location.reload()}
              type="submit"
              className="rounded-lg bg-red-500 px-8 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCoupon;
