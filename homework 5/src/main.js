import Horse from "./models/animal/horse.js";
import Pudlica from "./models/animal/pudlica.js";
import Sarplaninec from "./models/animal/sarplaninec.js";
import StarZenskiSarplaninec from "./models/animal/starZenskiSarplaninec.js";
import Bartender from "./models/human/bartender.js";
import Chef from "./models/human/chef.js";
import Doctor from "./models/human/doctor.js";

// console.log('Main class');


// const horse1 = new Horse('Goce', 7, 'Male');
// horse1.printSpecs();

// const petar = new Doctor ('Petar', 42, 'Male','maried',3);
// petar.savesLives();
// petar.playInstrument("Violin");
// petar.printSpecs();

// const jasmin = new Chef ('Jasmin ', 54, 'Male','maried',2,'yes');

// jasmin.ownsRestaurants();

const marija = new Bartender ('Marija', 22, 'Female', 'Single', null, 'yes');

marija.makeCocktail();
marija.worksNights();

// // console.log(horse1);

// horse1.die();

// const sarplaninec1 = new Sarplaninec('Sarko', 5, 'Male');

// sarplaninec1.bark();

// console.log(sarplaninec1);

// const pudlica1 = new Pudlica('Kiko', 5, undefined);
// // pudlica1.bark();
// pudlica1.bark();
// pudlica1.bark();
// pudlica1.bark();
// pudlica1.bark();
// pudlica1.bark();
// pudlica1.bark();
// pudlica1.die('crkni');
// pudlica1.bark('gaf gaf gaf');

// pudlica1.comeAlive()

// console.log('bark');
// pudlica1.bark()
// sarplaninec1.bark()
// console.log('bark ends');

// setTimeout(() => {
//     pudlica1.die()
// }, 10000)






// console.log(horse1);


// const starZenskiSarplaninec = new StarZenskiSarplaninec('Lajka', 11);

// console.log(starZenskiSarplaninec);