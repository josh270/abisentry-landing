import React from "react";
import Navbar from "./Navbar";
import "./App.css";

const PricingSection = () => {
  return (
    <div>
      <Navbar />

      <div className="price-section">
        <h1>Compare plans and pricing</h1>
        <p>
          Try Abisentry free version to see our capabilities via our web app. To
          unlock the full potential of silent marking in the background to reach
          out to us about our enterprise plan. The enterprise version of our
          software integrates directly with your exchange or google workspace
          instances to allow silent marking without using our client-side web
          app.
        </p>
        <div className="pricing-section">
          <div className="pricing-card">
            <h2 className="pricing-title">Basic Plan</h2>
            <p className="pricing-price">$19.99/month</p>
            <ul className="pricing-features">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <button className="pricing-button">Get Started</button>
          </div>

          <div className="pricing-card">
            <h2 className="pricing-title">Standard Plan</h2>
            <p className="pricing-price">$39.99/month</p>
            <ul className="pricing-features">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <button className="pricing-button">Get Started</button>
          </div>

          <div className="pricing-card">
            <h2 className="pricing-title">Premium Plan</h2>
            <p className="pricing-price">$59.99/month</p>
            <ul className="pricing-features">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <button className="pricing-button">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
