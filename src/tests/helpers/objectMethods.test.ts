import { convertToString } from '../../core/helpers/objectMethods';

test('Check valid path for object', () => {
  const mockObj = {
    data: {
      experiment: true,
    },
  };
  const result = convertToString(mockObj, 'data.experiment');
  expect(result).toBe(true);
});
