const unitConverter = require('./../unit-converter')

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
    variants: ['centimeters', 'centimeter', 'centimetres', 'centimetre', 'cm'],
    to: {
      kilometer: 0.00001,
      meter: 0.01,
      centimeter: 1,
      milimeter: 10,
      micrometer: 10000,
      nanometer: 10000000,
      mile: 0.00000621371,
      yard: 0.0109361,
      foot: 0.0328084,
      inch: 0.393701
    }
  },
  'milimeter': {
    variants: ['milimeters', 'milimeter', 'milimetres', 'milimetre', 'mm'],
    to: {
      kilometer: 0.000001,
      meter: 0.001,
      centimeter: 0.1,
      milimeter: 1,
      micrometer: 1000,
      nanometer: 1000000,
      mile: 0.000000621371,
      yard: 0.00109361,
      foot: 0.00328084,
      inch: 0.0393701
    }
  },
  'micrometer': {
    variants: ['micrometers', 'micrometer', 'micrometres', 'micrometre', 'μm'],
    to: {
      kilometer: 0.000000001,
      meter: 0.000001,
      centimeter: 0.0001,
      milimeter: 0.001,
      micrometer: 1,
      nanometer: 1000,
      mile: 0.000000000621371,
      yard: 0.00000109361,
      foot: 0.00000328084,
      inch: 0.0000393701
    }
  },
  'nanometer': {
    variants: ['nanometers', 'nanometer', 'nanometres', 'nanometre', 'nm'],
    to: {
      kilometer: 0.000000000001,
      meter: 0.000000001,
      centimeter: 0.0000001,
      milimeter: 0.000001,
      micrometer: 0.001,
      nanometer: 1,
      mile: 0.000000000000621371,
      yard: 0.00000000109361,
      foot: 0.00000000328084,
      inch: 0.0000000393701
    }
  },
  'mile': {
    variants: ['miles', 'mile', 'mi'],
    to: {
      kilometer: 1.60934,
      meter: 1609.34,
      centimeter: 160934,
      milimeter: 1609340,
      micrometer: 1609340000,
      nanometer: 1609340000000,
      mile: 1,
      yard: 1760,
      foot: 5280,
      inch: 63360
    }
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
  return unitConverter(inputValue, inputUnit, outputUnit, values)
}
