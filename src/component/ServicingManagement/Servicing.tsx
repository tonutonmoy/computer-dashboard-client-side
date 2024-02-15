/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { useCreateInventoryMutation } from "../../redux/features/inventoryApi/inventoryApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import { useCreateServicingMutation } from "../../redux/features/servicingApi/servicingApi";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Servicing = () => {
  const [servicingFunction, { data }] = useCreateServicingMutation();
  const { register, handleSubmit, reset } = useForm();
  const [value, onChange] = useState<Value>(new Date());

  const toggle = true;
  const onSubmit = async (data: any) => {
    data.dataAndTime = value;
    console.log(data, "data");
    await servicingFunction(data)
      .unwrap()
      .then((a) => {
        console.log(a);
        if (a?.success === true) {
          reset();
          return toast.success("Request send successfully");
        }

        if (a?.success === false) {
          console.log(a);
          return toast.error(a?.errorMessage);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className=" w-full pb-60  ">
      <h2 className=" text-[30px] font-semibold text-gray-700 text-center my-10 ">
        Servicing
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`w-[90%] md:w-[90%] lg:w-[90%] xl:w-[95%] 2xl:w-[90%] mx-auto  mt-10  ${
          toggle && " border-[1px] "
        }  px-4 md:px-2  lg:px-4  xl:px-0  2xl:px-0   py-10  rounded-lg `}
      >
        <section className=" grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-0 md:gap-0 lg:gap-5 xl:gap-0 2xl:gap-0">
          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500] "> Name</p>
            <input
              type="text"
              placeholder="enter your name"
              className="input input-bordered input-md w-full max-w-xs my-3 text-gray-500 "
              {...register("userName")}
              required
            />
          </div>

          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500] "> Email</p>
            <input
              type="text"
              placeholder="enter your email"
              {...register("userEmail")}
              className="input input-bordered input-md w-full max-w-xs my-3 text-gray-500"
              required
            />
          </div>

          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500] "> Phone number</p>
            <input
              type="text"
              placeholder="inter your phone number"
              {...register("phoneNumber")}
              className="input input-bordered input-md w-full max-w-xs my-3 text-gray-500"
              required
            />
          </div>

          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500] "> Serial number</p>
            <input
              type="text"
              placeholder="Product serial number"
              {...register("serialNumber")}
              className="input input-bordered input-md w-full max-w-xs my-3  text-gray-500"
              required
            />
          </div>

          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500] ">Model</p>
            <input
              type="text"
              placeholder="Product model"
              {...register("model")}
              className="input input-bordered input-md w-full max-w-xs  my-3 text-gray-500 "
              required
            />
          </div>
          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500] ">Date and Time</p>
            <DateTimePicker
              className="input input-bordered input-md w-full max-w-xs my-3 text-gray-500 "
              onChange={onChange}
              value={value}
            />
          </div>
        </section>
        <div className="  my-5 w-[70%] mx-auto">
          <p className=" text-[18px] font-[500] text-center ">
            Describe issues{" "}
          </p>
          <textarea
            placeholder="Write your issues"
            {...register("detail")}
            className="input input-bordered input-md my-3 text-gray-500 "
            required
            style={{ width: "100%", height: "200px" }}
          />
        </div>

        <section className=" text-center mt-10">
          <button
            className="btn w-[50%] btn-outline border-white bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-red-500/90 via-black to-red-500/90 text-white hover:border-white 
                text-[17px] font-[500]"
          >
            Submit
          </button>
        </section>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Servicing;
