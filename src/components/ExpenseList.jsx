import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const { expenses } = useContext(ExpenseContext);

  if (expenses.length === 0) {
    return <p className="text-gray-500 text-center">No expenses added yet.</p>;
  }

  return (
    <ul className="divide-y divide-gray-200 bg-white rounded-lg shadow-md">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </ul>
  );
};

export default ExpenseList;
