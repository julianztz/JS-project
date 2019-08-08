/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

*/

function tipCalculator(bill){
    var result = 0
    
    /****** wrong usage of switch statement *******/
//    switch (bill){
//        case bill < 50:
//           result = bill * (1+0.2);
//        case (50 <= bill && bill < 200):
//            result = bill * (1+0.15);
//        default:
//            result = bill * (1+0.1);    
//    }
    
    if (bill<50){
        result = bill*1.2;
    } else if (50<=bill && bill<200){       // cannot use (50<bill<200)
        result = bill*1.15;
    } else {
        result = bill*1.1;
    }
    
    
    return result
}


tipArr = [3]
amtArr = [3]
bills = [124, 48, 268]
tipArr[0] = (tipCalculator(bills[0])-bills[0])
tipArr[1] = (tipCalculator(bills[1])-bills[1])
tipArr[2] = (tipCalculator(bills[2])-bills[2])
console.log('the tip array is: ', tipArr)

amtArr[0] = (tipCalculator(bills[0]))
amtArr[1] = (tipCalculator(bills[1]))
amtArr[2] = (tipCalculator(bills[2]))
console.log('the final bill array is: ', amtArr)

