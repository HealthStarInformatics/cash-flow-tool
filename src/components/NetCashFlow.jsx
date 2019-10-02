import React from "react";
import { totalAmount, formatCurrency } from "../services/currencyServices";

const NO_SIGN = false;

export const netFlowStyles = total => {
  if (total === 0) return { class: "", icon: "" };
  if (total < 0) return { class: " negative", icon: "-" };
  return { class: " positive", icon: "+" };
};

export const NetCashFlow = ({ incomes, expenses, period }) => {
  const total = totalAmount(incomes) - totalAmount(expenses);
  const valClass = netFlowStyles(total);
  return (
    <div className="net-cash-flow">
      <h3 className="title">Net {period} Cash Flow</h3>
      <p className={"value" + valClass.class}>
        <span role="img" aria-label={valClass.class} className="icon">
          {valClass.icon}
        </span>
        {formatCurrency(total, NO_SIGN)}
      </p>
    </div>
  );
};
