import React from "react";
import Navbar from "./Navbar";
import "./App.css";

const ContactSection = () => {
  return (
    <div>
      <Navbar />
      <section id="contact-section">
            <div className="contact-container">
                <div className="contact-content">
                    <h1>Got a problem to solve?</h1>
                    <p data-content="Send an email and let's tackle the problem together.">Send an email and let's
                        tackle the problem together. </p>
                </div>
                <div className="contact-form">
                    <form action="https://formcarry.com/s/LzI10ldd6N" method="post" name="contact">
                        <div className="form-group">
                            <label for="name">Name:</label>
                            <input type="text" id="name" name="name" class="form-control" required />
                        </div>
                        <div className="form-group">
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" class="form-control" required />
                        </div>
                        <div className="form-group">
                            <label for="message">Message:</label>
                            <textarea id="message" name="message" class="form-control" rows="5" required></textarea>
                        </div>
                        <div id="app">
                            <button type="submit" id="send-btn">Send</button>
                            <div id="emoji"><i class="fa fa-fighter-jet"></i></div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
  );
};

export default  ContactSection;
