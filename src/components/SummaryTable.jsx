import React from "react";
import "../styles/SummaryTable.scss";
import { formatCurrency, totalAmount } from "../services/currencyServices";

export const SummaryTable = ({ type, period, data }) => (
  <div className="summary-table">
    <h3 className="title">
      {type} ({period})
    </h3>
    {Object.values(data).map(item => (
      <div className="data-row" key={item.category}>
        <div className="row-label">{item.category}</div>
        <div className="row-amount">{formatCurrency(item.amount)}</div>
      </div>
    ))}
    <div className={"total-row " + type}>
      <div className="row-label">Total</div>
      <div className="table-sum">{formatCurrency(totalAmount(data))}</div>
    </div>
  </div>
);
