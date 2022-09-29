import { getFromLocalStorage, saveToLocalStorage } from './localStorageMethods';

// Updade data for RecentlyOpened Component

export default function updateRecentlyOpened(id: string, category: string, name: string) {
  const recently = { id, category, name };
  const storageData = getFromLocalStorage('recentlyOpened');
  // Check on is exist key and any data
  if (typeof storageData === 'string' && !!storageData !== false) {
    let currentData = JSON.parse(storageData);
    // Check if the data is an Array
    if (Array.isArray(currentData)) {
      // Check if data length < 5 we will add new element
      if (currentData.length < 5) {
        // Check if "recently" object is already exist in array
        currentData = currentData.filter((item) => item.id !== id);
        currentData.push(recently);
        saveToLocalStorage('recentlyOpened', currentData);
      } else {
        // Check if "recently" object is already exist in array
        currentData = currentData.filter((item) => item.id !== id);
        // Check if data length > 5 we will delete first element after this we will add new element
        if (currentData.length > 5) {
          currentData.shift();
          currentData.push(recently);
          saveToLocalStorage('recentlyOpened', currentData);
        } else {
          // If data length < 5 we will add new element
          currentData.push(recently);
          saveToLocalStorage('recentlyOpened', currentData);
        }
      }
    }
  } else {
    // Create key with new data
    localStorage.setItem('recentlyOpened', JSON.stringify([recently]));
  }
}
