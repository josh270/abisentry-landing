import React from "react";
import Navbar from "./Navbar";
import "./App.css";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Navbar />

      <div className="about-section">
        <div className="about-content">
          <h1 className="about-title">About Us</h1>
          <p className="about-subtitle">Trust in a name</p>
          <p className="about-description">
            Welcome to Abisentry, where cybersecurity meets innovation. We are a
            leading force in the realm of digital defense, committed to
            providing unparalleled protection in an ever-evolving landscape of
            cyber threats.
          </p>
        </div>
      </div>

      <div className="mission-section">
        <div className="about-content">
          <h1 className="about-title">Our Mission</h1>
          <p className="about-description">
            Our mission is clear: to safeguard the digital world. We are
            dedicated to empowering businesses and individuals with cutting-edge
            cybersecurity solutions that transcend expectations. In an era where
            data is paramount, our mission is to fortify the pillars of online
            security and resilience.
          </p>
        </div>
      </div>
      <div className="about-section">
        <div className="about-content">
          <h1 className="about-title">Our Values</h1>
          <div className="values-container">
            <div className="value-item">
              <img src="/assets/microsoft.png" alt="img 1" />
              <p className="value-description">Innovation</p>
              <p className="">
                We thrive on innovation, constantly pushing the boundaries of
                what's possible in cybersecurity landscape. Our solutions are
                not just reactive; they are proactive and adaptive, staying
                ahead of emerging threats.
              </p>
            </div>
            <div className="value-item">
              <img src="/assets/padlock.png" alt="Value 2" />
              <p className="value-description">Client-centric Approach</p>
              <p className="">
                Our clients are at the heart of everything we do. We take the
                time to understand their unique challenges and craft customized
                solutions that align with their business objectives
              </p>
            </div>
            <div className="value-item">
              <img src="/assets/cloud-computing.png" alt="Value 3" />
              <p className="value-description">Comprehensive Solutions</p>
              <p className="">
                From robust network security to advanced threat detection and
                incident response, we offer a comprehensive suite of
                cybersecurity services tailored to meet the diverse needs of our
                clients.
              </p>
            </div>
          </div>
        </div>
        <div className="focus-section">
          <div className="focus-content">
            <img src="/assets/padlock.png" alt="img 1" />
            <div className="text-content">
              <h1 className="about-title">Our Focus</h1>
              <p className="about-description">
                Our focus on cybersecurity goes beyond protection; it's about
                empowerment. We are committed to securing your digital future by
                combining innovation, customization, and a dedication to
                excellence
              </p>
            </div>
          </div>
        </div>
        <div className="focus-section">
          <div className="focus-content">

            <div className="text-content">
              <h1 className="about-title">The problems Abisentry solved</h1>
              <p className="about-description">
                Our focus on cybersecurity goes beyond protection; it's about
                empowerment. We are committed to securing your digital future by
                combining innovation, customization, and a dedication to
                excellence
              </p>
            </div>
            <img src="/assets/padlock.png" alt="img 1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

