const prettyResult = require('./pretty-result')

test('1 km = 1 km', () => { expect(prettyResult(1, 'km')).toBe('1 km') })
test('94.04923 yd = 94.05 yd', () => { expect(prettyResult(94.04923, 'yd')).toBe('94.05 yd') })
test('3.28084 ft = 3.28 ft', () => { expect(prettyResult(3.28084, 'ft')).toBe('3.28 ft') })
