import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const Charts = () => {
  const { expenses } = useContext(ExpenseContext);

  const totalExpense = expenses.reduce((sum, e) => sum + e.amount, 0);
  const categoryTotals = expenses.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
    return acc;
  }, {});

  const formatCurrency = (amount) =>
    `₹${amount.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  if (expenses.length === 0)
    return <p className="text-gray-500 text-center">No data to show progress</p>;

  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-center">
        Category-wise Progress
      </h2>

      {Object.entries(categoryTotals).map(([category, total]) => {
        const percent = ((total / totalExpense) * 100).toFixed(1);
        return (
          <div key={category} className="mb-4">
            <div className="flex justify-between mb-1">
              <span>{category}</span>
              <span>{percent}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-blue-500 h-3 rounded-full"
                style={{ width: `${percent}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">{formatCurrency(total)}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Charts;
