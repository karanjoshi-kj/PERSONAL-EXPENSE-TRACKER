import React, { useContext } from "react";
import { ExpenseContext } from "./context/ExpenseContext";
import CurrencySelector from "./components/CurrencySelector";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Charts from "./components/Charts";
import ExpenseCategoryChart from "./components/ExpenseCategoryChart";
const App = () => {
  const { totalBudget, getRemainingBudget } = useContext(ExpenseContext);

  return (
    <div className="app-container flex flex-col items-center p-6">
      <header className="header text-center mb-6 w-full">
        <h1 className="app-title text-4xl font-semibold text-gray-800 mb-4">
          <Header />
        </h1>
        <CurrencySelector />
        <div className="budget-info text-xl text-gray-600 mt-4">
          <h2>Total Budget: ₹{totalBudget}</h2>
          <h3>Remaining Budget: ₹{getRemainingBudget()}</h3>
        </div>
      </header>

      <div className="max-w-4xl mx-auto space-y-6">
        <ExpenseForm />
        <ExpenseList />
        <div className="grid md:grid-cols-2 gap-6">
          <ExpenseCategoryChart />
          <Charts />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
