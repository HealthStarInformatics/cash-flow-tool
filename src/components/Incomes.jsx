import React from "react";
import FormNav from "./FormNav";
import { PeriodSelect } from "./shared/PeriodSelect";

const handleSubmit = e => {
  e.preventDefault();
};

const incomeOptions = [
  { value: "salary", label: "Salary" },
  { value: "hourly", label: "Hourly" },
  { value: "one-time", label: "One-time" }
];

const InputRow = ({ type, placeholder, item, options, setData, data }) => (
  <div className="input-item" id={item.id}>
    <input
      type="text"
      className={type}
      placeholder={placeholder}
      value={item.amount}
      onChange={e => {
        const id = e.target.parentElement.id;
        const foundItem = data[id];
        if (foundItem) {
          const updated = { ...foundItem, amount: e.target.value };
          setData({ ...data, [id]: updated });
        }
      }}
    />
    <select
      name="type"
      value={item && item.category}
      onChange={e => {
        const id = e.target.parentElement.id;
        const foundItem = data[id];
        if (foundItem) {
          const updated = { ...foundItem, category: e.target.value };
          setData({ ...data, [id]: updated });
        }
      }}
    >
      {options.map(opt => (
        <option value={opt.value} key={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
    <span
      className="delete-row"
      role="img"
      aria-label="trash bin"
      onClick={e => {
        if (window.confirm("Delete this item?")) {
          const dataCopy = { ...data };
          delete dataCopy[e.target.parentElement.id];
          setData(dataCopy);
        }
      }}
    >
      🗑
    </span>
  </div>
);

const InputList = ({ type, data, ...others }) => {
  return (
    <>
      <div className={"input-list " + type}>
        {Object.keys(data).map(key => (
          <InputRow
            key={key}
            type={type}
            item={data[key]}
            data={data}
            {...others}
          />
        ))}
      </div>
      <span
        className="add-row"
        role="img"
        aria-label="plus"
        onClick={() => {
          const newId = Date.now();
          others.setData({
            ...data,
            [newId]: { id: newId, amount: "", category: "" }
          });
        }}
      >
        ➕
      </span>
    </>
  );
};

const Incomes = ({ data, setData, period, setPeriod }) => (
  <div className="tool-section incomes">
    <h2 className="tool-section-title">What's coming in?</h2>
    <p className="tool-section-description">
      Use the form below to enter your daily or weekly incomes, along with their
      type, to help build an overview of the funds you have available
    </p>

    <form id="incomes-form" onSubmit={handleSubmit} className="input-form">
      <PeriodSelect period={period} setPeriod={setPeriod} />
      <InputList
        type="incomes"
        placeholder="Income Amount"
        options={incomeOptions}
        data={data}
        setData={setData}
      />
      <FormNav next="/tool/expenses" />
    </form>
  </div>
);

export default Incomes;
