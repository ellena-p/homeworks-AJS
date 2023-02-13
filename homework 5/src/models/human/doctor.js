import Human from "./human.js";

export default class Doctor extends Human {
    constructor(name, age, gender, maritalStatus, kids) {
        super(name, age, gender, maritalStatus, kids);
        this.steadyHands = true;
        
    }

    savesLives() {
        this.atWork = true;
        console.log(`The doctor is curently at Work and saves lives`);
    }

}