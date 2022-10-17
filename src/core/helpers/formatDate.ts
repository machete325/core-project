export const geFormattedDate = (timeStamp: string) => {
  const formatDigits = (digit: number) => {
    if (digit < 10) {
      return `0${digit}`;
    }
    return digit;
  };
  const date = new Date(timeStamp);
  const year = date.getFullYear();
  const month = formatDigits(date.getMonth());
  const day = formatDigits(date.getDay());
  return `${day}.${month}.${year}`;
};
