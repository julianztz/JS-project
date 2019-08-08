/*****************************
 * CODING CHALLENGE 5
 */

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

// object1: John's tipping tech --> better version
var tipCal = {
    bills: [124, 48, 268, 180, 42],
    
    
    calculator: function () {
        console.log("this is tipCal obj: ", this)
        this.tip_array = []; // this. creating new variable for the current object -> calculator
        this.total_bill = [];
        for (var i = 0; i < this.bills.length; i++) {
            var bill = this.bills[i];
            var current_tip;
            if (bill < 50) {
                current_tip = 0.2;
            } else if (bill >= 50 && bill < 200) {
                current_tip = 0.15;
            } else {
                current_tip = 0.1;
            }
            this.tip_array[i] = ((current_tip * bill));
            this.total_bill[i] = ((bill * (1 + current_tip)));
        }
        return this.tip_array;
    }
}
console.log("tipCal before calculator():",tipCal); // the object is not completed, but the two arrays have been calculated
tipCal.calculator();
console.log("tipCal after calculator():",tipCal);


// object2: Mark's tipping tech
var tipCal2 = {
    bills: [77, 375, 110, 45],
    tip_array: [],
    total_bill: [],

    current_tip: 0,
    calculator: function () {
        for (var i = 0; i < this.bills.length; i++) {
            //            console.log(this.bills[i]);
            if (this.bills[i] < 100) {
                this.current_tip = 0.2;
            } else if (this.bills[i] >= 100 && this.bills[i] < 300) {
                this.current_tip = 0.1;
            } else {
                this.current_tip = 0.25;
            }
            this.tip_array.push((this.current_tip * this.bills[i]));
            this.total_bill.push((this.bills[i] * (1 + this.current_tip)));
        }
        return this.tip_array;
    }
}
console.log(tipCal2); // the object is not completed, but the two arrays have been calculated
tipCal2.calculator();
console.log(tipCal2);

function avg_tip(arr) {
    var sum = 0,
        avg = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    avg = sum / arr.length;
    return avg;
}

john_tipAvg = avg_tip(tipCal.tip_array);
mark_tipAvg = avg_tip(tipCal2.tip_array);

console.log('John family tipping avg: ', john_tipAvg);
console.log('Mark family tipping avg: ', mark_tipAvg);
if (john_tipAvg > mark_tipAvg) {
    console.log('John\'s family paid higher tip: ', john_tipAvg);
} else if (john_tipAvg < mark_tipAvg) {
    console.log('Mark\'s family paid higher tip: ', mark_tipAvg);
} else {
    console.log("they paid the same amount of tip");
}


// HOISTing:
// funciton declartion: already defined before execution
// variable declartion: undefined until execution phase