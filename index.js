// create a class to generate my ship
// crete a class to generate enemy ships

class Ship {
    constructor(name, hull, firepower, accuracy){
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    enemyDamages (){

    }
    ussDamages (){

    }
}

let uss =  new Ship("USSHelloWord", 20, 5, 0.7 );
// console.log(uss)

const randomFromInterval = (min, max) =>{
    return Math.floor(Math.random()*(max - min +1)+ min);
}
const randomDecimal = (min, max) => {
    return +(Math.random()*(max - min) + min).toFixed(1);
}

class AlienShip {
    constructor(){
        this.destroyed = false;
        this.ships = [];

    }
    addAlienShip (name,){
        let hull = randomFromInterval(3,6);
        let firepower = randomFromInterval(2,4);
        let accuracy = randomDecimal(0.6, 0.9);
        this.ships.push(new Ship(name, hull, firepower, accuracy));

    }
}
//instances of alien ship
let enemyFleet = new AlienShip();

enemyFleet.addAlienShip("ship1");
enemyFleet.addAlienShip("ship2");
enemyFleet.addAlienShip("ship3")
enemyFleet.addAlienShip("ship4");
enemyFleet.addAlienShip("ship5");
enemyFleet.addAlienShip("ship6");

// console.log(enemyFleet);
