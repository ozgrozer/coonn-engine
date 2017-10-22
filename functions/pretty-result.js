module.exports = (calculation, outputUnit) => {
  const precision = 2
  return calculation.toFixed(precision) + ' ' + outputUnit
}
