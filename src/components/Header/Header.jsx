import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="hero-header">
            <div className="hero-content">
                <h1 className="hero-title animate-text-gradient">
                    💰 CashFlowr
                </h1>
                <p className="hero-subtitle">
                    Track Your Expenses, Save More, and Grow Wealth!
                </p>
                <div className="cta-container">
                    <button className="cta-button">
                        Start Tracking ₹ Your Expenses
                    </button>
                </div>
                <div className="hashtag-container">
                    <span className="hashtag">#TrackYour₹ #SmartSavings</span>
                </div>
                <div className="currency-explanation">
                    <p>See your expenses in Indian ₹ and manage your finances smarter with CashFlowr.</p>
                </div>
            </div>
        </header>
    );
}

export default Header;
