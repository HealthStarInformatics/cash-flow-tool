import React from "react";
import FormNav from "./FormNav";
import { PeriodSelect } from "./shared/PeriodSelect";
import InputList from "./shared/InputList";

const Incomes = () => (
  <div className="tool-section incomes">
    <h2 className="tool-section-title">What's coming in?</h2>
    <p className="tool-section-description">
      Use the form below to enter your daily or weekly incomes, along with their
      type, to help build an overview of the funds you have available
    </p>

    <form
      id="incomes-form"
      onSubmit={e => e.preventDefault()}
      className="input-form"
    >
      <PeriodSelect />
      <InputList type="incomes" />
    </form>
    <FormNav next="/tool/expenses" />
  </div>
);

export default Incomes;
