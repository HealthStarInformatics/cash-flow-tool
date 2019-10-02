import React from "react";
import { inputConfig } from "../../configuration/config";

const setFieldValue = (e, type, update) => {
  e.persist();
  update(state => {
    const id = e.target.parentElement.id;
    const field = e.target.name;
    const foundItem = state[type][id];

    if (foundItem) {
      const updated = { ...foundItem, [field]: e.target.value };
      return {
        [type]: {
          ...state[type],
          [id]: updated
        }
      };
    }
  });
};

const deleteRow = (e, type, update) => {
  if (window.confirm("Delete this item?")) {
    e.persist();
    update(state => {
      const dataCopy = state[type];
      delete dataCopy[e.target.parentElement.id];
      return { [type]: { ...dataCopy } };
    });
  }
};

export const InputRow = ({ type, item, update }) => {
  const config = inputConfig[type];

  return (
    <div className="input-item" id={item.id}>
      <input
        type="text"
        name="amount"
        className={type}
        placeholder={config.placeholder}
        value={item.amount}
        onChange={e => setFieldValue(e, type, update)}
      />
      <select
        name="category"
        value={item && item.category}
        onChange={e => setFieldValue(e, type, update)}
      >
        {config.options.map(opt => (
          <option value={opt.value} key={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <span
        className="delete-row"
        role="img"
        aria-label="trashbin"
        onClick={e => deleteRow(e, type, update)}
      >
        🗑
      </span>
    </div>
  );
};
