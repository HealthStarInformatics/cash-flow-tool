import React from "react";
import FormNav from "./shared/FormNav";
import { PeriodSelect } from "./shared/PeriodSelect";
import InputList from "./shared/InputList";

const Expenses = props => (
  <div className="tool-section expenses">
    <h2 className="tool-section-title">Where's it going?</h2>
    <p className="tool-section-description">
      Use the form below to enter your daily or weekly expenses, along with
      their category, to help build an overview of your financial obligations.
    </p>

    <form
      id="incomes-form"
      onSubmit={e => e.preventDefault()}
      className="input-form"
      autocomplete="off"
    >
      <PeriodSelect />
      <InputList type="expenses" />
    </form>
    <FormNav back="/tool/incomes" next="/tool/summary" />
  </div>
);

export default Expenses;
