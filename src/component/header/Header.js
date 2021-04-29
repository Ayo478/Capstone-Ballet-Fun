import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="navBar">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Barre">Barre</Link>
          </li>
          <li>
            <Link to="/Core">Core</Link>
          </li>
          <li>
            <Link to="/Workout">Workout</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
