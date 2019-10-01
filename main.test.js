const {
  fizzy,
} = require('./main.js')

describe('fizzy', () => {
  it(`returns 'Fizz' if the given number is divisible by 3 and not 5.`, () => {
    const FIZZ = 'Fizz';
    expect(fizzy(3)).toBe(FIZZ)
    expect(fizzy(6)).toBe(FIZZ)
    expect(fizzy(303)).toBe(FIZZ)
  })

  it(`returns 'Buzz' if the given number is divisible by 5 and not 3.`, () => {
    const BUZZ = 'Buzz';
    expect(fizzy(5)).toBe(BUZZ)
    expect(fizzy(20)).toBe(BUZZ)
    expect(fizzy(130)).toBe(BUZZ)
  })

  it(`returns 'FizzBuzz' if the given number is divisible by both 3 and 5`, () => {
    const FIZZBUZZ = 'FizzBuzz';
    expect(fizzy(15)).toBe(FIZZBUZZ)
    expect(fizzy(30)).toBe(FIZZBUZZ)
    expect(fizzy(150)).toBe(FIZZBUZZ)
  })

  it(`returns the number if the given number is divisible by neither 3 nor 5`, () => {
    expect(fizzy(1)).toBe(1)
    expect(fizzy(31)).toBe(31)
    expect(fizzy(100004)).toBe(100004)
  })
})