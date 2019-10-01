import React from "react";
import "../styles/SummaryTable.scss";

export const totalAmount = data =>
  data.reduce((prev, curr) => prev + curr.amount, 0);

export const formatCurrency = (num, withSign = true) => {
  const sign = num < 0 ? "- " : "";
  if (withSign) return `${sign}$${Math.abs(num).toFixed(2)}`;
  return `$${Math.abs(num).toFixed(2)}`;
};

export const SummaryTable = ({ type, period, data }) => {
  return (
    <div className="summary-table">
      <h3 className="title">
        {type} ({period})
      </h3>
      {data.map(item => (
        <div className="data-row" key={type + item.id}>
          <div className="row-label">{item.type}</div>
          <div className="row-amount">{formatCurrency(item.amount)}</div>
        </div>
      ))}
      <div className={"total-row " + type.toLowerCase()}>
        <div className="row-label">Total</div>
        <div className="table-sum">{formatCurrency(totalAmount(data))}</div>
      </div>
    </div>
  );
};
