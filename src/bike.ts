//Parent class
class Bike {
    //speed: number = 0;
    private speed:number;
    //readonly speed: number;
    constructor(speed: number) {
        this.speed = speed;
    }
    go(): void {
        this.speed;
    }
    getSpeed() {
        return this.speed;
    }
    setSpeed(speed: number) {
        this.speed = speed;

    }
}
// add speed value which is given 1 to pass along inside the parameter
let bike: Bike = new Bike(1); // uses defualt construcktor when not defind in the class
console.log(bike.getSpeed);
bike.go();
console.log(bike.getSpeed);
export default Bike;

function sayHello() {

}

//bike.go(); // method
//