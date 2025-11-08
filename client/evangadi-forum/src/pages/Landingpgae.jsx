import React from "react";
import icon from "../assets/evangadiimage.png";
import "./home.css";

function Landingpgae() {
  return (
    <div className="landing-container">
      {/* ===== Header ===== */}
      <header className="home-header">
        <img src={icon} alt="Evangadi Logo" className="logo" />
        <nav>
          <a href="#">Home</a>
          <a href="#">How it Works</a>
          <button className="sign-btn">SIGN IN</button>
        </nav>
      </header>

      {/* ===== Main Section ===== */}
      <main className="main-section">
        <div className="login-box">
          <h2>Login to your account</h2>
          <p>
            Don’t have an account? <a href="#">Create a new account</a>
          </p>
          <input type="email" placeholder="Your Email" />
          <input type="password" placeholder="Your Password" />
          <button className="submit-btn">Submit</button>
          <a href="#">Create an account?</a>
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
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>

        <div>
          <h4>Useful Links</h4>
          <p>How it works</p>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
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

export default Landingpgae;