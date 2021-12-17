import Bike from "./bike"

class GearedBike extends Bike {
    gear: number = 1; // asigned initial value
    shiftUp(): void {

    }
    shiftDowen(): void {

    }
    //this overides the logic of the Bike go() method
    go(): void {
        //this.speed+= 1.5;
        super.go();
        super.go();//increat speed by 2 // call super method
    }
}

let gearedBike: GearedBike = new GearedBike(1); // uses defualt construcktor when not defind in the class
console.log(gearedBike.getSpeed);
gearedBike.go();
console.log(gearedBike.getSpeed);
export default GearedBike;