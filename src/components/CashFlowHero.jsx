import React from "react";
import { Link } from "react-router-dom";
import "../styles/CashFlowHero.scss";

const CashFlowHero = () => (
  <div className="cash-flow-hero">
    <span role="img" aria-label="dollar" className="icon">
      💵
    </span>
    <h2 className="title">Cash Flow Tool</h2>
    <h3 className="tagline">Income management for better outcomes</h3>
    <p className="description">
      Useful recommendations, based on your unique situation, to help improve
      your financial well-being.
    </p>
    <Link to="/tool/incomes">
      <button className="launch-tool">Get Started</button>
    </Link>
  </div>
);

export default CashFlowHero;
