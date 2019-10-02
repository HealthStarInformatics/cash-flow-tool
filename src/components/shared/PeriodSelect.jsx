import React, { useContext } from "react";
import { CashFlowContext } from "../CashFlowTool";
import { periodOptions } from "../../configuration/options";

const updatePeriod = (update, e) => {
  e.persist();
  update({ period: e.target.value });
};

export const PeriodSelect = () => {
  const { period, update } = useContext(CashFlowContext);

  return (
    <div className="period-select">
      <label htmlFor="period">Time Period</label>
      <select
        name="period"
        id="period"
        onChange={updatePeriod.bind(null, update)}
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
};
