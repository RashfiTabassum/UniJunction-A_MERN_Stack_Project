import React, { useEffect, useState } from "react";
import "./pay.css";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import confetti from "canvas-confetti";
import axios from "axios";

const PAYMENT = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const mentorId = searchParams.get("mentorId");
  const mentorName = searchParams.get("mentorName");
  const mentorFee = searchParams.get("mentorFee");
  const studentName = `${localStorage.getItem("fname")} ${localStorage.getItem("lname")}`;
  const navigate = useNavigate();

  // State to store parsed fee
  const [parsedFee, setParsedFee] = useState(null);

  useEffect(() => {
    // Parse mentorFee when component mounts
    const parsed = parseFloat(mentorFee.trim().replace(/\$/g, ""));
    if (!isNaN(parsed)) {
      setParsedFee(parsed);
    }
  }, [mentorFee]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const studentId = localStorage.getItem("studentId");
    const studentName = `${localStorage.getItem("fname")} ${localStorage.getItem("lname")}`;
    if (!studentId) {
      alert("Student ID not found. Please log in again.");
      return;
    }
    
    const fee = parsedFee + 8; // Including platform fee
    console.log("Sending request with data:", { mentorId, studentId, fee, studentName });
    try {
      const response = await axios.post("http://localhost:5000/book-lesson", {
        mentorId,
        mentorName, // Add mentorName to the payload
        studentId,
        studentName, // Add studentName to the payload
        fee
      });

      if (response.data.status === "ok") {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });

        document.getElementById("popup").style.display = "block";
      } else {
        alert("Error booking lesson. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred during booking.");
    }
  };

  useEffect(() => {
    const bookButton = document.getElementById("book-button");
    const closeButton = document.querySelector(".close-button");

    bookButton.addEventListener("click", handleSubmit);

    closeButton.addEventListener("click", function () {
      document.getElementById("popup").style.display = "none";
      navigate("/studentsuserprofile"); // Navigate to mentor list after closing popup
    });

    const handleWindowClick = (event) => {
      if (event.target === document.getElementById("popup")) {
        document.getElementById("popup").style.display = "none";
      }
    };
    
    window.addEventListener("click", handleWindowClick);

    return () => {
      bookButton.removeEventListener("click", handleSubmit);
      closeButton.removeEventListener("click", function () {
        document.getElementById("popup").style.display = "none";
        navigate("/studentsuserprofile");
      });
      window.removeEventListener("click", handleWindowClick);
    };
  }, [handleSubmit, navigate]);

  // Display logic for mentorFee
  const displayFee = parsedFee ? `${parsedFee.toFixed(2)} USD` : "N/A";
  const totalFee = parsedFee ? `${(parsedFee + 8).toFixed(2)} USD` : "N/A";

  return (
    <div className="payment-container">
      <div className="checkout-container">
        <div className="left-side">
          <div className="text-box">
            <h1 className="home-heading">UniJunction</h1>
            <p className="home-price">
              <em>Mentor ID: {mentorId}</em>
            </p>
            <p className="home-price">
              <em>Mentor Name: {mentorName}</em>
            </p>
            <p className="home-desc">
              <em>Saturday </em> <em>14:00 to 15:00</em>
            </p>
          </div>
        </div>
        <div className="right-side">
          <div className="receipt">
            <h2 className="receipt-heading">Receipt Summary</h2>
            <div>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Course Charge</td>
                    <td className="price">{displayFee}</td>
                  </tr>
                  <tr>
                    <td>Platform Fee:</td>
                    <td className="price">8.00 USD</td>
                  </tr>
                  <tr className="total">
                    <td>Total</td>
                    <td className="price">{totalFee}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="payment-info">
            <h3 className="payment-heading">Payment Information</h3>
            <form className="form-box" id="payment-form">
              <div>
                <label htmlFor="full-name">Full Name</label>
                <div id="student-name-box" name="student-name-box">{studentName}</div>

              </div>
              <div>
                <label htmlFor="credit-card-num">
                  Card Number
                  <span className="card-logos">
                    <i className="card-logo fa-brands fa-cc-visa" />
                    <i className="card-logo fa-brands fa-cc-amex" />
                    <i className="card-logo fa-brands fa-cc-mastercard" />
                    <i className="card-logo fa-brands fa-cc-discover" />
                  </span>
                </label>
                <input id="credit-card-num" name="credit-card-num" placeholder="1111-2222-3333-4444" required type="text" />
              </div>

              <button className="btn" id="book-button" type="button">
                <i className="fa-solid fa-lock" /> Book Securely
              </button>
            </form>
            <p className="footer-text">
              <i className="fa-solid fa-lock" />
              Your credit card information is encrypted
            </p>
          </div>
        </div>
      </div>
      <div id="popup" className="popup">
        <div className="popup-content">
          <div className="tick-mark-container">
            <i className="fa fa-check-circle tick-mark" />
          </div>
          <Link to="/studentsuserprofile" className="close-button" style={{ textDecoration: "none" }}>
            ×
          </Link>
          <h2 style={{ marginTop: 75 }}>Booking Confirmed!</h2>
          <p style={{ marginTop: 50, fontSize: 14 }}>Thank you for your payment.</p>
          <p style={{ marginTop: 10, fontSize: 16, fontWeight: "bold" }}>Stay Tuned on Your Email for Mentor's Class Link!</p>
        </div>
      </div>
    </div>
  );
};

export default PAYMENT;
