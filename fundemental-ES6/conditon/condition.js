'use strict'

{
  let input = 109
  judgment(input)
}

{
  let input = process.argv[2]
  judgment(input)
}

function judgment(input) {
  if(input%3 === 0 && input%5 ===0) { console.log("FizzBuzz") }
  else if(input%3 === 0) { console.log("Fizz") }
  else if(input%5 === 0) { console.log("Buzz") }
  else { console.log("Nor Fizz or Buzz") }
}

function zeroEvenOdd(input) {
  if(input === 0) { console.log("Zero Number") }
  else if(input%2 === 0) { console.log("Even Number")}
  else { console.log("Odd Number")}
}

module.exports = {judgment: judgment, zeroEvenOdd: zeroEvenOdd}
