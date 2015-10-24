'use strict'

class Animal {
  constructor(legs, heart){
    this.legs = legs
    this.heart = heart
  }

  info(){
    return `Legs : ${this.legs}, Heart : ${this.heart}`
  }
}

class Spider extends Animal{
  constructor(posion){
    super(8,3)
    this.posion = posion
  }
  info(){
    return super.info() + ` Is it has a posion? ${this.posion}`    
  }
}

class Dog extends Animal{
  constructor(bark){
    super(4,4)
    this.bark = bark
  }
  info(){
    return super.info() + ` Is it can bark? ${this.bark}`
  }
}

let myDog = new Dog(true),
    mySpider = new Spider(true)

console.log(myDog.info())
console.log(mySpider.info())
