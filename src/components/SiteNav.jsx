import React from "react";
import { Link } from "react-router-dom";
import "../styles/SiteNav.scss";

const SiteNav = () => (
  <nav id="siteNav">
    <span role="img" aria-label="dollar" className="logo icon">
      💵
    </span>
    <span className="title">
      <Link to="/">Digital Money Toolkit</Link>
    </span>
  </nav>
);

export default SiteNav;
