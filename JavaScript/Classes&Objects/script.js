// let obj={
//     a:1,
//     b:"sid"
// }

// console.log(obj)

// let animal={
//     eats:true
// }

// let rabbit={
//     jumps:true
// }

// rabbit.__proto__=animal;  
//rabbit[[prototype]]=animal


//Classes

class Animal{
    constructor(name){
        this.name=name
        console.log("The object is created");
    }

    eats(){
        console.log("eating")
    }

    jump(){
        console.log("Jumping");
    }
}

let a=new Animal("Bunny")
console.log(a);

class lion extends Animal{  //By this lion inherits all the properties of the Animal
    constructor(name){
        super(name)  //Needs to put super keyword in derived class before accessing this
        console.log("The object is created");
    }
}

let l=new lion("shera")
console.log(l);