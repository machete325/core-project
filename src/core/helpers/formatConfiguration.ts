export default function formatConfiguration(configuration: any) {
  const formattedData: any = [];
  let arrKey: any = 1124214121;

  // checkObjectKey: Checking object key which not consider 'name', '0', any numbers.

  const checkObjectKey = (
    key: any,
    value: any = null,
    id?: any,
    deep?: number,
    isArray?: boolean,
  ) => {
    // eslint-disable-next-line no-plusplus
    const index = id || arrKey++;
    const margin = deep && deep === 5 ? 0 : deep && deep * 3;

    if ((isArray || (Number(key) !== 0 && !!Number(key) !== true)) && key !== 'name') {
      formattedData.push({
        id: index,
        key: isArray ? '' : `${key}:`,
        // eslint-disable-next-line no-nested-ternary
        value: isArray
          ? `- ${key}`
          : typeof value === 'boolean' || typeof value === 'number'
            ? `${value}`
            : value || '',
        margin: `${margin}px`,
      });
    }
  };

  // unfoldObject: Unfolding object into deep.

  const unfoldObject = (field: any, deep: number) => {
    let obj: any = {};
    Object.keys(field).forEach((key: any) => {
      obj = { ...field[key] };
      checkObjectKey(key, null, null, deep + 5);
    });
    // eslint-disable-next-line no-plusplus
    return obj;
  };

  // getConfiguration: A function that calls itself while unfolding the object
  // and checking it for considering displayName field.

  const getConfiguration = (items: any, key?: any, deepValue?: number) => {
    // Deep counter
    const deep = deepValue || 0;
    if (key) {
      checkObjectKey(key, null, null, deep);
    }
    // if we got array, array goes through and push into formattedData
    if (Array.isArray(items)) {
      items.forEach((item) => {
        const { value, id } = item;
        checkObjectKey(value, null, id, deep, true);
      });
    } else {
      if (Object.prototype.hasOwnProperty.call(items, 'displayName')) {
        const { displayName, value, id } = items;
        checkObjectKey(displayName, value, id, deep);
      } else {
        const result = Object.keys(items).length === 1 ? unfoldObject(items, deep) : items;
        const keys = Object.keys(result);
        if (Object.prototype.hasOwnProperty.call(result, 'displayName')) {
          const { displayName, value, id } = result;
          checkObjectKey(displayName, value, id, deep);
        } else if (keys.length > 1) {
          keys.forEach((item) => getConfiguration(result[item], item, deep + 5));
        } else if (keys.length === 1) {
          getConfiguration(result, null, deep + 5);
        }
      }
      // Condition for exit from recursive function
      // eslint-disable-next-line no-useless-return, no-plusplus
      if (Object.keys(items).length === 0) return;
    }
  };

  getConfiguration(configuration);

  return formattedData;
}
