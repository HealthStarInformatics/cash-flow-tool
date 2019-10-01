import React from "react";
import { Link } from "react-router-dom";
import { SummaryTable, totalAmount, formatCurrency } from "./SummaryTable";

const expenseData = [
  { id: 1, type: "Transportation", amount: 75.0 },
  { id: 2, type: "Groceries", amount: 150.0 },
  { id: 3, type: "Loans", amount: 3500.26 }
];

const incomeData = [
  { id: 1, type: "Hourly", amount: 300.0 },
  { id: 2, type: "One-Time", amount: 150.0 },
  { id: 3, type: "One-Time", amount: 450.0 }
];

const valueClass = total => {
  if (total === 0) return { class: "", icon: "" };
  if (total < 0) return { class: " negative", icon: "-" };
  return { class: " positive", icon: "+" };
};

const NetCashFlow = props => {
  const total = totalAmount(props.income) - totalAmount(props.expenses);
  const valClass = valueClass(total);

  return (
    <div className="net-cash-flow">
      <h3 className="title">Net {props.period} Cash Flow</h3>
      <p className={"value" + valClass.class}>
        <span role="img" aria-label={valClass.class} className="icon">
          {valClass.icon}
        </span>
        {formatCurrency(total, false)}
      </p>
    </div>
  );
};

const Summary = props => (
  <div className="tool-section summary">
    <h2 className="tool-section-title">Let's Review</h2>
    <p className="tool-section-description">
      Here's an overview of your incomes and expenditures.
    </p>
    <SummaryTable type="Income" period="Weekly" data={incomeData} />
    <SummaryTable type="Expenses" period="Weekly" data={expenseData} />
    <NetCashFlow income={incomeData} expenses={expenseData} period="Weekly" />
    <div className="form-nav">
      <Link to="/tool/expenses">
        <button className="launch-tool" type="submit">
          &lt; Back
        </button>
      </Link>
      <Link to="/tool/recommendations">
        <button className="launch-tool" type="submit">
          Next &gt;
        </button>
      </Link>
    </div>
  </div>
);
export default Summary;
