import { convertToString } from '../../core/helpers/convertPath';

test('Check valid path for object', () => {
  const mockObj = {
    data: {
      experiment: true,
    },
  };
  const result = convertToString(mockObj, 'data.experiment');
  expect(result).toBe(true);
});
