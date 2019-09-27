import React from "react";
import Incomes from "./Incomes";
import Expenses from "./Expenses";
import Summary from "./Summary";
import Recommendations from "./Recommendations";

const renderSection = match => {
  switch (match.params.section) {
    case "incomes":
      return <Incomes />;
    case "expenses":
      return <Expenses />;
    case "summary":
      return <Summary />;
    case "recommendations":
      return <Recommendations />;
    default:
      return null;
  }
};

const CashFlowTool = ({ match }) => (
  <>
    <h1>CashFlowTool</h1>
    {renderSection(match)}
  </>
);

export default CashFlowTool;
