import Human from "./human.js";

export default class Chef extends Human{
    constructor(name, age, gender, maritalStatus,kids, ownsRestaurant){
        super(name, age, gender, maritalStatus,kids);
        this.lovesFood = true;
        this.yells = true;
        this.ownsRestaurant = ownsRestaurant;

    }
    cookFood(){
        this.cook = true;
        console.log (`Chef is cooking and we are eating`)
    }
    ownsRestaurants(){
        if (this.ownsRestaurant === 'yes'){
            this.isAManagerToo = true
            console.log (`The Chef owns a restaurant and manages it too.`)
        }
        else {
            console.log (`The Chef is still young and saving money.`)
        }
    }
}