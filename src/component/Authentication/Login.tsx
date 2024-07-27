import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/features/auth/authSlice";

interface RegistrationFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>();

  const [loginFunction, { data: loginData }] = useLoginMutation();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  if (loginData?.success === false) {
    toast.error(loginData?.errorMessage);
  }

  if (loginData?.data?.token) {
    toast.success(loginData?.message);
    console.log(loginData.data.token, "paise but dhoke na");
    dispatch(setUser(loginData.data));
    navigate("/dashboard");
  }

  const onSubmit: SubmitHandler<RegistrationFormData> = (data) => {
    loginFunction(data);
  };

  const toggle = false;

  return (
    <div className={`pb-[100px]  mt-0 ${toggle && "bg-[#090909] text-white"}`}>
      <h2
        className={`text-[25px] md:text-[30px] lg:text-[30px] xl:text-[35px]  2xl:text-[40px] font-medium text-center mt-20 lg:font-semibold  rounded-md  `}
      >
        {" "}
        Login here!!!
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

                <p className="my-3">
                  {" "}
                  Are you new?{" "}
                  <Link className=" text-orange-400" to="/registration">
                    please register{" "}
                  </Link>{" "}
                </p>

                <div className="form-control mt-6">
                  <button
                    className="py-2 px-3 rounded-lg font-semibold text-[15px]  text-white
                                   bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-red-500/90 via-black to-red-500/90
                                   "
                  >
                    Login
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

export default Login;
