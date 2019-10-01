import React from "react";
import { Link } from "react-router-dom";

const handleSubmit = e => {
  e.preventDefault();
};

const Incomes = props => (
  <div className="tool-section incomes">
    <h2 className="tool-section-title">What's coming in?</h2>
    <p className="tool-section-description">
      Use the form below to enter your daily or weekly incomes, along with their
      type, to help build an overview of the funds you have available
    </p>

    <form id="incomes-form" onSubmit={handleSubmit} className="input-form">
      <div className="period-select">
        <label htmlFor="period">Time Period </label>
        <select name="period" id="period">
          <option>Daily</option>
          <option>Weekly</option>
        </select>
      </div>
      <div className="income-list input-list">
        <div className="income input-item">
          <input type="text" className="income" placeholder="Amount" />
          <select name="type" id="">
            <option value="Salary">Salary</option>
            <option value="Hourly">Hourly</option>
            <option value="One-Time">One-Time</option>
          </select>
          <span className="delete-income" role="img" aria-label="trash bin">
            🗑
          </span>
        </div>
      </div>
      <span className="add-income" role="img" aria-label="plus">
        ➕
      </span>
      <div className="form-nav">
        <Link to="/tool/expenses">
          <button className="launch-tool" type="submit">
            Next
          </button>
        </Link>
      </div>
    </form>
  </div>
);
export default Incomes;
