import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

import { Link, useNavigate } from "react-router-dom";
import { useRegistrationMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/features/auth/authSlice";

interface RegistrationFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;

  role: string;
}

const Registration: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>();

  const [registrationFunction, { data: registrationData }] =
    useRegistrationMutation();

  console.log(registrationData, "i");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  if (registrationData?.success === false) {
    toast.error(registrationData?.errorMessage);
  }
  if (registrationData?.success === true) {
    toast.success(registrationData?.message);
    dispatch(setUser(registrationData?.data));
    navigate("/dashboard");
  }

  const onSubmit: SubmitHandler<RegistrationFormData> = (data) => {
    const { name, email, password, confirmPassword } = data;

    if (password !== confirmPassword) {
      return toast.error("Password not match");
    }

    const info = { name, email, password, role: "buyer" };

    console.log(info);

    registrationFunction(info);
  };

  const toggle = false;

  return (
    <div className={`pb-[100px] mt-0 ${toggle && "bg-[#090909] text-white"}`}>
      <h2
        className={`text-[25px] md:text-[30px] lg:text-[30px] xl:text-[35px]  2xl:text-[40px] font-medium text-center mt-20 lg:font-semibold  rounded-md  `}
      >
        {" "}
        Registration here!!!
      </h2>
      <div
        className={`hero min-h-screen ${
          toggle ? "bg-[#090909] text-white" : "bg-white"
        }  `}
      >
        <div className="   w-[90%] md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] space-y-20  ">
          <section>
            <div
              className={`card   w-[100%] md:w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-[70%] mx-auto  py-5  login-from ${
                toggle && "border-[1px]"
              }
               
                        `}
            >
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="card-body py-0 "
              >
                <div className="form-control">
                  <label className="label ">
                    <span className="font-medium text-xl ">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    className="input text-gray-500 input-bordered"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <p className=" text-red-500 my-3">name is required</p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label ">
                    <span className="font-medium text-xl ">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered text-gray-500"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <p className=" text-red-500 my-3">email is required</p>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="font-medium text-xl ">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    className="input input-bordered  text-gray-500"
                    {...register("password", {
                      required: true,
                      minLength: 6,

                      pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                    })}
                  />

                  {errors.password && (
                    <p className=" text-red-500 my-3">password is required</p>
                  )}

                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600">password is under 6 digit</p>
                  )}

                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600">
                      password must be 1 uppercase and 1 special character{" "}
                    </p>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="font-medium text-xl ">
                      Confirm password
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="confirm password"
                    className="input input-bordered text-gray-500"
                    {...register("confirmPassword", { required: true })}
                  />

                  {errors.confirmPassword && (
                    <p className=" text-red-500 my-3">
                      confirm password is required
                    </p>
                  )}
                </div>

                <p className="my-3">
                  {" "}
                  All ready account?{" "}
                  <Link className=" text-orange-400" to="/">
                    please login{" "}
                  </Link>{" "}
                </p>

                <div className="form-control mt-6">
                  <button
                    className="btn text-[15px]  text-white
                                   bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-red-500/90 via-black to-red-500/90
                                   "
                  >
                    Registration
                  </button>
                </div>
              </form>
            </div>
            <ToastContainer />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Registration;
