module.exports = (inputValue, inputUnit, outputUnit, values) => {
  let from
  let to
  for (let key in values) {
    const value = values[key]
    const variants = value.variants
    variants.map(variant => {
      if (inputUnit === variant) from = key
      if (outputUnit === variant) to = key
    })
  }
  const ratio = values[from]['to'][to]
  return inputValue * ratio
}
