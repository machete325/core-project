import { getFormattedDateFromTimeStamp } from '../../core/helpers/dateMethods';

const timeStamps = [
  { value: '2022-10-17T10:02:32.239863', expectValue: '17.10.2022' },
  {
    value: 'Monday, October 17, 2022 2:17:01 PM GMT+03:00',
    expectValue: '17.10.2022',
  },
];

test('Check on right format date', () => {
  timeStamps.forEach((date) => {
    const result = getFormattedDateFromTimeStamp(date.value);
    expect(result).toBe(date.expectValue);
  });
});
