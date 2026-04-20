import React from "react";
import "./About.css";

export default function HeroPage() {
  return (
          <div className="img">
    <div className="whole">
      <div className="title">
        <h1>ABOUT OUR WEBSITE:</h1>
      </div>

        <div className="para">
          <h1>
            A Mobile Suggestion Website is an online platform designed to help
            users choose the best smartphone based on their budget, usage needs,
            and preferences. The website allows users to enter their budget
            range and select categories such as gaming, camera, battery life,
            performance, or normal daily use. Based on these inputs, the system
            intelligently suggests the most suitable mobile phones available in
            the current market.
            <br /><br />
            The website provides clear specifications, key features, price
            comparisons, and highlights of each suggested mobile, making it easy
            for users to make informed decisions. It saves time, reduces
            confusion caused by too many options, and helps users find
            value-for-money smartphones without technical complexity.
          </h1>
        </div>
      </div>
    </div>
  );
}