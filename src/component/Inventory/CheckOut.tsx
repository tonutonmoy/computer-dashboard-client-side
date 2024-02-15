/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";
import PurchaseForm from "./PurchaseForm";
import { useGetSingleInventoryQuery } from "../../redux/features/inventoryApi/inventoryApi";
import { useState } from "react";
import CouponOffer from "../CouponManagement/CouponOffer";

const CheckOut = () => {
  const [date, SetDate] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());
  const { id } = useParams();
  const { data: singleData } = useGetSingleInventoryQuery(id, {
    refetchOnMountOrArgChange: true,
  });
  const dateChange = (d: any) => {
    setCurrentDate(d);
  };

  return (
    <div>
      <h2 className=" text-[30px] font-semibold text-gray-700 text-center my-10 ">
        CheckOut
      </h2>
      <div className=" grid grid-cols-2 w-[90%] mx-auto gap-10">
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
      </div>
    </div>
  );
};

export default CheckOut;
