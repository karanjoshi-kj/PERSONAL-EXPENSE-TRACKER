import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { TrendingDown, ListOrdered, Activity } from "lucide-react"; // icons

const Summary = () => {
  const { expenses } = useContext(ExpenseContext);

  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const avgExpense = expenses.length ? totalExpenses / expenses.length : 0;

  const formatCurrency = (amount) =>
    `₹${amount.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  const cards = [
    {
      title: "Total Expenses",
      value: formatCurrency(totalExpenses),
      color: "from-red-400 to-pink-500",
      icon: <TrendingDown className="w-8 h-8 text-red-100" />,
    },
    {
      title: "Number of Expenses",
      value: expenses.length,
      color: "from-blue-400 to-indigo-500",
      icon: <ListOrdered className="w-8 h-8 text-blue-100" />,
    },
    {
      title: "Average Expense",
      value: formatCurrency(avgExpense),
      color: "from-green-400 to-emerald-500",
      icon: <Activity className="w-8 h-8 text-green-100" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`relative bg-gradient-to-r ${card.color} p-1 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300`}
        >
          <div className="bg-white rounded-2xl p-5 flex flex-col items-center justify-center text-center h-full">
            <div className="mb-3 bg-opacity-20 bg-gray-200 p-3 rounded-full">
              {card.icon}
            </div>
            <h3 className="font-semibold text-gray-600 text-lg">
              {card.title}
            </h3>
            <p className="text-2xl font-bold text-gray-900 mt-1">
              {card.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Summary;
