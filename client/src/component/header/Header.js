import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import "../../App.css";
function Header(props) {
  return (
    <div className="navBar">
      <nav>
        <ul className="navBar__list">
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/Barre">
              Barre
            </Link>
          </li>
          <li>
            <Link className="link" to="/Core">
              Core
            </Link>
          </li>
          <li>
            <Link className="link" to="/Workout">
              Workout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
