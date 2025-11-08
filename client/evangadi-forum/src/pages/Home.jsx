import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../axiosConfig";
import icon from "../assets/evangadiimage.png";
import "../App.css";
import "./home.css";

function Home() {
  const emailDom = useRef();
  const passwordDom = useRef();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const emailValue = emailDom.current.value;
    const passwordValue = passwordDom.current.value;

    if (!emailValue || !passwordValue) {
      alert("Please fill in all fields!");
      return;
    }

    try {
      const { data } = await axios.post("/users/login", {
        email: emailValue,
        password: passwordValue,
      });

      alert("Login successful!");
      localStorage.setItem("token", data.token);
      navigate("/dashboard"); // Redirect to dashboard instead of home
      console.log(data);
    } catch (error) {
      alert(error?.response?.data?.msg || "Login failed!");
      console.error(error.response);
    }
  }

  return (
    <div className="landing-container">
      {/* ===== Header ===== */}
      <header className="home-header">
        <img src={icon} alt="Evangadi Logo" className="logo" />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/how-it-works">How it Works</Link>
          <Link to="/login">
            <button className="sign-btn">SIGN IN</button>
          </Link>
        </nav>
      </header>

      {/* ===== Main Section ===== */}
      <main className="main-section">
        <div className="login-box">
          <form onSubmit={handleSubmit}>
            <h2>Login to your account</h2>
            <p>
              Don’t have an account? <Link to="/register">Create a new account</Link>
            </p>
            <input
              type="email"
              placeholder="Your Email"
              ref={emailDom}
              required
            />
            <input
              type="password"
              placeholder="Your Password"
              ref={passwordDom}
              required
            />
            <button type="submit" className="submit-btn">
              Submit
            </button>
            <div className="register-wrap">
            <p>New here? <Link to="/register" className="register-link">Register Now</Link></p>
          </div>
          </form>
        </div>

        <div className="about-section">
          <h4>About</h4>
          <h2>Evangadi Networks Q&A</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quidem
            voluptate officiis beatae nobis pariatur omnis facere accusamus
            laboriosam hic, adipisci vero reiciendis.
          </p>
          <p>
            Ullam ipsum, provident minus laudantium esse soluta maiores nostrum
            nisi sunt perferendis dolorum.
          </p>
          <button className="how-btn">HOW IT WORKS</button>
        </div>
      </main>

      {/* ===== Footer ===== */}
      <footer className="footer">
        <div>
          <img src={icon} alt="Evangadi" className="footer-logo" />
          <div className="socials">
            <i className="fa-brands fa-facebook"> facebook</i>
            <i className="fa-brands fa-instagram"> instagram</i>
            <i className="fa-brands fa-youtube"> youtube</i>
          </div>
        </div>

        <div>
          <h4>Useful Links</h4>
          <Link to="/how-it-works">How it works</Link><br /> <br />
          <Link to="/terms">Terms of Service</Link><br /> <br />
          <Link to="/privacy">Privacy Policy</Link>
        </div>

        <div>
          <h4>Contact Info</h4>
          <p>Evangadi Networks</p>
          <p>support@evangadi.com</p>
          <p>+1-202-386-2702</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
