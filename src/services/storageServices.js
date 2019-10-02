export const getFromStorage = key => {
  return JSON.parse(localStorage.getItem(key));
};

export const saveToStorage = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

export const clearStorageAll = () =>
  ["cft-incomes", "cft-expenses", "cft-period"].forEach(key =>
    clearStorageItem(key)
  );

export const clearStorageItem = key => localStorage.removeItem(key);
