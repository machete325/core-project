// Functions for managing the Local Storage

export const getFromLocalStorage = (key: string) => {
  localStorage.getItem(key);
};

export const saveToLocalStorage = (key: string, data: string) => {
  localStorage.setItem(key, JSON.stringify(data));
};
