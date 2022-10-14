export const textSlicer = (text: string, limit: number) => {
  if (text.length > 85) {
    return `${text.slice(0, limit)}...`;
  }
  return text;
};
