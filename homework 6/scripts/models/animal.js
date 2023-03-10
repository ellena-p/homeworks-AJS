// # Exercise
// ## Create a class Animal that has:
// * name
// * type - carnivore/herbivore/omnivore
// * age
// * size
// * eat - a method that checks if the input is an Animal.
// 	* If the input is an Animal and If this object animal is herbivore write in the console: The animal ( this animal name ) is a herbivore and does not eat other animals
// 	* If the input is an Animal, and If this object animal is not herbivore, then change the input Animal property isEaten to true and log in the console: The animal (this animal name) ate the (the input animal name). 


// 	* If the animal is twice as large or larger than this animal than just log in the console: The animal (this animal name) tried to eat the (the input animal name) but it was too large. 


// 	* If the input is not an animal just write: The animal (this animal name) is eating (the input).
// * isEaten = default false


export default class Animal {
    constructor(name, type, age, size) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
        this.isEaten = false;
    }
    eat(whateverInputed) {
        if (whateverInputed instanceof Animal) {
            if (this.type === "herbivore") {
                console.log(`The animal ${this.name} is a herbivore and does not eat other animals`)
            }
            else if (this.type != "herbivore") {
                if (whateverInputed.size > this.size) {
                    console.log(`The animal ${this.name} tried to eat ${whateverInputed.name} but it was too large. `)
                }
                else {
                    whateverInputed.isEaten = true;
                    console.log(`The animal ${this.name} ate ${whateverInputed.name}.`)
                }
            }
            
        }
        else {
            console.log (`The animal ${this.name} is eating the ${whateverInputed.name}.`)
        }


    }
}