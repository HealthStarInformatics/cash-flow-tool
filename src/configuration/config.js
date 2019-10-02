import { incomeOptions, expenseOptions } from "./options";

export const inputConfig = {
  incomes: {
    placeholder: "Income Amount",
    options: incomeOptions
  },
  expenses: {
    placeholder: "Expense Amount",
    options: expenseOptions
  }
};

export const defaultCategory = type => inputConfig[type].options[0].value;
