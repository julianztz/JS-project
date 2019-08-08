/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/


var john = {
    fn: 'John',
    ln: 'Smith',
    mass: 75,
    height: 1.7,
    BMI: function(){
        this.bmi = this.mass/((this.height)*(this.height));
        return this.bmi;
    }
}

var mark = new Object();
mark.fn = 'mark';
mark.ln = 'Doe';
mark.mass = 90;
mark.height = 1.8;

mark.BMI = function(){
    mark.bmi = mark.mass/(mark.height*mark.height);
    return mark.bmi;
}


john.BMI();         // have to invoke the BMI() funciton so that the obj has it as a property
mark.BMI();
console.log(john,mark);

console.log(john.bmi);
console.log(mark.bmi);

