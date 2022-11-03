export const getFormattedDateFromTimeStamp = (timeStamp: string) => {
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

export const getFormattedDateFromSeconds = (seconds: number) => {
  let time = '';

  // days
  const days = Math.floor(seconds / (24 * 3600));
  seconds -= days * 24 * 3600;

  // hours
  const hours = Math.floor(seconds / 3600);
  seconds -= hours * 3600;

  // minutes
  const minutes = Math.floor(seconds / 60);
  seconds -= minutes * 60;

  if (days) {
    time += `${days}d `;
  }
  if (hours) {
    time += `${hours}h `;
  }
  if (minutes) {
    time += `${minutes}m `;
  }

  // output
  return time;
};
