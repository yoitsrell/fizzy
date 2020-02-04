const {
  fizzy,
} = require('./main.js')

describe('fizzy', () => {
  it(`returns 'Fizz' if the given number is divisible by 3 and not 5.`, () => {
    expect(fizzy(3)).toBe('Fizz')
    expect(fizzy(6)).toBe('Fizz')
    expect(fizzy(303)).toBe('Fizz')
  })

  it(`returns 'Buzz' if the given number is divisible by 5 and not 3.`, () => {
    expect(fizzy(5)).toBe('Buzz')
    expect(fizzy(20)).toBe('Buzz')
    expect(fizzy(130)).toBe('Buzz')
  })

  it(`returns 'FizzBuzz' if the given number is divisible by both 3 and 5`, () => {
    expect(fizzy(15)).toBe('FizzBuzz')
    expect(fizzy(30)).toBe('FizzBuzz')
    expect(fizzy(150)).toBe('FizzBuzz')
  })

  it(`returns the number if the given number is divisible by neither 3 nor 5`, () => {
    expect(fizzy(1)).toBe(1)
    expect(fizzy(31)).toBe(31)
    expect(fizzy(100004)).toBe(100004)
  })
})