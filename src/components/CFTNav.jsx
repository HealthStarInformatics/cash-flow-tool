import React from "react";
import { Link } from "react-router-dom";

const isActive = (active, section) => (active === section ? "active" : null);

const CFTNav = ({ activeSection }) => (
  <nav id="cft-nav">
    <ul>
      <li className={isActive(activeSection, "incomes")}>
        <Link to="/tool/incomes">Incomes</Link>
      </li>
      <li className={isActive(activeSection, "expenses")}>
        <Link to="/tool/expenses">Expenses</Link>
      </li>
      <li className={isActive(activeSection, "summary")}>
        <Link to="/tool/summary">Summary</Link>
      </li>
      <li className={isActive(activeSection, "recommendations")}>
        <Link to="/tool/recommendations">Recommendations</Link>
      </li>
    </ul>
  </nav>
);

export default CFTNav;
