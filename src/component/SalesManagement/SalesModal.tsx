// /* eslint-disable @typescript-eslint/no-explicit-any */

// import { useEffect, useState } from "react";
// import DatePicker from "react-datepicker";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import "react-datepicker/dist/react-datepicker.css";
// import { useCreateSalesMutation } from "../../redux/features/salesApi/salesApi";
// import { useAppDispatch, useAppSelector } from "../../redux/hooks";
// import { setInventoryData } from "../../redux/features/inventoryApi/inventorySlice";

// const SalesModal = () => {
//   const { inventoryData, sellProductId } = useAppSelector((e) => e.inventory);
//   console.log(sellProductId);
//   const [date, setDate] = useState(new Date());
//   const [addData, { data }] = useCreateSalesMutation();

//   const dispatch = useAppDispatch();

//   useEffect(() => {
//     if (data?.data) {
//       dispatch(setInventoryData(data));
//     }
//   }, [data]);

//   console.log(data, "dara");
//   const handler = (e: any) => {
//     e.preventDefault();
//     const name = e.target.name.value;
//     const quantity = Number(e.target.quantity.value);

//     if (!name) {
//       return;
//     }
//     if (!quantity) {
//       return;
//     }
//     if (!date) {
//       return;
//     }

//     const find: any | undefined = inventoryData.find(
//       (a: any) => a?._id === sellProductId
//     );

//     if (find?.quantity < quantity) {
//       return toast.error(
//         `your quantity bigger than product quantity! available quantities is ${find?.quantity}`
//       );
//     }

//     const info = { name, quantity, date, productId: sellProductId };
//     addData(info);
//     console.log(name, quantity, date);
//   };

//   const closeModal = () => {
//     const modal = document.getElementById(
//       "my_modal_4"
//     ) as HTMLDialogElement | null;
//     if (modal) {
//       modal.close();
//     }
//   };
//   return (
//     <div>
//       {/*  */}

//       <button
//         className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         onClick={() => {
//           const modalElement = document.getElementById(
//             "my_modal_4"
//           ) as HTMLDialogElement | null;
//           if (modalElement) {
//             modalElement.showModal();
//           }
//         }}
//       >
//         <svg
//           className="w-3.5 h-3.5 me-2"
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="currentColor"
//           viewBox="0 0 18 21"
//         >
//           <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
//         </svg>
//       </button>

//       <dialog id="my_modal_4" className="modal ">
//         <div className="modal-box w-3/12 max-w-5xl">
//           <div className=" flex justify-center">
//             <div className="relative p-4 w-full max-w-md max-h-full">
//               {/* Modal content */}
//               <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
//                 {/* Modal body */}
//                 <div className="p-4 md:p-5">
//                   <form onSubmit={handler} className="space-y-4" action="#">
//                     <div className=" flex justify-end"></div>
//                     <div>
//                       <label
//                         htmlFor="name"
//                         className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                       >
//                         Name of the buyer
//                       </label>
//                       <input
//                         type="text"
//                         name="name"
//                         id="name"
//                         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//                       />
//                     </div>
//                     <div>
//                       <label
//                         htmlFor="quantity"
//                         className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                       >
//                         Quantity of the product
//                       </label>
//                       <input
//                         type="number"
//                         name="quantity"
//                         id="quantity"
//                         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//                       />
//                     </div>

//                     <div className="relative max-w-sm">
//                       <DatePicker
//                         selected={date}
//                         onChange={(date: any) => setDate(date)}
//                       />
//                     </div>

//                     <button
//                       onClick={closeModal}
//                       type="submit"
//                       className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                     >
//                       Submit
//                     </button>
//                   </form>
//                   <button onClick={closeModal} className="btn rounded-full ">
//                     Close
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </dialog>
//       {/*  */}
//       <ToastContainer />
//     </div>
//   );
// };

// export default SalesModal;

/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "react-datepicker/dist/react-datepicker.css";
import { useCreateSalesMutation } from "../../redux/features/salesApi/salesApi";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setInventoryData } from "../../redux/features/inventoryApi/inventorySlice";

const SalesModal = () => {
  const { inventoryData, sellProductId } = useAppSelector((e) => e.inventory);

  const [date, setDate] = useState(new Date());
  const [addData, { data }] = useCreateSalesMutation();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data?.data) {
      dispatch(setInventoryData(data));
    }
  }, [data]);

  console.log(data, "dara");

  const [isCenterModalOpen, setCenterModalOpen] = useState(false);

  const openCenterModal = () => {
    setCenterModalOpen(true);
  };

  const closeCenterModal = () => {
    setCenterModalOpen(false);
  };

  const handler = (e: any) => {
    e.preventDefault();
    const name = e.target.name.value;
    const quantity = Number(e.target.quantity.value);

    if (!name) {
      return;
    }
    if (!quantity) {
      return;
    }
    if (!date) {
      return;
    }

    const find: any | undefined = inventoryData.find(
      (a: any) => a?._id === sellProductId
    );

    if (find?.quantity < quantity) {
      return toast.error(
        `your quantity bigger than product quantity! available quantities is ${find?.quantity}`
      );
    }

    const info = { name, quantity, date, productId: sellProductId };
    addData(info);

    console.log(date);
    console.log(date.toISOString());
    setCenterModalOpen(false);
  };

  //

  return (
    <div>
      <div className="space-y-2">
        {/* Button trigger for vertically centered modal */}
        <button
          type="button"
          className="inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white"
          onClick={openCenterModal}
        >
          Sell
        </button>

        {/* Vertically centered modal */}
        {isCenterModalOpen && (
          <div className="fixed top-0 left-0 flex items-center justify-center h-full w-full bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded w-[90%] md:w-[50%]  lg:w-[30%]  pt-14 pb-10 relative">
              <form onSubmit={handler} className="space-y-4 " action="#">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name of the buyer
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="quantity"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Quantity of the product
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  />
                </div>

                <div className="relative max-w-sm  ">
                  <DatePicker
                    className=" bg-gray-500 p-1 text-center rounded-lg text-white"
                    selected={date}
                    onChange={(e: any) => setDate(e)}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </form>
              <button
                className="  rounded-full  text-white w-10 h-10 bg-red-500 absolute top-0 right-0"
                onClick={closeCenterModal}
              >
                X
              </button>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default SalesModal;
