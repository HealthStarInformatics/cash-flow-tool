/**
 * Returns the total value of the data set
 * @param {[Object]} data Incomes or Expenses
 * @returns {Number} Total value
 */
export const totalAmount = data =>
  Object.values(data).reduce((prev, curr) => prev + Number(curr.amount), 0);

/**
 * Returns a formatted string version of num
 * ex. formatCurrency(-12, false) => '$12.00'
 * @param {Number} num Numeric value
 * @param {Bool} withSign Include the sign for negative values of num
 * @returns {String} Formatted string
 */
export const formatCurrency = (num, withSign = true) => {
  const number = Number(num);
  const sign = number < 0 ? "- " : "";
  if (withSign) return `${sign}$${Math.abs(number).toFixed(2)}`;
  return `$${Math.abs(number).toFixed(2)}`;
};

/**
 * Returns an array of income/expense data summed by Category.
 * @param {[Object]} data Incomes or Expenses
 * @returns {[Object]} Data summed by Category
 */
export const totalByCategory = data => {
  const result = {};

  Object.values(data).forEach(({ category, amount }) => {
    if (result[category]) {
      result[category] = result[category] + Number(amount);
    } else {
      result[category] = Number(amount);
    }
  });

  return Object.keys(result).map(key => ({
    category: key,
    amount: result[key]
  }));
};
