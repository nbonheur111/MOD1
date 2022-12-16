// create a class to generate my ship
class Ship {
    constructor(name, hull, firepower, accuracy){
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    alienShipDamages (aShip){
        //increase damage to the ship's hull.
        aShip.hull -= uss.firepower;
    }
    ussDamages (ussObject){
        ussObject.hull -= this.firepower;
       
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
// crete a class to generate enemy ships
class AlienShip {
    constructor(){
        this.destroyed = false;
        this.ships = [];

    }
    addAlienShip (name){
        let hull = randomFromInterval(3,6);
        let firepower = randomFromInterval(2,4);
        let accuracy = randomDecimal(0.6, 0.9);
        this.ships.push(new Ship(name, hull, firepower, accuracy));

    }
}
//instances of alien ship
let enemyFleet = new AlienShip();

enemyFleet.addAlienShip("ship_1");
enemyFleet.addAlienShip("ship_2");
enemyFleet.addAlienShip("ship_3")
enemyFleet.addAlienShip("ship_4");
enemyFleet.addAlienShip("ship_5");
enemyFleet.addAlienShip("ship_6");

// console.log(enemyFleet);


const savEarth = () => {
    let ships =enemyFleet.ships
    for(let i = 0; i < ships.length; i++){
        //break if we have lost our ship integrity.
        if(uss.hull <= 0){
            console.log("Game Over, the hull is at ", uss.hull);;
            break;
        }

        let keepLooping = true;
        while(keepLooping){
            //we go first!
            if(Math.random() < uss.accuracy){
                uss.alienShipDamages(ships[i]);
            }
            // is it completely destroyed?
            if(ships[i].hull < 0){
                console.log(ships[i].name + " destroyed! The hull is at ",ships[i].hull);
                break;
            }
            //if not completely destroyed aliens will take their shot.
            if(Math.random() < ships[i].accuracy)
            ships[i].ussDamages(uss);

            // are we completely destroyed? 
        }
    }
    
}
savEarth();



