import { getFromLocalStorage, saveToLocalStorage } from './localStorageMethods';

// Updade data for RecentlyOpened Component

export default function updateRecentlyOpened(
  id: string,
  category: string,
  name: string,
  projectId: string,
) {
  const recently = {
    id,
    category,
    name,
    check: false,
  };
  const storageData = getFromLocalStorage('recentlyOpened');
  // Check on is exist key and any data
  if (typeof storageData === 'string' && !!storageData !== false) {
    const currentData = JSON.parse(storageData);
    let currentProjectData = currentData[projectId];
    if (currentProjectData) {
      // Check if the data is an Array
      if (Array.isArray(currentProjectData)) {
        // Check if data length < 5 we will add new element
        if (currentProjectData.length < 5) {
          // Check if "recently" object is already exist in array
          currentProjectData = currentProjectData.filter(
            (item) => item.id !== id,
          );
          currentProjectData.push(recently);
          currentData[projectId] = currentProjectData;
          saveToLocalStorage('recentlyOpened', currentData);
        } else {
          // Check if "recently" object is already exist in array
          currentProjectData = currentProjectData.filter(
            (item) => item.id !== id,
          );
          // if data length > 5 we will delete first element after this we will add new element
          if (currentProjectData.length >= 5) {
            currentProjectData.shift();
            currentProjectData.push(recently);
            currentData[projectId] = currentProjectData;
            saveToLocalStorage('recentlyOpened', currentData);
          } else {
            // If data length < 5 we will add new element
            currentProjectData.push(recently);
            currentData[projectId] = currentProjectData;
            saveToLocalStorage('recentlyOpened', currentData);
          }
        }
      }
    } else {
      // Create key with new data
      localStorage.setItem(
        'recentlyOpened',
        JSON.stringify({ ...currentData, [projectId]: [recently] }),
      );
    }
  } else {
    // Create key with new data
    localStorage.setItem(
      'recentlyOpened',
      JSON.stringify({ [projectId]: [recently] }),
    );
  }
}
