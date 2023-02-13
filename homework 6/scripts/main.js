import Animal from "./models/animal.js"
import Toy from "./models/toy.js";

const dog = new Animal ('Sharko', 'omnivore',3 , 2);
const rabbit = new Animal ('Kiki', 'herbivore', 2, 1);
const bear = new Animal ('Medo','carnivore',4, 3);
const rubberToy = new Toy ('dog toy', 'rubber');
let result1 =dog.eat(rabbit);
dog.eat(bear);
dog.eat(rubberToy);
