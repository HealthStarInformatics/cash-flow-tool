import React from "react";
import FormNav from "./shared/FormNav";

const Recommendations = props => (
  <div className="tool-section summary">
    <h2 className="tool-section-title">Next Steps</h2>
    <p className="tool-section-description">
      Here are a few actionable items to help better manage your weekly cash
      flow.
    </p>
    <div className="next-steps debt">
      <h2 className="title">Debt Management</h2>
      <p className="description">
        You have a <span>loan</span> payment. Carrying credit card or loan debt
        can cost you more money over time.
      </p>
      <div className="resource">
        <h3>Repayment Strategies</h3>
        <p className="details">
          Here are some strategies for taking control of your debt.
        </p>
        <button className="resource-link">Learn How To Handle Debt</button>
      </div>
    </div>
    <div className="next-steps investment">
      <h2 className="title">Investments</h2>
      <p className="description">
        You've got an <span>income</span> surplus of <span>$489.38</span>. Here
        are some resources to help put that money to work for you.
      </p>
      <div className="resource">
        <h3>Save for Retirement</h3>
        <p className="details">
          Run the numbers to see how you can better meet your retirement goals.
        </p>
        <button className="resource-link">Go To Retirement Calculator</button>
      </div>
    </div>
    <FormNav back="/tool/summary" />
  </div>
);
export default Recommendations;
