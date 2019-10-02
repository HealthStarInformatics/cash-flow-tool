import React from "react";
import Incomes from "./Incomes";
import Expenses from "./Expenses";
import Summary from "./Summary";
import Recommendations from "./Recommendations";
import CFTNav from "./CFTNav";

import "../styles/CashFlowTool.scss";

export const CashFlowContext = new React.createContext();

const exampleExpenses = {
  "123456789": { id: 123456789, amount: 123, category: "transportation" },
  "987654321": { id: 987654321, amount: 321, category: "groceries" },
  "987654322": { id: 987654322, amount: 112, category: "groceries" },
  "887273717": { id: 887273717, amount: 44.22, category: "loan" }
};

const exampleIncomes = {
  "123456789": { id: 123456789, amount: 111, category: "salary" },
  "987654321": { id: 987654321, amount: 222.21, category: "one-time" },
  "987654322": { id: 987654322, amount: 12, category: "one-time" },
  "887273717": { id: 887273717, amount: 44.22, category: "hourly" }
};

class CashFlowTool extends React.Component {
  state = {
    incomes: exampleIncomes,
    expenses: exampleExpenses,
    period: "weekly"
  };

  activeComponent = section => {
    switch (section) {
      case "expenses":
        return <Expenses />;
      case "summary":
        return <Summary />;
      case "recommendations":
        return <Recommendations />;
      default:
        return <Incomes />;
    }
  };

  render() {
    let section = this.props.match.params.section;

    const contextObject = {
      ...this.state,
      update: this.setState.bind(this)
    };

    return (
      <CashFlowContext.Provider value={contextObject}>
        <main id="cash-flow-tool">
          <h1 className="cft-title">Cash Flow Tool</h1>
          <CFTNav activeSection={section} />
          {this.activeComponent(section)}
        </main>
      </CashFlowContext.Provider>
    );
  }
}

export default CashFlowTool;
