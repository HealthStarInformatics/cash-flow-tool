import React from "react";
import "../styles/MoreTools.scss";

const ToolCard = ({ title, description, logo, logoLabel }) => {
  return (
    <div className="tool-card">
      <span className="logo" role="img" aria-label={logoLabel}>
        {logo}
      </span>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <button className="launch-tool">Get Started</button>
    </div>
  );
};
const MoreTools = () => (
  <section id="more-tools">
    <h1 className="title">More from the Toolkit</h1>
    <p>
      Life comes at you fast. We're here to help you plan for the journey ahead.
      DMDT offers more tools to help you reach your financial destination.
    </p>
    <div className="tool-card-container">
      <ToolCard
        title="Car Loan Repayment"
        description="Calculate monthly payment schedules to help pay down your car loan."
        logo="🚘"
        logoLabel="car"
      />
      <ToolCard
        title="Student Loan Repayment"
        description="Calculate monthly payment schedules to help pay down your student loans."
        logo="👩‍🎓"
        logoLabel="student"
      />
    </div>
  </section>
);

export default MoreTools;
