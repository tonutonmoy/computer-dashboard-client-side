import { useState } from "react";
import { useGetServicingQuery } from "../../redux/features/servicingApi/servicingApi";
import Loging from "../../sharedComponent/Loging";

const ServicingManagement = () => {
  const { data,isLoading } = useGetServicingQuery(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [detail, setDetail] = useState("");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  if (isLoading) {
    return <Loging/>;
  }

  return (
    <div className="w-[90%] mx-auto pb-60">
      <h2 className=" text-[30px] font-semibold text-gray-700 text-center my-10 ">
        Servicing Management
      </h2>

      {data?.data?.length > 0 ? (
        <section>
          <div className="overflow-x-auto">
            <table className="table border-none bg-gradient-to-b from-gray-700 to-gray-600 bg-gradient-to-r text-white w-full mt-4 border p-10">
              {/* head */}
              <thead>
                <tr className="text-white font-bold text-[15px]">
                  <th>User Name</th>
                  <th>User Email</th>

                  <th>Phone Number</th>
                  <th>Model</th>
                  <th>Serial Number</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th className=" text-center">Details</th>
                </tr>
              </thead>
              {data?.data?.map((a: Record<string, number>) => (
                <tbody key={a?._id}>
                  {/* row 1 */}

                  <tr>
                    <td>{a?.userName}</td>
                    <td>{a?.userEmail}</td>
                    <td>{a?.phoneNumber}</td>
                    <td>{a?.model}</td>
                    <td>{a?.serialNumber}</td>

                    <td>
                      {a?.dataAndTime
                        ? new Date(a?.dataAndTime).toLocaleDateString()
                        : ""}
                    </td>
                    <td>
                      {a?.dataAndTime
                        ? new Date(a?.dataAndTime).toLocaleTimeString()
                        : ""}
                    </td>

                    <td className=" text-center">
                      <button
                        onClick={() => {
                          toggleModal();
                          setDetail(String(a?.detail));
                        }}
                      className="py-1 px-3 rounded-lg hover:bg-blue-500 border-white bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-blue-500/90 via-black to-blue-500/90 text-white hover:border-white 
                text-[17px] font-[500]"
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </section>
      ) : (
        <section>
          <h3 className=" text-red-500 text-[500] text-[25px] text-center">
            No data is available
          </h3>
        </section>
      )}

      {/*  */}

      <div>
        {/* Main modal */}
        {isModalOpen && (
          <div
            id="static-modal"
            data-modal-backdrop="static"
            aria-hidden="true"
            className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen bg-gray-900 bg-opacity-50"
          >
            <div className="relative p-4 max-w-2xl">
              {/* Modal content */}
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                {/* Modal header */}
                <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl  font-semibold text-gray-900 dark:text-white">
                    Details of Issues
                  </h3>
                  <button
                    onClick={toggleModal}
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
                <div className="p-4 space-y-4 w-[90%] md:w-[500px] h-[300px] overflow-y-scroll">
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    {detail}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/*  */}
    </div>
  );
};

export default ServicingManagement;
