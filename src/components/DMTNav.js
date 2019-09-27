import React from "react";
import { Link } from "react-router-dom";

const DMTNav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/tool/incomes">Cash Flow Tool</Link>
      </li>
    </ul>
  </nav>
);

export default DMTNav;
