export const textSlicer = (text: string, limit: number) => {
  if (text.length > limit) {
    return `${text.slice(0, limit)}...`;
  }
  return text;
};

export const formDatasetText = (data: any) => {
  if (data) {
    const { displayName, prefix, version } = data;
    return `${displayName} ${prefix || ''} ${version || ''}`;
  }
  return 'Not available';
};

export const defineCurrency = (currencyType: string) => {
  switch (currencyType) {
    case 'USD': {
      return '$';
    }
    default:
      return '';
  }
};
