import { Link, useNavigate } from "react-router-dom";
import axios from "../axiosConfig";
import { useRef } from "react";
import "./Login.css"; 

function Login() {
  const emailDom = useRef();
  const passwordDom = useRef();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const emailValue = emailDom.current.value;
      const passwordValue = passwordDom.current.value;

      if (!emailValue || !passwordValue) {
        alert("Please fill in all fields!");
        return;
      }

      const { data } = await axios.post("/users/login", {
        email: emailValue,
        password: passwordValue,
      });

      alert("Login successful!");
      localStorage.setItem("token", data.token);
      navigate("/");
      console.log(data);
    } catch (error) {
      alert(error?.response?.data?.msg);
      console.error(error.response);
    }
  }

  return (
    <section className="login-section">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Login to your account</h2>

        <div className="form-group">
          <span className="form-label">Email:</span>
          <input
            type="email"
            placeholder="Your Email"
            ref={emailDom}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <span className="form-label">Password:</span>
          <input
            type="password"
            placeholder="Your Password"
            ref={passwordDom}
            className="form-input"
          />
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>
        <Link to={'/register'}>register</Link>
      </form>
    </section>
  );
}

export default Login;
