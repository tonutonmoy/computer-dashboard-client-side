/* eslint-disable @typescript-eslint/no-explicit-any */

import { useForm } from "react-hook-form";


import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useAppSelector } from "../../../redux/hooks";
import {  useUpdateProfileMutation } from "../../../redux/features/auth/authApi";
import imageBB from "../../../sharedComponent/imageBB";





interface FormValues {
  name: string;
  image?: any;
  country: string;
  city: string;
  number: string;
  bio: string;
}

const ProfileModal = ({
  setModal,
  refetch,
  name,
  country,
  city,
  number,
  bio,
}: any) => {
  const [updateProfile] = useUpdateProfileMutation();
  const { register, handleSubmit } = useForm<FormValues>();
  const { profileRefetchFunction } = useAppSelector((state) => state.profile);

  const onSubmit = async (formData: FormValues) => {
    if (formData?.image?.length > 0) {
      console.log("hoise");
      const image = await imageBB(formData?.image[0]);
  
      if (image === null) {
        toast.error("Image not uploaded");
        return;
      }
      formData.image = image;
      console.log(formData);
    }
  
    if (typeof formData.image !== "string") {
      delete formData.image;
    }
  
    const updateData = await updateProfile({
      $set: formData,
    });
  
    if ("data" in updateData && updateData.data?.data?.acknowledged === true) {
      toast.success("Profile updated successfully");
      setModal(false);
      refetch();
      profileRefetchFunction();
    } else {
      // Handle error here if needed
      toast.error("Failed to update profile");
    }
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full">
      <div className="relative w-full max-w-2xl p-4">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 border-b rounded-t md:p-5 dark:border-gray-600">
            <button
              onClick={() => setModal(false)}
              type="button"
              className="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg ms-auto hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="static-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <section className="h-[300px] md:h-[350px]   lg:h-full xl:h-full 2xl:h-full grid gap-6 mb-6  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2  my-10 px-10  overflow-scroll md:overflow-scroll lg:overflow-hidden xl:overflow-hidden  2xl:overflow-hidden">
              <section className="space-y-5">
                <div>
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="title"
                    defaultValue={name}
                    {...register("name")}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your title"
                  />
                </div>
                <div>
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    id="title"
                    defaultValue={country}
                    {...register("country")}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your title"
                  />
                </div>
                <div>
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="title"
                    defaultValue={city}
                    {...register("city")}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your title"
                  />
                </div>
                <div>
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Number
                  </label>
                  <input
                    type="text"
                    id="title"
                    defaultValue={number}
                    {...register("number")}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your title"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 tracking-wide">
                    Image
                  </label>
                  <input
                    {...register("image")}
                    id="fileInput"
                    type="file"
                    className="w-full overflow-clip rounded-xl border border-slate-300 bg-slate-100/50 text-sm text-slate-700 file:mr-4 file:cursor-pointer file:border-none file:bg-slate-100 file:px-4 file:py-2 file:font-medium file:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 disabled:cursor-not-allowed disabled:opacity-75 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300 dark:file:bg-slate-800 dark:file:text-white dark:focus-visible:outline-blue-600"
                  />
                </div>
              </section>
              <section>
                <label
                  htmlFor="content"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Bio
                </label>
                <textarea
                  id="content"
                  defaultValue={bio}
                  {...register("bio")}
                  className="bg-gray-50 border border-gray-300 h-[200px] md:h-[200px]  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your content"
                />
              </section>
            </section>

            {/* Modal footer */}
            <div className="flex items-center gap-5 justify-center p-4 border-t border-gray-200 rounded-b md:p-5 dark:border-gray-600">
              <button
                data-modal-hide="static-modal"
                type="submit"
               className="text-white bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))]  text-[15px] from-blue-500/90 via-black to-blue-500/90 btn-outline py-1 px-3 rounded-lg font-semibold focus:none cursor-pointer"
              >
                I accept
              </button>
              <button
                onClick={() => setModal(false)}
                type="button"
              className="text-white bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))]  text-[15px] from-red-500/90 via-black to-red-500/90 btn-outline py-1 px-3 rounded-lg font-semibold focus:none cursor-pointer"
              >
                Decline
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;