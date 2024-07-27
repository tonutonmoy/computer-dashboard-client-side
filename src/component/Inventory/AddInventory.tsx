/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { useCreateInventoryMutation } from "../../redux/features/inventoryApi/inventoryApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddInventory = () => {
  const [addFunction, { data }] = useCreateInventoryMutation();
  const { register, handleSubmit, reset } = useForm();

  console.log(data);
  if (data?.errorMessage) {
    toast.error(data?.errorMessage);
  }

  if (data?.statusCode === 201) {
    toast.success(data?.message);
  }

  const toggle = true;
  const onSubmit = (data: any) => {
    if (data?.image?.length < 1) {
      return toast.error("image is missing");
    }
    console.log(data);
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_Image_Upload_token
    }`;

    const formData = new FormData();

    formData.append("image", data.image[0]);
    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(async (imageResponse) => {
        if (imageResponse.success) {
          const imageURL = imageResponse.data.display_url;

          data.price = Number(data?.price);
          data.quantity = Number(data?.quantity);
          data.image = imageURL;
          addFunction(data);
          reset();
        }
      });
  };
  return (
    <div className=" w-full pb-60  ">
      <h2 className=" text-[30px] font-semibold text-gray-700 text-center my-10 ">
        Add Inventory
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`w-[90%] md:w-[90%] lg:w-[90%] xl:w-[95%] 2xl:w-[90%] mx-auto  mt-10  ${
          toggle && " border-[1px] "
        }  px-4 md:px-2  lg:px-4  xl:px-0  2xl:px-0   py-10  rounded-lg shadow-lg  `}
      >
        <section className=" grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4   gap-0 md:gap-0 lg:gap-5 xl:gap-0 2xl:gap-0">
          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500] "> Name</p>
            <input
              type="text"
              placeholder="name"
              className="input input-bordered input-md w-full max-w-xs my-3 text-gray-500 "
              {...register("name")}
              required
            />
          </div>

          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500] "> Quantity</p>
            <input
              type="number"
              placeholder="quantity"
              {...register("quantity")}
              className="input input-bordered input-md w-full max-w-xs my-3 text-gray-500"
              required
            />
          </div>

          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500] "> Price</p>
            <input
              type="number"
              placeholder="price"
              {...register("price")}
              className="input input-bordered input-md w-full max-w-xs my-3 text-gray-500"
              required
            />
          </div>

          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500] "> Category</p>
            <input
              type="text"
              placeholder="category"
              {...register("category")}
              className="input input-bordered input-md w-full max-w-xs my-3  text-gray-500"
              required
            />
          </div>

          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500] ">Brand</p>
            <input
              type="text"
              placeholder="brand"
              {...register("brand")}
              className="input input-bordered input-md w-full max-w-xs my-3 text-gray-500 "
              required
            />
          </div>

          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500]   "> Compatibility</p>
            <input
              type="text"
              placeholder="compatibility"
              {...register("compatibility")}
              className="input input-bordered input-md w-full max-w-xs my-3   text-gray-500"
              required
            />
          </div>
          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500]   "> Interface</p>
            <input
              type="text"
              placeholder="interface"
              {...register("interface")}
              className="input input-bordered input-md w-full max-w-xs my-3   text-gray-500"
              required
            />
          </div>

          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500]   "> Condition</p>
            <input
              type="text"
              placeholder="condition"
              {...register("condition")}
              className="input input-bordered input-md w-full max-w-xs my-3   text-gray-500"
              required
            />
          </div>

          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500]   "> Capacity</p>
            <input
              type="text"
              placeholder="capacity"
              {...register("capacity")}
              className="input input-bordered input-md w-full max-w-xs my-3   text-gray-500"
              required
            />
          </div>

          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500]   "> Color</p>
            <input
              type="text"
              placeholder="color"
              {...register("color")}
              className="input input-bordered input-md w-full max-w-xs my-3   text-gray-500"
              required
            />
          </div>
          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500]   "> Image</p>

            <input
              type="file"
              {...register("image")}
              className="file-input w-full max-w-xs"
            />
          </div>
        </section>

        <section className=" text-center mt-10">
          <button
            className="py-2 w-[50%] px-3 rounded-lg btn-outline border-white bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-blue-500/90 via-black to-blue-500/90 text-white hover:border-white 
                text-[17px] font-[500]"
          >
            Add
          </button>
        </section>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddInventory;
