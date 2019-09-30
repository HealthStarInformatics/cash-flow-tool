import React from "react";
import { Link } from "react-router-dom";
import "../styles/SiteNav.scss";

const SiteNav = () => (
  <nav id="siteNav">
    <ul className="left">
      <li className="logo">
        <span role="img" aria-label="dollar" className="icon">
          💵
        </span>
      </li>
      <li className="title">Digital Money Toolkit</li>
    </ul>
    <ul className="right">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/tool/incomes">Cash Flow Tool</Link>
      </li>
    </ul>
  </nav>
);

export default SiteNav;
