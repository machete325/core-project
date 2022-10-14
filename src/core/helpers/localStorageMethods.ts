// Functions for managing the Local Storage

export const getFromLocalStorage = (key: string) => localStorage.getItem(key);

export const saveToLocalStorage = (key: string, data: string) => {
  const item = localStorage.setItem(key, JSON.stringify(data));
  return item;
};
