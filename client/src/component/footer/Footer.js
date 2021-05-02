import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Footer.scss";

function Footer(props) {
  return (
    <div className="footer">
      <nav>
        <ul className="footer__list">
          <li>
            <Link className="link" to="/FindSchools">
              Find Schools
            </Link>
          </li>
          <li>
            <Link className="link" to="/AboutMe">
              About Me
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Footer;
