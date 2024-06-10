import React from "react";
import './Footer.css'; // Assuming you want to use CSS for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>Email: genworkmomentum@gmail.com</p>
                    <p>Phone: +91 98766 23423</p>
                    <p>Address: Madhapur, Hyd</p>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <a href="/about">About Us</a>
                    <a href="/services">Services</a>
                    <a href="/contact">Contact</a>
                    <a href="/privacy">Privacy Policy</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Gen Work Momentum. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
