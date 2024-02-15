/* eslint-disable @typescript-eslint/no-explicit-any */

import { getISOWeek } from "date-fns";

import Chart from "chart.js/auto";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";
import { useEffect, useRef, useState } from "react";
import { useGetPurchaseQuery } from "../../redux/features/purchaseApi/purchaseApi";

type SalesData = {
  [key: string]: Array<{
    _id: string;
    name: string;
    quantity: number;
    date: string;
  }>;
};

const PurchaseInChart = () => {
  const { data, isLoading } = useGetPurchaseQuery(null, {
    refetchOnMountOrArgChange: true,
  });
  const [selectedInterval, setSelectedInterval] =
    useState<keyof SalesData>("Weekly");
  const [categorizedSales, setCategorizedSales] = useState<SalesData>({});
  const chartRef = useRef<Chart | null>(null);

  const dispatch = useAppDispatch();
  if (data?.errorMessage === "Unauthorized") {
    console.log("hello");
    dispatch(logout());
    window.location.reload();
  }

  useEffect(() => {
    if (Array.isArray(data?.data) && data.data?.length > 0) {
      const newCategorizedSales: SalesData = {};
      data.data.forEach((sale: any) => {
        const saleDate = new Date(sale.date);
        let key;

        switch (selectedInterval) {
          case "Weekly":
            key = `${saleDate.getFullYear()}-W${String(
              getISOWeek(saleDate)
            ).padStart(2, "0")}`;
            break;
          case "Daily":
            key = saleDate.toISOString().split("T")[0];
            break;
          case "Monthly":
            key = `${saleDate.getFullYear()}-${String(
              saleDate.getMonth() + 1
            ).padStart(2, "0")}`;
            break;
          case "Yearly":
            key = saleDate.getFullYear().toString();
            break;
          default:
            key = "InvalidInterval";
            break;
        }

        if (newCategorizedSales[key]) {
          newCategorizedSales[key].push(sale);
        } else {
          newCategorizedSales[key] = [sale];
        }
      });

      setCategorizedSales(newCategorizedSales);
    }
  }, [data, selectedInterval]);

  useEffect(() => {
    // Create or update the chart when categorizedSales changes
    if (Object.keys(categorizedSales).length > 0) {
      const ctx = document.getElementById("salesChart") as HTMLCanvasElement;

      // Destroy the previous chart before creating a new one
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      chartRef.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: Object.keys(categorizedSales),
          datasets: Object.entries(categorizedSales).map(([key, sales]) => ({
            label: key,
            data: sales.map((sale: any) => sale.quantity),
            backgroundColor: `rgba(${Math.random() * 255}, ${
              Math.random() * 255
            }, ${Math.random() * 255}, 0.2)`,
            borderColor: `rgba(${Math.random() * 255}, ${
              Math.random() * 255
            }, ${Math.random() * 255}, 1)`,
            borderWidth: 1,
          })),
        },
      });
    }
  }, [categorizedSales, selectedInterval]);

  if (isLoading) return <div>Loading...</div>;

  const intervalOptions = ["Weekly", "Daily", "Monthly", "Yearly"];

  return (
    <div className=" m-0 p-0">
      <h2 className=" text-[30px] font-semibold text-gray-700 text-center my-10 ">
        Purchase Chart
      </h2>
      <div className=" w-[50%] md:w-[50%] lg:w-[40%] xl:w-[35%] 2xl:w-[30%] mx-auto ">
        <select
          className=" text-white bg-black/90 p-2 rounded-lg"
          value={selectedInterval}
          onChange={(e) =>
            setSelectedInterval(e.target.value as keyof SalesData)
          }
        >
          {intervalOptions?.map((option) => (
            <option
              className=" text-white bg-black/90 p-10 text[15px] "
              key={option}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>

        {/* Chart Section */}
        <canvas id="salesChart" width="500" height="500"></canvas>
      </div>
    </div>
  );
};

export default PurchaseInChart;
