// Class 
class BMI {

    // +Constructor
    constructor(height, weight) { 
        this.height = height;
        this.weight = weight;
    }

    // Method 
    calculateBMI() {

        let bmi = this.weight / (this.height ** 2); 
        return bmi;
    }

}

let MyBmi = new BMI(2, 90); 
let calculatedBmi = MyBmi.calculateBMI(); 
                                          
console.log(calculatedBmi); 