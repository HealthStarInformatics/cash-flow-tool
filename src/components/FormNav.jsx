import React from "react";
import { Link } from "react-router-dom";

const FormNav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/tool/incomes">INCOMES</Link>
      </li>
      <li>
        <Link to="/tool/expenses">EXPENSES</Link>
      </li>
      <li>
        <Link to="/tool/summary">SUMMARY</Link>
      </li>
      <li>
        <Link to="/tool/recommendations">RECOMMENDATIONS</Link>
      </li>
    </ul>
  </nav>
);

export default FormNav;
