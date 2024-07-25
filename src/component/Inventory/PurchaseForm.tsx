/* eslint-disable @typescript-eslint/no-explicit-any */
import DatePicker from "react-datepicker";

import "react-toastify/dist/ReactToastify.css";

import "react-datepicker/dist/react-datepicker.css";
import { useAppSelector } from "../../redux/hooks";

const PurchaseForm = ({ singleData, date, SetDate }: any) => {
  const { user } = useAppSelector((state) => state.auth);
  const toggle = false;
  console.log(user);

  return (
    <div className=" w-full xl:pb-60  ">
      <form
        className={` mx-auto  mt-10  ${
          toggle && " border-[1px] "
        }  px-4 md:px-2  lg:px-4  xl:px-0  2xl:px-0   py-10  rounded-lg `}
      >
        <div>
          <img
            src={singleData?.data?.image}
            className="w-[20%] mx-auto"
            alt=""
          />
        </div>
        <section className="  grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3  gap-0 md:gap-0 lg:gap-5 xl:gap-10 2xl:gap-10 items-center">
          <div className=" text-center ">
            <p className=" text-[18px] font-[500] ">Buyer Name</p>
            <input
              defaultValue={user?.username}
              type="text"
              className="input input-bordered input-md w-full max-w-xs my-3 font-semibold text-[15px]     text-gray-500"
              name="buyerName"
              disabled
            />
          </div>
          <div className=" text-center ">
            <p className=" text-[18px] font-[500] "> Name</p>
            <input
              defaultValue={singleData?.data?.name}
              type="text"
              className="input input-bordered input-md w-full max-w-xs my-3 font-semibold text-[15px]     text-gray-500"
              name="name"
              disabled
            />
          </div>

          <div className=" text-center">
            <p className=" text-[18px] font-[500] ">Available Quantity</p>
            <input
              defaultValue={singleData?.data?.quantity}
              type="number"
              name="availableQuantity"
              className="input input-bordered input-md w-full max-w-xs my-3 font-semibold text-[15px]     text-gray-500"
              disabled
            />
          </div>

          <div className=" text-center">
            <p className=" text-[18px] font-[500] "> Price</p>
            <input
              defaultValue={singleData?.data?.price}
              type="number"
              name="price"
              className="input input-bordered input-md w-full max-w-xs my-3 font-semibold text-[15px]     text-gray-500"
              disabled
            />
          </div>

          <div className=" text-center ">
            <p className=" text-[18px] font-[500] "> Category</p>
            <input
              defaultValue={singleData?.data?.category}
              type="text"
              name="category"
              className="input input-bordered input-md w-full max-w-xs my-3 font-semibold text-[15px]     text-gray-500"
              disabled
            />
          </div>

          <div className=" text-center ">
            <p className=" text-[18px] font-[500] ">Brand</p>
            <input
              defaultValue={singleData?.data?.brand}
              type="text"
              name="brand"
              className="input input-bordered input-md w-full max-w-xs my-3 font-semibold text-[15px]     text-gray-500"
              disabled
            />
          </div>

          <div className=" text-center ">
            <p className=" text-[18px] font-[500]   "> Compatibility</p>
            <input
              defaultValue={singleData?.data?.compatibility}
              type="text"
              name="compatibility"
              className="input input-bordered input-md w-full max-w-xs my-3 font-semibold text-[15px]     text-gray-500"
              disabled
            />
          </div>
          <div className=" text-center ">
            <p className=" text-[18px] font-[500]   "> Interface</p>
            <input
              defaultValue={singleData?.data?.interface}
              type="text"
              name="interfaceValue"
              className="input input-bordered input-md w-full max-w-xs my-3 font-semibold text-[15px]     text-gray-500"
              disabled
            />
          </div>

          <div className=" text-center">
            <p className=" text-[18px] font-[500]   "> Condition</p>
            <input
              defaultValue={singleData?.data?.condition}
              type="text"
              name="condition"
              className="input input-bordered input-md w-full max-w-xs my-3 font-semibold text-[15px]     text-gray-500"
              disabled
            />
          </div>

          <div className=" text-center">
            <p className=" text-[18px] font-[500]   "> Capacity</p>
            <input
              defaultValue={singleData?.data?.capacity}
              type="text"
              name="capacity"
              className="input input-bordered input-md w-full max-w-xs my-3 font-semibold text-[15px]     text-gray-500"
              disabled
            />
          </div>

          <div className=" text-center ">
            <p className=" text-[18px] font-[500]   "> Color</p>
            <input
              defaultValue={singleData?.data?.color}
              type="text"
              name="color"
              className="input input-bordered input-md w-full max-w-xs my-3 font-semibold text-[15px]     text-gray-500"
              disabled
            />
          </div>

          <div className=" text-center ">
            <p className=" text-[18px] font-[500]   "> Date</p>

            <div className="relative max-w-sm  ">
              <DatePicker
                selected={date}
                className=" input input-bordered input-md w-full max-w-xs my-3 font-semibold text-[15px]     text-gray-500"
                onChange={SetDate}
                disabled
              />
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default PurchaseForm;
