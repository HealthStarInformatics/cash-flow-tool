import React, { useState } from "react";
import Incomes from "./Incomes";
import Expenses from "./Expenses";
import Summary from "./Summary";
import Recommendations from "./Recommendations";
import CFTNav from "./CFTNav";

import "../styles/CashFlowTool.scss";

const exampleExpenses = [
  { id: 123456789, amount: 344, category: "transportation" },
  { id: 987654321, amount: 123.21, category: "groceries" },
  { id: 887273717, amount: 44.22, category: "loan" }
];

const exampleInputs = {
  "123456789": { id: 123456789, amount: 344, category: "salary" },
  "987654321": { id: 987654321, amount: 123.21, category: "one-time" },
  "887273717": { id: 887273717, amount: 44.22, category: "hourly" }
};

const CashFlowTool = ({ match }) => {
  const [period, setPeriod] = useState("weekly");
  const [incomes, setIncomes] = useState(exampleInputs);
  const [expenses, setExpenses] = useState(exampleExpenses);

  let activeComponent;

  switch (match.params.section) {
    case "incomes":
      activeComponent = (
        <Incomes
          data={incomes}
          setData={setIncomes}
          period={period}
          setPeriod={setPeriod}
        />
      );
      break;
    case "expenses":
      activeComponent = (
        <Expenses
          data={expenses}
          setData={setExpenses}
          period={period}
          setPeriod={setPeriod}
        />
      );
      break;
    case "summary":
      activeComponent = (
        <Summary incomes={incomes} expenses={expenses} period={period} />
      );
      break;
    case "recommendations":
      activeComponent = <Recommendations />;
      break;
    default:
      activeComponent = null;
      break;
  }

  console.log("Period: ", period);

  return (
    <main id="cash-flow-tool">
      <h1 className="cft-title">Cash Flow Tool</h1>
      <CFTNav activeSection={match.params.section} />
      {activeComponent}
    </main>
  );
};

export default CashFlowTool;
