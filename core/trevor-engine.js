const math = require('mathjs')
const units = require('./units')

module.exports = (input, precision = 2, showOutputUnit = true) => {
  let result = ''

  if (input) {
    const [inputValue, inputUnit, to, outputUnit] = input.split(' ')

    if (inputValue && inputUnit && to === 'to' && outputUnit) {
      let from, to, unit

      for (let key1 in units) {
        const values = units[key1]

        for (let key2 in values) {
          const variants = values[key2].variants

          variants.map(variant => {
            if (variant === inputUnit) {
              from = key2
              unit = key1
            }

            if (variant === outputUnit) to = key2
          })
        }
      }

      const ratio = units[unit][from]['to'][to]

      if (ratio) {
        if (ratio.toString().indexOf('input')) {
          result = math.eval(ratio.toString().replace(/input/g, inputValue))
        } else {
          result = inputValue * ratio
        }
      }

      if (result) {
        if (precision) {
          result = result.toFixed(precision)
          result = (result.substr(-3) === '.00' ? result.substr(0, result.length - 3) : result)
        }

        if (showOutputUnit) result += ' ' + outputUnit
      }
    }
  }

  return result
}
