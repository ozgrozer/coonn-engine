const fn = require('./functions')
const units = require('./units')

module.exports = input => {
  const [inputValue, inputUnit, to, outputUnit] = input.split(' ')
  let result
  if (to === 'to') {
    result = units.length(inputValue, inputUnit, outputUnit)
    result = fn.prettyResult(result, outputUnit)
  }
  return result
}
