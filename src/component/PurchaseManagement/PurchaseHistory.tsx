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
    buyerName: string;
    quantity: number;
    date: string;
    buyerEmail: string;
    category: string;
    brand: string;
    price: string;
  }>;
};

const PurchaseHistory = () => {
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
      const ctx = document.getElementById(
        "salesChart"
      ) as HTMLCanvasElement | null;

      // Check if the canvas element exists before creating a new chart
      if (ctx) {
        // Destroy the previous chart before creating a new one
        if (chartRef.current) {
          // Check if chartRef.current exists before attempting to destroy
          chartRef.current.destroy();
        }

        chartRef.current = new Chart(ctx, {
          type: "bar",
          data: {
            labels: Object.keys(categorizedSales),
            datasets: [
              {
                label: "Sales Quantity",
                data: Object.values(categorizedSales).map((sales) =>
                  sales.reduce((total, sale) => total + sale.quantity, 0)
                ),
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
              },
            ],
          },
        });
      }
    }
  }, [categorizedSales, selectedInterval]);

  if (isLoading) return <div>Loading...</div>;

  const intervalOptions = ["Weekly", "Daily", "Monthly", "Yearly"];

  return (
    <div className="w-[70%] mx-auto mt-6">
      <h2 className=" text-[30px] font-semibold text-gray-700 text-center my-10 ">
        Purchase History
      </h2>

      {data?.data?.length > 0 ? (
        <section>
          <select
            className="text-white bg-black/90 p-2 rounded-lg"
            value={selectedInterval}
            onChange={(e) =>
              setSelectedInterval(e.target.value as keyof SalesData)
            }
          >
            {intervalOptions?.map((option) => (
              <option
                className="text-white bg-black/90 p-10 text-[15px]"
                key={option}
                value={option}
              >
                {option}
              </option>
            ))}
          </select>

          {/* Table Section */}
          <table className="table bg-gray-700 text-white w-full mt-4 border p-10">
            <thead>
              <tr className="text-white font-bold text-[15px]">
                <th>Date</th>
                <th>Buyer Name</th>
                <th>Buyer Email</th>
                <th>Product Name</th>
                <th>Category</th>
                <th>Brand</th>
                <th>Quantity</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(categorizedSales).map(([key, sales]) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>
                    {sales.map((sale) => (
                      <div key={sale?._id}>{sale?.buyerName}</div>
                    ))}
                  </td>

                  <td>
                    {sales.map((sale) => (
                      <div key={sale?._id}>{sale?.buyerEmail}</div>
                    ))}
                  </td>
                  <td>
                    {sales.map((sale) => (
                      <div key={sale?._id}>{sale?.name}</div>
                    ))}
                  </td>
                  <td>
                    {sales.map((sale) => (
                      <div key={sale?._id}>{sale?.category}</div>
                    ))}
                  </td>
                  <td>
                    {sales.map((sale) => (
                      <div key={sale?._id}>{sale?.brand}</div>
                    ))}
                  </td>
                  <td>
                    {sales.map((sale) => (
                      <div key={sale?._id}>{sale?.quantity}</div>
                    ))}
                  </td>
                  <td>
                    {sales.map((sale) => (
                      <div key={sale?._id}>{sale?.price}</div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ) : (
        <section>
          <h3 className=" text-[20px] font-[500] text-red-500 text-center">
            No data available
          </h3>
        </section>
      )}
    </div>
  );
};

export default PurchaseHistory;
