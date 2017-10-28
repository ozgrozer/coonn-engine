const length = require('./length')

test('1 km to km = 1', () => { expect(length('1', 'km', 'km')).toBe(1) })
test('1 km to m = 1000', () => { expect(length('1', 'km', 'm')).toBe(1000) })
test('1 km to cm = 100000', () => { expect(length('1', 'km', 'cm')).toBe(100000) })
test('1 km to mm = 1000000', () => { expect(length('1', 'km', 'mm')).toBe(1000000) })
test('1 km to μm = 1000000000', () => { expect(length('1', 'km', 'μm')).toBe(1000000000) })
test('1 km to nm = 1000000000000', () => { expect(length('1', 'km', 'nm')).toBe(1000000000000) })
test('1 km to mi = 0.621371', () => { expect(length('1', 'km', 'mi')).toBe(0.621371) })
test('1 km to yd = 1093.61', () => { expect(length('1', 'km', 'yd')).toBe(1093.61) })
test('1 km to ft = 3280.84', () => { expect(length('1', 'km', 'ft')).toBe(3280.84) })
test('1 km to in = 39370.10', () => { expect(length('1', 'km', 'in')).toBe(39370.10) })

test('1 m to km = 0.001', () => { expect(length('1', 'm', 'km')).toBe(0.001) })
test('1 m to m = 1', () => { expect(length('1', 'm', 'm')).toBe(1) })
test('1 m to cm = 100', () => { expect(length('1', 'm', 'cm')).toBe(100) })
test('1 m to mm = 1000', () => { expect(length('1', 'm', 'mm')).toBe(1000) })
test('1 m to μm = 1000000', () => { expect(length('1', 'm', 'μm')).toBe(1000000) })
test('1 m to nm = 1000000000', () => { expect(length('1', 'm', 'nm')).toBe(1000000000) })
test('1 m to mi = 0.000621371', () => { expect(length('1', 'm', 'mi')).toBe(0.000621371) })
test('1 m to yd = 1.09361', () => { expect(length('1', 'm', 'yd')).toBe(1.09361) })
test('1 m to ft = 3.28084', () => { expect(length('1', 'm', 'ft')).toBe(3.28084) })
test('1 m to in = 39.3701', () => { expect(length('1', 'm', 'in')).toBe(39.3701) })

test('1 cm to km = 0.00001', () => { expect(length('1', 'cm', 'km')).toBe(0.00001) })
test('1 cm to m = 0.01', () => { expect(length('1', 'cm', 'm')).toBe(0.01) })
test('1 cm to cm = 1', () => { expect(length('1', 'cm', 'cm')).toBe(1) })
test('1 cm to mm = 10', () => { expect(length('1', 'cm', 'mm')).toBe(10) })
test('1 cm to μm = 10000', () => { expect(length('1', 'cm', 'μm')).toBe(10000) })
test('1 cm to nm = 10000000', () => { expect(length('1', 'cm', 'nm')).toBe(10000000) })
test('1 cm to mi = 0.00000621371', () => { expect(length('1', 'cm', 'mi')).toBe(0.00000621371) })
test('1 cm to yd = 0.0109361', () => { expect(length('1', 'cm', 'yd')).toBe(0.0109361) })
test('1 cm to ft = 0.0328084', () => { expect(length('1', 'cm', 'ft')).toBe(0.0328084) })
test('1 cm to in = 0.393701', () => { expect(length('1', 'cm', 'in')).toBe(0.393701) })

test('1 mm to km = 0.000001', () => { expect(length('1', 'mm', 'km')).toBe(0.000001) })
test('1 mm to m = 0.001', () => { expect(length('1', 'mm', 'm')).toBe(0.001) })
test('1 mm to cm = 0.1', () => { expect(length('1', 'mm', 'cm')).toBe(0.1) })
test('1 mm to mm = 1', () => { expect(length('1', 'mm', 'mm')).toBe(1) })
test('1 mm to μm = 1000', () => { expect(length('1', 'mm', 'μm')).toBe(1000) })
test('1 mm to nm = 1000000', () => { expect(length('1', 'mm', 'nm')).toBe(1000000) })
test('1 mm to mi = 6.21371e-7', () => { expect(length('1', 'mm', 'mi')).toBe(6.21371e-7) })
test('1 mm to yd = 0.00109361', () => { expect(length('1', 'mm', 'yd')).toBe(0.00109361) })
test('1 mm to ft = 0.00328084', () => { expect(length('1', 'mm', 'ft')).toBe(0.00328084) })
test('1 mm to in = 0.0393701', () => { expect(length('1', 'mm', 'in')).toBe(0.0393701) })

test('1 μm to km = 1e-9', () => { expect(length('1', 'μm', 'km')).toBe(1e-9) })
test('1 μm to m = 0.000001', () => { expect(length('1', 'μm', 'm')).toBe(0.000001) })
test('1 μm to cm = 0.0001', () => { expect(length('1', 'μm', 'cm')).toBe(0.0001) })
test('1 μm to mm = 0.001', () => { expect(length('1', 'μm', 'mm')).toBe(0.001) })
test('1 μm to μm = 1', () => { expect(length('1', 'μm', 'μm')).toBe(1) })
test('1 μm to nm = 1000', () => { expect(length('1', 'μm', 'nm')).toBe(1000) })
test('1 μm to mi = 6.21371e-10', () => { expect(length('1', 'μm', 'mi')).toBe(6.21371e-10) })
test('1 μm to yd = 0.00000109361', () => { expect(length('1', 'μm', 'yd')).toBe(0.00000109361) })
test('1 μm to ft = 0.00000328084', () => { expect(length('1', 'μm', 'ft')).toBe(0.00000328084) })
test('1 μm to in = 0.0000393701', () => { expect(length('1', 'μm', 'in')).toBe(0.0000393701) })
