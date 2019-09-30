import React from "react";
import { Link } from "react-router-dom";

const CFTNav = () => (
  <nav id="cft-nav">
    <ul>
      <li>
        <Link to="/tool/incomes">Incomes</Link>
      </li>
      <li>
        <Link to="/tool/expenses">Expenses</Link>
      </li>
      <li>
        <Link to="/tool/summary">Summary</Link>
      </li>
      <li>
        <Link to="/tool/recommendations">Recommendations</Link>
      </li>
    </ul>
  </nav>
);

export default CFTNav;
