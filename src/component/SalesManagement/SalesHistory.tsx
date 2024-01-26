/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useRef } from "react";
import { getISOWeek } from "date-fns";
import { useGetSalesQuery } from "../../redux/features/salesApi/salesApi";
import Chart from "chart.js/auto";

type SalesData = {
  [key: string]: Array<{
    _id: string;
    name: string;
    quantity: number;
    date: string;
  }>;
};

const SalesHistory = () => {
  const { data, isLoading } = useGetSalesQuery(null, {
    refetchOnMountOrArgChange: true,
  });
  const [selectedInterval, setSelectedInterval] =
    useState<keyof SalesData>("Weekly");
  const [categorizedSales, setCategorizedSales] = useState<SalesData>({});
  const chartRef = useRef<Chart | null>(null);

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
  }, [categorizedSales, selectedInterval]);

  if (isLoading) return <div>Loading...</div>;

  const intervalOptions = ["Weekly", "Daily", "Monthly", "Yearly"];

  return (
    <div className=" w-[30%]">
      <select
        value={selectedInterval}
        onChange={(e) => setSelectedInterval(e.target.value as keyof SalesData)}
      >
        {intervalOptions?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <canvas id="salesChart" width="500" height="500"></canvas>
    </div>
  );
};

export default SalesHistory;
