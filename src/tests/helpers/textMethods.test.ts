import {
  textSlicer,
  formDatasetText,
  defineCurrency,
} from '../../core/helpers/textMethods';

const textArr1 = [
  { value: 'Hello', expectValue: 'Hello' },
  { value: 'Great understand!', expectValue: 'Great understand...' },
];

const textArr2 = [
  {
    displayName: 'Experiment',
    prefix: '_ext_',
    version: '2',
    expectValue: 'Experiment _ext_ 2',
  },
  {
    displayName: 'Experiment',
    version: '2',
    expectValue: 'Experiment  2',
  },
  {
    displayName: 'Experiment',
    prefix: '_ext_',
    expectValue: 'Experiment _ext_ ',
  },
];

const textArr3 = [
  { value: 'USD', expectValue: '$' },
  { value: '', expectValue: '' },
];

test('Check on right slicing for text', () => {
  textArr1.forEach((text) => {
    const result = textSlicer(text.value, 16);
    expect(result).toBe(text.expectValue);
  });
});

test('Check on right format text for dataset', () => {
  textArr2.forEach((text) => {
    const result = formDatasetText(text);
    expect(result).toBe(text.expectValue);
  });
});

test('Check on right definition currency symbol', () => {
  textArr3.forEach((text) => {
    const result = defineCurrency(text.value);
    expect(result).toBe(text.expectValue);
  });
});
