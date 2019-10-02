import React, { useContext } from "react";
import { CashFlowContext } from "../CashFlowTool";
import { InputRow } from "./InputRow";

const newInputObject = id => ({ id, amount: "", category: "" });

const InputList = ({ type }) => {
  const state = useContext(CashFlowContext);

  const handleAddRow = e => {
    const newId = Date.now();

    state.update(state => {
      return {
        [type]: {
          ...state[type],
          [newId]: newInputObject(newId)
        }
      };
    });
  };

  return (
    <>
      <div className={"input-list " + type}>
        {Object.keys(state[type]).map(key => (
          <InputRow
            key={key}
            type={type}
            item={state[type][key]}
            update={state.update}
          />
        ))}
      </div>
      <span
        className="add-row"
        role="img"
        aria-label="plus"
        onClick={handleAddRow}
      >
        ➕
      </span>
    </>
  );
};

export default InputList;
