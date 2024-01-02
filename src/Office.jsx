import React from "react";
import Navbar from "./Navbar";
import "./App.css";

const OfficeSection = () => {
  return (
    <div>
      <Navbar />
      <div className="price-section">
        <div>
          <img src="/assets/b12.jpg" alt="img 5" />
          <h1>Press Officer</h1>
          <h3>
            Do you have any questions about our company or our products? Our
            Press team will be happy to help you further. We look forward to
            discussing your needs with you. Call us or send us an e-mail.
          </h3>
        </div>
        <div className="office-section">
          <div className="office-card">
            <img src="/assets/laptopMan.jpeg" alt="img 6" />
            <div className="text-content">
              <h1>Agba Agba</h1>
              <p>
                Head of Corporate Brnd communications and government relations.
              </p>
              <span>Phone Number: +22987554624</span>
              <span>Email: Abga223@gmail.com</span>
            </div>
          </div>
          <div className="office-card">
            <img src="/assets/laptopMan.jpeg" alt="img 6" />
            <div className="text-content">
              <h1>Agba Agba</h1>
              <p>An overview of current Abisentry releases.</p>
              <span>Phone Number: +22987554624</span>
              <span>Email: Abga223@gmail.com</span>
            </div>
          </div>
          <div className="office-card">
            <img src="/assets/laptopMan.jpeg" alt="img 6" />
            <div className="text-content">
              <h1>Agba Agba</h1>
              <p>An overview of current Abisentry releases.</p>
              <span>Phone Number: +22987554624</span>
              <span>Email: Abga223@gmail.com</span>
            </div>
          </div>
          <div className="office-card">
            <img src="/assets/laptopMan.jpeg" alt="img 6" />
            <div className="text-content">
              <h1>Agba Agba</h1>
              <p>An overview of current Abisentry releases.</p>
              <span>Phone Number: +22987554624</span>
              <span>Email: Abga223@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeSection;
