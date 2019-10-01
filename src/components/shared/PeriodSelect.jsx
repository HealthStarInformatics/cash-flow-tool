import React from "react";

export const periodOptions = [
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" }
];

export const PeriodSelect = ({ period, setPeriod }) => (
  <div className="period-select">
    <label htmlFor="period">Time Period</label>
    <select
      name="period"
      id="period"
      onChange={e => setPeriod(e.target.value)}
      value={period}
    >
      {periodOptions.map(opt => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);
