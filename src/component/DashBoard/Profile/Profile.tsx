import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUniversity,
  faMapMarkerAlt,
  faBriefcase,
  faEnvelope,
  faCity,
  faPhone,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Add the icons to the library so you can use them in your project
library.add(
  faUniversity,
  faMapMarkerAlt,
  faBriefcase,
  faEnvelope,
  faCity,
  faPhone,
  faInfoCircle
);



import { useState } from "react";
import { ToastContainer } from "react-toastify";

import { useGetUserQuery } from "../../../redux/features/auth/authApi";
import ProfileModal from "./ProfileModal";
import Loging from "../../../sharedComponent/Loging";



const Profile = () => {
  const [modal, setModal] = useState(false);
  const { isLoading, error, data, refetch } = useGetUserQuery("");

  if (isLoading) {
    return <Loging/>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  

  return (
    <>
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
      />
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />

      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0px)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src={data?.data?.image}
                        className="shadow-xl rounded-full h-[150px] w-[300px] align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <span
                        onClick={() => setModal(true)}
                        className="text-white bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))]  text-[15px] from-blue-500/90 via-black to-blue-500/90 btn-outline py-1 px-3 rounded-lg font-semibold focus:none cursor-pointer"
                      >
                        Edit Profile
                      </span>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1"></div>
                </div>
                <section className="text-center mt-12">
                  <div className="text-center mt-12">
                    <section>
                      <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
                        {data?.data?.name}
                      </h3>
                      <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                        <FontAwesomeIcon
                          icon="envelope"
                          className="mr-2 text-lg text-blueGray-400"
                        />
                        {data?.data?.email}
                      </div>
                    </section>

                    <section className=" ">
                      <div className="mb-2   text-blueGray-600 mt-10">
                        <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                        {data?.data?.country}{" "}
                      </div>
                      <div className="mb-2  text-blueGray-600">
                        <FontAwesomeIcon
                          icon="city"
                          className="mr-2 text-lg text-blueGray-400"
                        />

                        {data?.data?.city}
                      </div>
                      <div className="mb-2   text-blueGray-600">
                        <FontAwesomeIcon
                          icon="phone"
                          className="mr-2  text-lg text-blueGray-400"
                        />
                        {data?.data?.number}
                      </div>
                    </section>
                  </div>
                </section>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <FontAwesomeIcon
                        icon="info-circle"
                        className="mr-2 text-lg text-blueGray-400"
                      />
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        {data?.data?.bio}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {modal && (
            <ProfileModal
              setModal={setModal}
              refetch={refetch}
              name={data?.data?.name}
              country={data?.data?.country}
              city={data?.data?.city}
              number={data?.data?.number}
              bio={data?.data?.bio}
            />
          )}
         <ToastContainer/>
        </section>
      </main>
    </>
  );
};

export default Profile;