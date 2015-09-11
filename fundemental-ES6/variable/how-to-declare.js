'use strict'

//let and const are new in ES6
//Constant can not change its values
const pi = 3.14159265359

//declared variable by var
var courseName = "Experience of MEAN - The first Gen!",
    courseCode = "EOM#2"

//Block of let
{
  let courseCode = "EOM#1"
  console.log(courseCode)
}
console.log(courseCode)

//Scoping idea
function fn(){
  var x = 10
  if(x>=10){
    let y = 11
  }
  return y
}

//Test x scope
console.log(x)
//Test y scope
console.log(fn())
