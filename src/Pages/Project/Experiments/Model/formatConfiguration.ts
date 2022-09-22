export default function formatConfiguration(configuration: any) {
  const formattedData: any = [];
  let counter: any = 1124214121;

  const checkObjectKey = (key: any, value: any = null, id?: any) => {
    // eslint-disable-next-line no-plusplus
    const index = id || counter++;
    if (Number(key) !== 0 && !!Number(key) !== true && key !== 'name') {
      formattedData.push({
        id: index,
        key,
        value: typeof value === 'boolean' ? `${value}` : value || '-',
      });
    }
  };

  const deepObject = (field: any) => {
    let obj: any = {};
    Object.keys(field).forEach((key: any) => {
      obj = { ...field[key] };
      checkObjectKey(key);
    });
    return obj;
  };

  const getConfiguration = (items: any, key?: any) => {
    // eslint-disable-next-line no-debugger
    if (key) {
      checkObjectKey(key);
    }
    if (Array.isArray(items)) {
      items.forEach((item) => {
        const { displayName, value, id } = item;
        checkObjectKey(displayName, value, id);
      });
    } else {
      if (Object.prototype.hasOwnProperty.call(items, 'displayName')) {
        const { displayName, value, id } = items;
        checkObjectKey(displayName, value, id);
      } else {
        const result = Object.keys(items).length === 1 ? deepObject(items) : items;
        const keys = Object.keys(result);
        if (Object.prototype.hasOwnProperty.call(result, 'displayName')) {
          const { displayName, value, id } = result;
          checkObjectKey(displayName, value, id);
        } else if (keys.length > 1) {
          keys.forEach((item) => getConfiguration(result[item], item));
        } else if (keys.length === 1) {
          getConfiguration(result);
        }
      }
      // eslint-disable-next-line no-useless-return
      if (Object.keys(items).length === 0) return;
    }
  };

  getConfiguration(configuration);

  return formattedData;
}
