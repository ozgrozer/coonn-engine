const fn = require('./../functions')

module.exports = line => {
  const [ input, inputUnit, to, outputUnit ] = line.split(' ')
  let result = line
  if (inputUnit === 'mi' && outputUnit === 'km') {
    result = fn.prettyResult(input * 1.60934, outputUnit)
  } else if (inputUnit === 'km' && outputUnit === 'mi') {
    result = fn.prettyResult(input * 0.621371, outputUnit)
  } else if (inputUnit === 'inch' && outputUnit === 'cm') {
    result = fn.prettyResult(input * 2.54, outputUnit)
  } else if (inputUnit === 'foot' && outputUnit === 'cm') {
    result = fn.prettyResult(input * 30.48, outputUnit)
  } else if (inputUnit === 'yard' && outputUnit === 'cm') {
    result = fn.prettyResult(input * 91.44, outputUnit)
  }
  return result
}
