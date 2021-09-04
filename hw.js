//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:["Anything not from Taco bell"],
    burgers:["Portillos Burgers"],
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:["Chocolate"],
        dunkin:["Vanilla"],
        culvers:["All of them"],
        mcDonalds:["Sham-rock-shake"],
        cupids_candies:["Chocolate Malt"]
    }]
}
function meal(){
    console.log(Object.keys(person3));
    console.log(Object.values(person3));
}
meal()


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

function Person(name, age){
    this.name = name;
    this.age = age;
};
printInfo() {
    return `${this.name}, ${this.age} years old`
  }

let test = new Person ('Marwa Ali', 25);
    console.log(marwa_ali);
    console.log(marwa_ali.name);
    marwa_ali.printInfo();


class PersonTest{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    printInfo(){
        console.log(`This is ${this.name} and they are ${this.age} years old`);
    }
}
let Test2 = new Person('Beyonce Knowles', 40);
console.log(test2.name);
test2.printInfo();
};
