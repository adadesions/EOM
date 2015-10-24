'use strict'
//                                 Function-Declaration
// =============================================================================
console.log('===================================Fn-Declaration========================================')
function adaFn (man) {
  man.nationality = 'Thai'
}

{
  let john = {name: 'John', nationality: 'American'}
  //Before
  console.log(john.nationality)

  adaFn(john)
  //After
  console.log(john.nationality)
}

console.log('===================================Fn-Expression-Anonymous========================================')
let squareArea = function (n) { return n*n }
//For recursive function
let factorial = function fac(n) { return n<2 ? 1 : n*fac(n-1) }
let f = 3,
    n = 13

console.log(`Area of ${n}*${n} = ${squareArea(n)}`)
console.log(`Factorial ${f}! = ${factorial(f)}`)

console.log('===================================Higher Order Function========================================')

function map(fn, data){
  let result = []
  for(let i=0; i< data.length; i++){
    result[i] = fn(data[i])
  }
  return result
}

{
  let data = [2,4,6,8,10],
      newData = map(function(x){ return x*x }, data)
  console.log('Origin : '+data)
  console.log('Changed : '+newData)
}

console.log('===================================Fat-Arrow-Function========================================')

let data = [1,2,3,4,5],
    sData = ['iPhone5', 'iPad2', 'iMac2013'],
    sqrData = data.map(function(x){ return x*x}),
    sqrArrow = data.map(x => x*x)

    console.log("By fn : "+sqrData)
    console.log("By Arrow-fn : "+sqrArrow)
    console.log("Reduce data by plus : "+ data.reduce( (x,y) => x+y))
    console.log("Canceled : "+sData.map(x => 'X'+x+'X'))




// Special
let m = 100
while(m --> 19)
  console.log(m)
