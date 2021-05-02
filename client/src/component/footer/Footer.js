import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Footer.scss";

function Footer(props) {
  return (
    <div className="footer">
      <nav>
        <ul className="footer__list">
          <li>
            <Link to="/FindSchools">FindSchools</Link>
          </li>
          <li>
            <Link to="/AboutMe">AboutMe</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Footer;
