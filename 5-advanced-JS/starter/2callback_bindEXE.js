// 8.20 callback func: passing function as arguments
// when to use?
/*
    Most of the time we are creating programs and applications that operate in a synchronous manner. 
    In other words, some of our operations are started only after the preceding ones have completed. 
    Often when we request data from other sources, such as an external API, we don’t always know when 
    our data will be served back. In these instances we want to wait for the response, but we don’t 
    always want our entire application grinding to a halt while our data is being fetched. These 
    situations are where callback functions come in handy.
*/


/* 
    this func() receives inputArr and returns new resultArr 
    callback function descides how/what to do (to the inputArr)
*/
function arrayCalc(inputArr, callback) {
    var resultArr = [];
    for (var i = 0; i < inputArr.length; i++) {
        resultArr.push(callback(inputArr[i]))
    }
    return resultArr;
};

//callback function1: 
function CB_calculateAge(year) {
    return 2019-year;
};

//callback function2:
function CB_maxHeartRate(age){
    if (age>=18 && age <=81) {
        return Math.round(206.9 - (0.67*age));
    } else {
        return -1;
    } 
}

//callback function3:
function CB_adult(limit, age) {
    return age > limit;
}



var years = [1982, 1991, 1993, 1994, 2008, 1909];
// callback func is passed as reference, for the other function to call it later
var age_list = arrayCalc(years, CB_calculateAge);
console.log(age_list);

var heart_rates = arrayCalc(age_list, CB_maxHeartRate);
console.log(heart_rates);


// bind EXE
// adult func() takes 2 argu; but the callback in arrayCalc takes only one argu
var ageChina = arrayCalc(age_list, CB_adult.bind(this, 20));
console.log(ageChina);





