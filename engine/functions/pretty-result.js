module.exports = (calculation, outputUnit) => {
  const precision = 2
  const result = calculation.toFixed(precision)
  return (result.substr(-3) === '.00' ? result.substr(0, result.length - 3) : result) + ' ' + outputUnit
}
