import { hexToRgba } from '../../core/helpers/colorMethods';

const colors = [
  { value: '#ffffff', expectValue: '255,255,255,0.2', opacity: '0.2' },
  { value: '#008080', expectValue: '0,128,128,0.5', opacity: '0.5' },
];

test('Check on right transforming hex color to rgba', () => {
  colors.forEach((color) => {
    const result = hexToRgba(color.value, color.opacity);
    expect(result).toBe(color.expectValue);
  });
});
