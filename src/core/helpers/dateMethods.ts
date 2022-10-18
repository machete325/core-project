export const getFormattedDate = (timeStamp: string) => {
  const formatDigits = (digit: number) => {
    if (digit < 10) {
      return `0${digit}`;
    }
    return digit;
  };
  const date = new Date(timeStamp);
  const year = date.getFullYear();
  const actualMonth = date.getMonth() + 1;
  const month = formatDigits(actualMonth);
  const day = formatDigits(date.getDate());
  return `${day}.${month}.${year}`;
};
