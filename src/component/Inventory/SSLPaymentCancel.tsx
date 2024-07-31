import { Link } from "react-router-dom";

const SSLPaymentCancel = () => {
  return (
    <div className=" w-[90%]   ">
    <div className="my-[150px]">
<div
 className=" text-center md:w-[70%] xl:w-[50%]  3xl:w-[40%]  mx-auto   bg-slate-800 p-[20px] rounded-[30px] "
 
  style={{ boxShadow: "10px 10px 10px black" }}
>
  <h2 className="text-[20px]  md:text-[30px] lg:text-[30px] xl:text-[35px] 2xl:text-[35px] font-[500] text-white mt-[20px]">
    {" "}
    Your payment Cancel{" "}
  </h2>

  <div className="  flex justify-center">
    <Link
      className=
      
           "p-[10px] rounded-md  uppercase border-none text-white hover:text-white  bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-blue-500/90  via-black to-blue-500/90 text-center hover:no-underline font-[500]   mt-[50px] mb-[20px]  w-[70%] md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] text-[12px]  md:text-[12px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px]"
   
        to="/dashboard"
    >
      Back to Home
    </Link>
  </div>
</div>
</div>
</div>
  );
};

export default SSLPaymentCancel;