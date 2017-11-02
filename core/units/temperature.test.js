const tf = require('./../test-helper')

test('1 f to f = 1', () => { expect(tf('1 f to f')).toBe(1) })
test('1 f to c = -17.22222222222222', () => { expect(tf('1 f to c')).toBe(-17.22222222222222) })
test('1 f to k = 255.92777777777778', () => { expect(tf('1 f to k')).toBe(255.92777777777778) })
