function fizzy(num) 
  {
  if (num % 3 ===0)
  {
  return "Fizz"}
  else if (num %5 ===0)
  {
  return 'Buzz'}
  else if (num % 3 === 0 && num %5 ===0)
  {
  return "FizzBuzz"}
  else if(num){
    return num
  }
  }

module.exports = {
  fizzy,
}

console.log(fizzy())
