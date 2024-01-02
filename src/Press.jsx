import React from "react";
import Navbar from "./Navbar";
import "./App.css";

const PressSection = () => {
  return (
    <div>
      <Navbar />
      <div className="price-section">
        <div>
          <img src="/assets/b12.jpg" alt="img 5" />
          <h1>
            Welcome to our press center, where we are dedicated ton keeping you
            informed about the latest developments, insights, and initiatives in
            the ever-evolving landscape of cybersecurity.
          </h1>
        </div>
        <div className="custom-press-section">
          <div className="custom-press-card">
            <img src="/assets/laptopMan.jpeg" alt="img 6" />
            <div className="custom-text-content">
              <h1>Press Releases</h1>
              <p>An overview of current Abisentry releases.</p>
              <a>Read More</a>
            </div>
          </div>

          <div className="custom-press-card">
            <img src="/assets/laptopMan.jpeg" alt="img 6" />
            <div className="custom-text-content">
              <h1>Press Officers</h1>
              <p>
                Our press team will be very happy to respond to inquiries
                quickly and comprehensively.
              </p>
              <a href="">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default  PressSection;

