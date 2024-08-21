/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";
import PurchaseForm from "./PurchaseForm";
import { useGetSingleInventoryQuery } from "../../redux/features/inventoryApi/inventoryApi";
import { useState } from "react";
import CouponOffer from "../CouponManagement/CouponOffer";
import Loging from "../../sharedComponent/Loging";
import Review from "../Review/Review";
import { useGetReviewQuery } from "../../redux/features/review/reviewApi";

const CheckOut = () => {
  const [date, SetDate] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());
  const { id } = useParams();
  const { data: singleData,isLoading } = useGetSingleInventoryQuery(id, {
    refetchOnMountOrArgChange: true,
  });
  const { data: reviewData,isLoading: isReviewLoading } = useGetReviewQuery(id, {
    refetchOnMountOrArgChange: true,
  });
  const dateChange = (d: any) => {
    setCurrentDate(d);
  };
  if (isLoading) {
    return <Loging/>;
  }
  if (isReviewLoading) {
    return <Loging/>;
  }

  return (
    <div>
      <h2 className=" text-[30px] font-semibold text-gray-700 text-center my-10 ">
        CheckOut
      </h2>
      <div className=" grid xl:grid-cols-2 w-[90%] mx-auto gap-10">
        <PurchaseForm
          singleData={singleData}
          dateChange={dateChange}
          date={date}
          SetDate={SetDate}
        />
        <section className="h-screen bg-gray-100 py-12 sm:py-16 lg:py-20">
          <CouponOffer />
          <CheckOutForm singleData={singleData} currentDate={currentDate} />
          
        </section>
      
      </div >
  
      <section className=" mb-20 w-[90%] xl:w-[50%] 2xl:w-[50%]  mx-auto space-y-10 mt-10 md:mt-32 lg:mt-40 xl:mt-20 2xl:mt-0 3xl:mt-20"> 
      <h1 className=' text-gray-700 text-3xl text-center font-semibold  '>Product Review</h1>
        <Review data={reviewData?.data}/></section>
    </div>
  );
};

export default CheckOut;
