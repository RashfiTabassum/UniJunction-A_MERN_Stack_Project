import React, { useState } from "react";
import ss4 from "../photos/ss4.png";
import "./login.css";
import axios from "axios";
import { Link } from "react-router-dom";

const LOGIN = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [redirectUrl, setRedirectUrl] = useState("");
  const adminEmail = "admin@example.com";
  const adminPassword = "admin123";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === adminEmail && password === adminPassword) {
      // Redirect to admin profile page
      localStorage.setItem("isAdmin", "true"); // Set admin flag in local storage
      window.location.href = "/admin"; // Replace with your admin profile route
      return;
    }
  
    try {
      const response = await axios.post("http://localhost:5000/login-user", {
        email,
        password,
      });
  
      if (response.data.status === "ok") {
        const { token, role, userId, fname, lname, email, country, stat, profilePic,birthdate,facebookLink,instagramLink,institution,linkedinLink,fee } = response.data.data;
  
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
        localStorage.setItem("profilePic", profilePic);
        localStorage.setItem("institution",institution);
        localStorage.setItem("country", country);
  
        if (role === "mentor") {
          localStorage.setItem("mentorId", userId);
          localStorage.setItem("fname", fname);
          localStorage.setItem("lname", lname);
          localStorage.setItem("email", email);
          //localStorage.setItem("country", country);
          localStorage.setItem("stat", stat);
          localStorage.setItem("profilePic", profilePic);
          localStorage.setItem("birthday", birthdate);
          localStorage.setItem("facebook",facebookLink);
          localStorage.setItem("insta",instagramLink);
          localStorage.setItem("fee",fee);
          localStorage.setItem("linkedin",linkedinLink);
          setRedirectUrl("/mentoruserprofile");
        } else {
          localStorage.setItem("studentId", userId);
          localStorage.setItem("fname", fname);
          localStorage.setItem("lname", lname);
          localStorage.setItem("email", email);
          //localStorage.setItem("country", country);
          localStorage.setItem("stat", stat);
          localStorage.setItem("birthday",birthdate);
          localStorage.setItem("facebook",facebookLink);
          localStorage.setItem("insta",instagramLink);
          localStorage.setItem("linkedin",linkedinLink);
          localStorage.setItem("profilePic", profilePic);
          console.log(birthdate);
          console.log(facebookLink);
          setRedirectUrl("/studentsuserprofile");
        }
      } else {
        setError(response.data.error);
      }
    } catch (error) {
      setError("An error occurred during login.");
      console.error(error);
    }
  };
  

  // Redirect logic
  if (redirectUrl) {
    window.location.href = redirectUrl;
  }


  return (
    <div className="logi">
      <title>LogIn</title>
      <section className="background-radial-gradient overflow-hidden">
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10, marginTop: "-80px" }}>
              <h1 className="logoalo">UniJunction</h1>
              <img src={ss4} style={{ marginTop: 160, height: 400, width: 400 }} alt="UniJunction Logo" />
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong" />
              <div id="radius-shape-2" className="position-absolute shadow-5-strong" />
              <div className="cardlo bg-glass">
                <div className="cardlo-body px-4 py-5 px-md-5">
                  <form onSubmit={handleSubmit} style={{ marginTop: "-30px" }}>
                    {/* Email input */}
                    <div data-mdb-input-init className="form-outline mb-4" style={{ borderRadius: 10 }}>
                      <input
                        type="email"
                        id="form3Example3"
                        className="form-control"
                        placeholder="Email Address"
                        style={{ backgroundColor: "beige" }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    {/* Password input */}
                    <div data-mdb-input-init className="form-outline mb-4" style={{ borderRadius: 10 }}>
                      <input
                        type="password"
                        id="form3Example4"
                        className="form-control"
                        placeholder="Password"
                        style={{ backgroundColor: "beige" }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    {/* Checkbox */}
                    <span className="form-check d-flex justify-content-center mb-4">
                      <span>
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          defaultValue
                          id="form2Example33"
                          defaultChecked
                        />
                      </span>
                      <label className="form-check-label" htmlFor="form2Example33" style={{ color: "aliceblue" }}>
                        Remember Password
                      </label>
                    </span>
                    {/* Error message */}
                    {error && <div className="alert alert-danger" role="alert">{error}</div>}
                    {/* Submit button */}
                    <button type="submit" className="btnlo btnlo-primary btn-sm">
                      LogIn
                    </button>
                  </form>
                  {/* Register buttons */}
                  <div className="text-centerlo">
                    <Link to="/signup" style={{ textDecoration: "none" }}>
                      <p style={{ color: "aliceblue" }}>
                        Don't have an account? &nbsp; <span style={{ color: "aliceblue" }}>SignUp</span>
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LOGIN;
