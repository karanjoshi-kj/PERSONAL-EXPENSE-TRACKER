import React, { createContext, useState } from "react";

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [budget, setBudget] = useState(null);
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  const getRemainingBudget = () => {
    const spent = expenses.reduce((acc, curr) => acc + curr.amount, 0);
    return budget ? budget - spent : 0;
  };
  return (
    <ExpenseContext.Provider
      value={{
        budget,
        setBudget,
        expenses,
        addExpense,
        deleteExpense,
        getRemainingBudget,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

