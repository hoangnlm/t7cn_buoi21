/**
 * Created by Hoang on 12/17/16.
 */
class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    sayHello(){
        console.log("Hello: " + this.name + ". Age: " + this.age)
    }
    namMoi(){
        console.log(`Nam moi: ${++this.age}`)
    }
}

class Child extends Person {
    constructor(name, age, hobby){
        super(name, age)
        this.hobby = hobby
    }
    sayHello(){
        console.log("Em la: " + this.name + ". Age: " + this.age)
    }
    toString(){
        return this.name + ": " + this.age
    }
}

const hang = 123
console.log(hang)

let hoang = new Person("hoang", 22)
hoang.sayHello()
hoang.namMoi();

let teo = new Child("teo", 11, "may bay")
console.log(teo)
console.log(teo.toString())
teo.sayHello()
