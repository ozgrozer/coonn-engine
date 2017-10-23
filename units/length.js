const fn = require('./../functions')

const values = {
  'kilometer': {
    variants: ['kilometers', 'kilometer', 'kilometres', 'kilometre', 'km'],
    to: {
      kilometer: 1,
      meter: 1000,
      centimeter: 100000,
      milimeter: 1000000,
      micrometer: 1000000000,
      nanometer: 1000000000000,
      mile: 0.621371,
      yard: 1093.61,
      foot: 3280.84,
      inch: 39370.1
    }
  },
  'meter': {
    variants: ['meters', 'meter', 'metres', 'metre', 'm'],
    to: {
      kilometer: 0.001,
      meter: 1,
      centimeter: 100,
      milimeter: 1000,
      micrometer: 1000000,
      nanometer: 1000000000,
      mile: 0.000621371,
      yard: 1.09361,
      foot: 3.28084,
      inch: 39.3701
    }
  },
  'centimeter': {
    variants: ['centimeters', 'centimeter', 'centimetres', 'centimetre', 'cm']
  },
  'milimeter': {
    variants: ['milimeters', 'milimeter', 'milimetres', 'milimetre', 'mm']
  },
  'micrometer': {
    variants: ['micrometers', 'micrometer', 'micrometres', 'micrometre', 'μm']
  },
  'nanometer': {
    variants: ['nanometers', 'nanometer', 'nanometres', 'nanometre', 'nm']
  },
  'mile': {
    variants: ['miles', 'mile', 'mi']
  },
  'yard': {
    variants: ['yards', 'yard', 'yds', 'yd']
  },
  'foot': {
    variants: ['feet', 'foot', 'ft']
  },
  'inch': {
    variants: ['inches', 'inch', 'in']
  }
}

module.exports = (inputValue, inputUnit, outputUnit) => {
  return fn.unitConverter(inputValue, inputUnit, outputUnit, values)
}
