import React, { useState, useEffect } from "react";
import { AlignJustify, User } from "lucide-react";
import "./style.css";
import { Link } from "react-router-dom";
import admin from '../../rashfi_compo/photos/admin1.jpg';

export default function Navbarr() {
  const [profilePic, setProfilePic] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedRole = localStorage.getItem("role");
    const storedProfilePic = localStorage.getItem("profilePic");
    const isAdmin = localStorage.getItem("isAdmin");
     if (isAdmin) {
        setRole("admin");
        //return;
      }

    else if (token ) {
      // if (isAdmin) {
      //   setRole("admin");
      // } else 
      if (storedRole && storedProfilePic) {
      setRole(storedRole);
      setProfilePic(storedProfilePic);
      }
    }
  }, []);

  return (
    <div className="nava">
      <h1 className="logoa">UniJunction</h1>

      <ul className="optiona">
        <li className="activea">
          <Link to="/" className="aaa">
            Home
          </Link>
        </li>
        <li>
          <Link to="/aboutUs" className="aaa">
            About
          </Link>
        </li>
        <li>
          <Link to="/mentorlist" className="aaa">
            Mentors
          </Link>
        </li>

        
      </ul>

      <div className="menufaa">
        <AlignJustify />
      </div>

      <div className="userlogoa">
      <div className="userlogo-innera">
          {
          role === "admin" ? (
            <Link to="/admin" style={{ textDecoration: "none", color: "white" }}>
              <img
                src={admin}
                alt="Admin Profile"
                style={{ width: 40, height: 40, borderRadius: "50%" }}
              />
            </Link>
          ) 
          :
          profilePic ? (
            <Link
              to={role === "mentor" ? "/mentoruserprofile" : "/studentsuserprofile"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <img
                src={`http://localhost:5000/images/${profilePic}`}
                alt="Profile"
                className="profile-pic"
                style={{ width: 40, height: 40, borderRadius: "50%" }}
              />
            </Link>
          ) : (
            <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
              <User />
            </Link>
          )}
        </div>

      </div>
    </div>
  );
}
