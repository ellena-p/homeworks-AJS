import Human from "./human.js";

export default class Bartender extends Human{
    constructor(name, age, gender, maritalStatus, kids, greatSkills){
        super(name, age, gender, maritalStatus, kids);
        this.makesDrinks = true;
        this.greatSkills = greatSkills;

    }
    makeCocktail(){
        if (this.greatSkills !='yes'){
            console.log ('This Bartender is not very Skilled.')
        }
    }
    worksNights(){
        console.log (`${this.name} works mostly afternoons and nights.`)
    }
}