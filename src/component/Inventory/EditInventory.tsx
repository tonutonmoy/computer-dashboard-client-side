/* eslint-disable @typescript-eslint/no-explicit-any */

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useCreateInventoryMutation,
  useGetSingleInventoryQuery,
  useUpdateInventoryMutation,
} from "../../redux/features/inventoryApi/inventoryApi";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { logout } from "../../redux/features/auth/authSlice";
import { useAppDispatch } from "../../redux/hooks";

const EditInventory = () => {
  const [addFunction, { data }] = useCreateInventoryMutation();

  const [todo, setTodo] = useState("");

  const { id } = useParams();

  console.log(id, "single id");

  const { data: singleData } = useGetSingleInventoryQuery(id, {
    refetchOnMountOrArgChange: true,
  });
  const dispatch = useAppDispatch();
  const [updateFunction, { data: updateData }] = useUpdateInventoryMutation();

  if (data?.errorMessage) {
    toast.error(data?.errorMessage);
  }

  if (updateData?.statusCode === 201) {
    console.log(updateData, "aise");
    toast.success("update done");
  }
  if (data?.statusCode === 201) {
    toast.success(data?.message);
  }

  if (data?.errorMessage === "Unauthorized") {
    dispatch(logout());
    window.location.reload();
  }
  if (updateData?.errorMessage === "Unauthorized") {
    dispatch(logout());
    window.location.reload();
  }

  const toggle = true;

  //
  const onSubmit = (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    const brand = formData.get("brand") || singleData?.data?.brand;
    const capacity = formData.get("capacity") || singleData?.data?.capacity;
    const category = formData.get("category") || singleData?.data?.category;
    const color = formData.get("color") || singleData?.data?.color;
    const compatibility =
      formData.get("compatibility") || singleData?.data?.compatibility;
    const condition = formData.get("condition") || singleData?.data?.condition;
    const interfaceValue =
      formData.get("interfaceValue") || singleData?.data?.interface;
    const name = formData.get("name") || singleData?.data?.name;
    const price = Number(formData.get("price") || singleData?.data?.price);
    const quantity = Number(
      formData.get("quantity") || singleData?.data?.quantity
    );

    console.log(event.name);
    const info = {
      id: id,
      image: singleData?.data?.image,
      brand: brand,
      capacity: capacity,
      category: category,
      color: color,
      compatibility: compatibility,
      condition: condition,
      interface: interfaceValue,
      name: name,
      price: price,
      quantity: quantity,
    };
    console.log(info, "info");

    if (todo === "Edit") {
      console.log("eeee");
      event.stopPropagation();
      return updateFunction(info);
    }

    if (todo === "Duplicate") {
      event.stopPropagation();
      return addFunction(info);
    }

    console.log(data);
  };
  return (
    <div className=" w-full pb-60  ">
      <h2 className=" text-[30px] font-semibold text-gray-700 text-center my-10 ">
        Edit & Duplicate Inventory
      </h2>

      <form
        onSubmit={onSubmit}
        className={`w-[90%] md:w-[90%] lg:w-[90%] xl:w-[95%] 2xl:w-[90%] mx-auto  mt-10  ${
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
        <section className="  grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4  gap-0 md:gap-0 lg:gap-5 xl:gap-0 2xl:gap-0 items-center">
          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500] "> Name</p>
            <input
              defaultValue={singleData?.data?.name}
              type="text"
              className="input input-bordered input-md w-full max-w-xs my-3 text-gray-500 "
              name="name"
              required
            />
          </div>

          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500] "> Quantity</p>
            <input
              defaultValue={singleData?.data?.quantity}
              type="number"
              name="quantity"
              className="input input-bordered input-md w-full max-w-xs my-3 text-gray-500"
              required
            />
          </div>

          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500] "> Price</p>
            <input
              defaultValue={singleData?.data?.price}
              type="number"
              name="price"
              className="input input-bordered input-md w-full max-w-xs my-3 text-gray-500"
              required
            />
          </div>

          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500] "> Category</p>
            <input
              defaultValue={singleData?.data?.category}
              type="text"
              name="category"
              className="input input-bordered input-md w-full max-w-xs my-3  text-gray-500"
              required
            />
          </div>

          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500] ">Brand</p>
            <input
              defaultValue={singleData?.data?.brand}
              type="text"
              name="brand"
              className="input input-bordered input-md w-full max-w-xs my-3 text-gray-500 "
              required
            />
          </div>

          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500]   "> Compatibility</p>
            <input
              defaultValue={singleData?.data?.compatibility}
              type="text"
              name="compatibility"
              className="input input-bordered input-md w-full max-w-xs my-3   text-gray-500"
              required
            />
          </div>
          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500]   "> Interface</p>
            <input
              defaultValue={singleData?.data?.interface}
              type="text"
              name="interfaceValue"
              className="input input-bordered input-md w-full max-w-xs my-3   text-gray-500"
              required
            />
          </div>

          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500]   "> Condition</p>
            <input
              defaultValue={singleData?.data?.condition}
              type="text"
              name="condition"
              className="input input-bordered input-md w-full max-w-xs my-3   text-gray-500"
              required
            />
          </div>

          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500]   "> Capacity</p>
            <input
              defaultValue={singleData?.data?.capacity}
              type="text"
              name="capacity"
              className="input input-bordered input-md w-full max-w-xs my-3   text-gray-500"
              required
            />
          </div>

          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500]   "> Color</p>
            <input
              defaultValue={singleData?.data?.color}
              type="text"
              name="color"
              className="input input-bordered input-md w-full max-w-xs my-3   text-gray-500"
              required
            />
          </div>
          <div className=" text-center mt-10">
            <button
              onClick={() => setTodo("Edit")}
              className="btn w-[50%] btn-outline border-white bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-red-500/90 via-black to-red-500/90 text-white hover:border-white 
            text-[17px] font-[500]"
            >
              Edit
            </button>
          </div>

          <div className=" text-center mt-10">
            <button
              onClick={() => setTodo("Duplicate")}
              className="btn w-[50%] btn-outline border-white bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-red-500/90 via-black to-red-500/90 text-white hover:border-white 
            text-[17px] font-[500]"
            >
              Duplicate
            </button>
          </div>
        </section>
      </form>
      <ToastContainer />
    </div>
  );
};

export default EditInventory;
