import React, { useRef } from "react";
import axios from "../axiosConfig";
import { useNavigate } from "react-router-dom";
import "./register.css"; // make sure to import your CSS

function Register() {
  const navigate = useNavigate();
  const userNameDom = useRef();
  const firstNameDom = useRef();
  const lastNameDom = useRef();
  const emailDom = useRef();
  const passwordDom = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const usernameValue = userNameDom.current.value;
      const firstnameValue = firstNameDom.current.value;
      const lastnameValue = lastNameDom.current.value;
      const emailValue = emailDom.current.value;
      const passwordValue = passwordDom.current.value;

      if (!usernameValue || !firstnameValue || !lastnameValue || !emailValue || !passwordValue) {
        alert("Please fill in all fields!");
        return;
      }

      await axios.post("/users/register", {
        username: usernameValue,
        firstname: firstnameValue,
        lastname: lastnameValue,
        email: emailValue,
        password: passwordValue,
      });

      console.log("Registration successful!");
      alert("Registered successfully! Please login.");
      navigate("/login");
    } catch (error) {
      console.log("Something went wrong");
      console.error(error.response);
      alert("Registration failed. Please try again.");
    }
  }

  return (
    <section className="register-section">
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <span className="form-label">Username:</span>
          <input type="text" placeholder="username" ref={userNameDom} className="form-input" />
        </div>

        <div className="form-group">
          <span className="form-label">First Name:</span>
          <input type="text" placeholder="first name" ref={firstNameDom} className="form-input" />
        </div>

        <div className="form-group">
          <span className="form-label">Last Name:</span>
          <input type="text" placeholder="last name" ref={lastNameDom} className="form-input" />
        </div>

        <div className="form-group">
          <span className="form-label">Email:</span>
          <input type="email" placeholder="email" ref={emailDom} className="form-input" />
        </div>

        <div className="form-group">
          <span className="form-label">Password:</span>
          <input type="password" placeholder="password" ref={passwordDom} className="form-input" />
        </div>

        <button type="submit" className="form-button">Register</button>

        <a href="/login" className="form-link">Already have an account? Login</a>
      </form>
    </section>
  );
}

export default Register;
