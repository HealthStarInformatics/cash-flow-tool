import React from "react";
import Incomes from "./Incomes";
import Expenses from "./Expenses";
import Summary from "./Summary";
import Recommendations from "./Recommendations";
import CFTNav from "./CFTNav";

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
  <main id="cash-flow-tool">
    <h1>Cash Flow Tool</h1>
    <CFTNav />
    {renderSection(match)}
  </main>
);

export default CashFlowTool;
