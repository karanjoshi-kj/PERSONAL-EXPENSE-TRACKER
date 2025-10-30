import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const ExpenseItem = ({ expense }) => {
  const { deleteExpense } = useContext(ExpenseContext);

  const formatCurrency = (amount) =>
    `₹${amount.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  return (
    <li className="flex justify-between items-center p-3 hover:bg-gray-50 transition">
      <div>
        <p className="font-semibold text-gray-800">{expense.title}</p>
        <p className="text-sm text-gray-500">
          {expense.category} • {expense.date}
        </p>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-green-600 font-bold">
          {formatCurrency(expense.amount)}
        </span>
        <button
          onClick={() => deleteExpense(expense.id)}
          className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
