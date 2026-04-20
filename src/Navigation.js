import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navigation.css";


function Navigation() {
  const navigate = useNavigate();
  return (
    <nav>
      <h1 onClick={()=>navigate("/")}>SpecAura</h1>
      <div className="content">
        <ul>
          <li>
            <NavLink to="/HeroPage" className="nav-link"></NavLink>
          </li>
          <li>
            <NavLink to="/home" className="nav-link">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/main" className="nav-link">MOBILE</NavLink>
          </li>
          <li>
            <NavLink to="/check" className="nav-link">CHECK</NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">ABOUT</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link">CONTACT</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;