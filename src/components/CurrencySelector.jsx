import React from "react";

const CurrencySelector = () => {
    return (
        <div className="currency-selector mb-4">
            <label htmlFor="currency" className="mr-2 font-semibold">
                Currency:
            </label>
            <select id="currency" name="currency" className="border rounded px-2 py-1">
                <option value="INR">₹ INR</option>
                <option value="USD">$ USD</option>
                <option value="EUR">€ EUR</option>
            </select>
        </div>
    );
};

export default CurrencySelector;
