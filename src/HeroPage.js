import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeroPage.css";

const HeroPage = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-wrapper">
      {}
      <img
        src="https://static.vecteezy.com/system/resources/previews/025/068/115/non_2x/smartphone-mobile-phone-flat-style-cartoon-illustration-free-png.png"
        className="floating-phone phone-1"
        alt="phone"
      />
      <img
        src="https://static.vecteezy.com/system/resources/previews/025/068/115/non_2x/smartphone-mobile-phone-flat-style-cartoon-illustration-free-png.png"
        className="floating-phone phone-2"
        alt="phone"
      />
       <img
        src="https://static.vecteezy.com/system/resources/previews/025/068/115/non_2x/smartphone-mobile-phone-flat-style-cartoon-illustration-free-png.png"
        className="floating-phone phone-3"
        alt="phone"
      />
       <img
        src="https://static.vecteezy.com/system/resources/previews/025/068/115/non_2x/smartphone-mobile-phone-flat-style-cartoon-illustration-free-png.png"
        className="floating-phone phone-4"
        alt="phone"
      />

      {}
      <div className="ipad">
        <div className="ipad-camera"></div>

        <div className="ipad-content">
          <h1 className="hero-text">
            Discover <br />
            Compare <br />
            Own
          </h1>
        </div>

        <button
          className="start-btn"
          onClick={() => navigate("/home")}
        >
          Let’s-Start
        </button>
      </div>
    </div>
  );
};

export default HeroPage;