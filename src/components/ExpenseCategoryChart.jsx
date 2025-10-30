import React, { useContext, useEffect, useState } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const ExpenseCategoryChart = () => {
  const { expenses } = useContext(ExpenseContext);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (expenses.length === 0) return;

    const categoryData = expenses.reduce((acc, expense) => {
      acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
      return acc;
    }, {});

    setChartData({
      labels: Object.keys(categoryData),
      datasets: [
        {
          data: Object.values(categoryData),
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#4BC0C0",
            "#FF9F40",
            "#9966FF",
          ],
          hoverOffset: 4,
        },
      ],
    });
  }, [expenses]);

  if (!chartData) {
    return <p className="text-gray-500 text-center">No chart data yet.</p>;
  }

  return (
    <div className="bg-white p-5 rounded-lg shadow-md text-center">
      <h2 className="text-lg font-semibold mb-3">
        Expense Breakdown by Category
      </h2>
      <div className="mx-auto" style={{ width: "300px", height: "300px" }}>
        <Pie data={chartData} />
      </div>
    </div>
  );
};

export default ExpenseCategoryChart;
