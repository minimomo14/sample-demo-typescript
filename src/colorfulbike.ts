import Bike from "./bike";

class ColorfulBike extends Bike {
    //color: string;
    constructor(speed: number,public color: string){
        super(speed); //calls the parent constructor
            this.color = color; //assign initial value
          
    };
    
}
let colorfulBike: ColorfulBike = new ColorfulBike(1, "Pink");
export default ColorfulBike;