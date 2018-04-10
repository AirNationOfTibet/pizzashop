console.log('hello js working');
let cost = 0;

class Pizza{
    constructor(ingredient= "cheese"){
        this.ingredient = ingredient;
    }
    calculate(){
        //given the assumption that cheese will be ordered and the base is free.
        return 10 + ((this.ingredient.length - 1)*.99);
    }
}

let aPizza = new Pizza(["cheese", "pepperoni", "pineapple"]);

console.log(aPizza.calculate());

class Order {
    constructor(pizza){
        this.order = [pizza]
    }
    addToOrder(){
        this.order.push(pizza)
    }
    totalCost(){
        
    }
} 

