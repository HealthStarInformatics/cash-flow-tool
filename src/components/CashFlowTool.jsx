import React from "react";
import { isEqual } from "lodash";
import Incomes from "./Incomes";
import Expenses from "./Expenses";
import Summary from "./Summary";
import Recommendations from "./Recommendations";
import CFTNav from "./CFTNav";
import { getFromStorage, saveToStorage } from "../services/storageServices";

import "../styles/CashFlowTool.scss";

export const CashFlowContext = new React.createContext();

const exampleExpenses = {
  "123456789": { id: 123456789, amount: 123.21, category: "transportation" },
  "987654321": { id: 987654321, amount: 321.31, category: "groceries" },
  "987654322": { id: 987654322, amount: 112.41, category: "groceries" },
  "887273717": { id: 887273717, amount: 44.22, category: "loan" }
};

const exampleIncomes = {
  "123456789": { id: 123456789, amount: 111.11, category: "salary" },
  "987654321": { id: 987654321, amount: 222.21, category: "one-time" },
  "987654322": { id: 987654322, amount: 12.34, category: "one-time" },
  "887273717": { id: 887273717, amount: 44.02, category: "hourly" }
};

class CashFlowTool extends React.Component {
  state = {
    incomes: exampleIncomes,
    expenses: exampleExpenses,
    period: "weekly"
  };

  componentDidMount() {
    const incomes = getFromStorage("cft-incomes");
    if (incomes) this.setState({ incomes });

    const expenses = getFromStorage("cft-expenses");
    if (expenses) this.setState({ expenses });

    const period = getFromStorage("cft-period");
    if (period) this.setState({ period });
  }

  componentDidUpdate(prevProps, prevState) {
    let stateKey;

    ["cft-incomes", "cft-expenses", "cft-period"].forEach(key => {
      stateKey = key.split("-")[1];

      if (!isEqual(prevState[stateKey], this.state[stateKey])) {
        saveToStorage(key, this.state[stateKey]);
      }
    });
  }

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
