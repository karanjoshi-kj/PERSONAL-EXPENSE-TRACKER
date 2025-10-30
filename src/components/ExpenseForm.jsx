import React, { useState, useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const ExpenseForm = () => {
  const { addExpense, budget, setBudget } = useContext(ExpenseContext);

  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "",
  });

  const [tempBudget, setTempBudget] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.amount || !formData.category) {
      alert("⚠️ Please fill all fields!");
      return;
    }

    const now = new Date();
    const formattedDate = now.toLocaleDateString("en-IN");
    const formattedTime = now.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    });

    addExpense({
      ...formData,
      amount: parseFloat(formData.amount),
      date: formattedDate,
      time: formattedTime,
    });

    setFormData({ title: "", amount: "", category: "" });
  };

  const handleBudgetSubmit = (e) => {
    e.preventDefault();
    if (!tempBudget || parseFloat(tempBudget) <= 0) {
      alert("⚠️ Please enter a valid budget!");
      return;
    }
    setBudget(parseFloat(tempBudget));
  };

  const categories = [
    "Food",
    "Travel",
    "Shopping",
    "Bills",
    "Entertainment",
    "Health",
    "Education",
    "Other",
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-100 to-blue-50 p-6 rounded-2xl shadow-lg mb-6 transition-all duration-300 hover:shadow-2xl">
      <form
        onSubmit={handleBudgetSubmit}
        className="mb-8 bg-white/60 backdrop-blur-lg p-4 rounded-xl border border-gray-200 shadow-sm"
      >
        <h2 className="text-2xl font-bold text-gray-700 mb-4 flex items-center gap-2">
          💸 Set Your Budget
        </h2>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <input
            type="number"
            placeholder="Enter total budget"
            value={budget ? budget : tempBudget}
            onChange={(e) => setTempBudget(e.target.value)}
            disabled={!!budget}
            className={`w-full sm:flex-1 border-2 border-gray-200 p-3 rounded-md text-gray-700 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition ${budget ? "bg-gray-100 cursor-not-allowed" : "bg-white"
              }`}
          />
          {!budget ? (
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-green-400 to-green-500 text-white font-semibold rounded-md shadow hover:scale-105 active:scale-95 transition"
            >
              Save Budget
            </button>
          ) : (
            <span className="text-green-600 font-semibold text-lg animate-pulse">
              ✅ Budget Set
            </span>
          )}
        </div>
      </form>
      <div
        className={`transition-all duration-500 ${!budget ? "opacity-40 blur-sm pointer-events-none" : "opacity-100 blur-0"
          }`}
      >
        <form
          onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur-md p-5 rounded-xl shadow-md border border-gray-100"
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            ➕ Add New Expense
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="title"
              placeholder="Expense Title"
              value={formData.title}
              onChange={handleChange}
              className="border border-gray-200 p-3 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              value={formData.amount}
              onChange={handleChange}
              className="border border-gray-200 p-3 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
            />
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="border border-gray-200 p-3 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <div className="border border-gray-200 p-3 rounded-md bg-gray-50 text-gray-600">
              <p className="text-sm">
                <strong>📅 Date:</strong>{" "}
                {new Date().toLocaleDateString("en-IN")}
              </p>
              <p className="text-sm mt-1">
                <strong>⏰ Time:</strong>{" "}
                {new Date().toLocaleTimeString("en-IN", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-md shadow-md hover:scale-[1.03] active:scale-95 transition"
          >
            💾 Add Expense
          </button>
        </form>
      </div>
    </div>
  );
};

export default ExpenseForm;
