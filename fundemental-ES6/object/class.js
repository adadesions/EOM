'use strict'

class Car {
  constructor(engin, typeOfCar, color){
      this.engin = engin
      this.typeOfCar = typeOfCar
      this.color = color
  }

  showDetail(){
    return 'Engin : '+ this.engin + ', TypeOfCar : ' + this.typeOfCar + ', Color : '+ this.color
  }
}

class Ferrari extends Car{
  constructor(engin, color, owner) {
    super(engin, 'Sport car', color)
    this.owner = owner
    this.brand = 'Ferrari'
  }

  showDetail(){
    return super.showDetail() + ' - ' + this.brand + ' owner is ' + this.owner
  }


}

let myFerrari = new Ferrari('V16', 'Red', 'Ada K.')
console.log(myFerrari.showDetail())
