module.exports = {
  'fahrenheit': {
    variants: ['fahrenheit', 'f'],
    to: {
      fahrenheit: 1,
      celsius: '((input - 32) * 5) / 9',
      kelvin: '((input + 459.67) * 5) / 9'
    }
  },
  'celsius': {
    variants: ['celsius', 'c'],
    to: {
      fahrenheit: 1,
      celsius: 2,
      kelvin: 3
    }
  },
  'kelvin': {
    variants: ['kelvin', 'k'],
    to: {
      fahrenheit: 1,
      celsius: 2,
      kelvin: 3
    }
  }
}
