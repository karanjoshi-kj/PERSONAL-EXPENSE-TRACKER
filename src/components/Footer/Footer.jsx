import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer-container text-center mt-12 text-sm text-gray-600">
            <hr className="border-gray-300 mb-4" />
            <div className="footer-content">
                <p className="footer-text">
                    © {new Date().getFullYear()}{" "}
                    <span className="font-semibold text-blue-700 hover:text-blue-500 cursor-pointer">
                        Karan Joshi
                    </span>{" "}
                    — Built with 💖 for smarter expense tracking
                </p>

                <div className="social-media-links mt-4 flex justify-center">
                    <a
                        href="https://www.linkedin.com/in/karanjoshi/"
                        className="social-icon text-blue-700 hover:text-blue-500 mx-3"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
                    <a
                        href="https://github.com/karanjoshi"
                        className="social-icon text-gray-600 hover:text-gray-400 mx-3"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-github"></i> GitHub
                    </a>
                    <a
                        href="https://twitter.com/karanjoshi"
                        className="social-icon text-blue-400 hover:text-blue-300 mx-3"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-twitter"></i> Twitter
                    </a>
                </div>

                <div className="user-count mt-6 text-lg font-semibold text-blue-700">
                    <p>Join 10,000+ users who are taking control of their finances!</p>
                </div>
            </div>

            <div className="currency-info mt-4 text-xs text-gray-500">
                <p>Track your expenses in Indian ₹ and manage your financial future with ease.</p>
            </div>
        </footer>
    );
};

export default Footer;
