import Mammal from "../mammal.js";

export default class Human extends Mammal {
    constructor(name, age, gender, maritalStatus, kids) {
        super(name, age, gender);
        this.numberOfLegs = 2;
        this.thinks = true;
        this.works = true;
        this.maritalStatus = maritalStatus;
        this.hasKids = kids;
    }
    playInstrument (instrument){
        this.plays = instrument;
        console.log (`${this.name} plays `+ instrument);
    }
    die(causeOfDeath) {
        super.die(causeOfDeath);
        this.thinks = false;
        this.works = false;

    }
    
}