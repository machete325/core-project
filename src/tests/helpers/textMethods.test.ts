import { textSlicer } from '../../core/helpers/textMethods';

const texts = [
  { value: 'Hello', expectValue: 'Hello' },
  { value: 'Great understand!', expectValue: 'Great understand...' },
];

test('Check on right slicing for text', () => {
  texts.forEach((text) => {
    const result = textSlicer(text.value, 16);
    expect(result).toBe(text.expectValue);
  });
});
