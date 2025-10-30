import React, { useRef } from "react";
import axios from "../axiosConfig";
import { useNavigate } from "react-router-dom";

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
       if(!usernameValue || !firstnameValue  || !lastnameValue || !emailValue || !passwordValue){
        alert("Registared successfull , please login!")
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
      navigate("/login")
    } catch (error) {
      console.log("something went wrong")
      console.error( error.response);
    }
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <span>Username:</span>
          <input type="text" placeholder="username" ref={userNameDom} />
        </div>
        <br />
        <div>
          <span>First Name:</span>
          <input type="text" placeholder="first name" ref={firstNameDom} />
        </div>
        <br />
        <div>
          <span>Last Name:</span>
          <input type="text" placeholder="last name" ref={lastNameDom} />
        </div>
        <br />
        <div>
          <span>Email:</span>
          <input type="email" placeholder="email" ref={emailDom} />
        </div>
        <br />
        <div>
          <span>Password:</span>
          <input type="password" placeholder="password" ref={passwordDom} />
        </div>
        <br />
        <button type="submit">Register</button>
      </form>
    </section>
  );
}

export default Register;
