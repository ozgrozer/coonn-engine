const fn = require('./functions')
const units = require('./units')

module.exports = input => {
  let result = ''
  if (input) {
    const [inputValue, inputUnit, to, outputUnit] = input.split(' ')
    if (to === 'to') {
      result = units.length(inputValue, inputUnit, outputUnit)
      result = fn.prettyResult(result, outputUnit)
    }
  }
  return result
}
