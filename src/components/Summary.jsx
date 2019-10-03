import React, { useContext } from "react";
import FormNav from "./shared/FormNav";
import { SummaryTable } from "./SummaryTable";
import { CashFlowContext } from "./CashFlowTool";
import { NetCashFlow } from "./NetCashFlow";
import { totalByCategory } from "../services/currencyServices";

const Summary = () => {
  const { incomes, expenses, period } = useContext(CashFlowContext);

  return (
    <div className="tool-section summary">
      <h2 className="tool-section-title">Let's Review</h2>
      <p className="tool-section-description">
        Here's an overview of your incomes and expenditures.
      </p>
      <SummaryTable
        type="incomes"
        period={period}
        data={totalByCategory(incomes)}
      />
      <SummaryTable
        type="expenses"
        period={period}
        data={totalByCategory(expenses)}
      />
      <NetCashFlow incomes={incomes} expenses={expenses} period={period} />
      <FormNav back="/tool/expenses" next="/tool/recommendations" />
    </div>
  );
};

export default Summary;
