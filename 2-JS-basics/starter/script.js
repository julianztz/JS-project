console.log("Hello World from the externel script!")

/* 
Data Types in JS
    Number: all floating point even written as int
    String; 
    Boolean: true/false
    Undefined: 
    Null: non-existent
*/
var FN = 'haha';
var LN = 'ha';
var age = 25;
console.log(FN+LN);
console.log(FN,LN);
console.log(FN+LN,25)
// weakly typed: type coercion
console.log(FN+LN+' is a '+25+' year old guy')

var marryStatus = false;
console.log(marryStatus);
var job;
console.log(job);       // job is undefined
job = 'master'
console.log(job);

//  //alert() func
//// variable mutation
//age = 'twenty five'
//alert('age becomes '+age)
//
//// input
//job = prompt('what to you want to do instead: ')
//console.log('the new job is: ', job)
//alert('your new job is: '+job)          // cannot use , here
//
//
///*
//JS has dynamic typing:
//    data types are automatically assigned to variables
//*/
//var num1 = 1;
//var str1 = num1 + "converting";
//console.log(str1);



/************basic operators************/

//typeof
console.log('LN is of type: ', typeof LN)
console.log('age is of type: ', typeof(age))
var x;
console.log('x is of type: ', typeof x)     // undefined



/************if else************/
// civil status equal: ===
if (FN=='haha'&& LN==="ha"){
    console.log('first name is: ', FN);
    console.log('last name is: ', LN);
    console.log('a'==="a");
}
console.log("xxxxxxxxxxxxxxxxxxxxxx")

/************ternary operator************/
var fn = 'Julian';
var age = 25;
age >= 18 ? console.log(fn + " can drink") : console.log(fn + " cannot drink");
var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink)


/************switch statement************/
var job = 'student'
switch(job) {
    case 'student':             //if
    case 'master student':      //elif
        console.log(fn + ' studies computer science');
        break;
    case 'driver':              //elif
        console.log(fn + ' drives uber in London');
        break;
    default:                    //else
        console.log(fn + ' does sth else');
}


/************truthy & falsy values************/
//falsy: undefined, null, 0, '', NaN
//truthy: NOT falsy


//===: compares type and value
//==:  compares only value

height = 23

if (height == '23'){
    console.log('the == operator does type coercion!')
}
if (height === 23){
    console.log('the === operator compares both type and value')
}
    


/************functions************/
function calculateAge(birthYear){
    return 2019-birthYear;
}
console.log(calculateAge(1994))


/***
            statement VS expression
expression: piece fo code that always produce a value
        eg:  a>b     
statement: just perform action; do not product immediate result
       eg:   if statement       for loop
    ***/

// funciton statement
//(function whatToDo =)funciton(job,fn) {};     // this is the short hand of:
//var whatToDo = function(job, fn) {...};
//////////

// funciton expression
var whatDoUDo = function(job, fn){
    switch (job){
        case 'student':
            return fn + ' studies cs';
        case 'driver':
            return fn + ' drives Lambo';
        case 'programmer':
            return fn + ' coding JS';
        default:
            return fn + ' does sth else';
    }
}
console.log(whatDoUDo('programmer', 'Julian'))
console.log(whatDoUDo('student', 'Ping'))
console.log(whatDoUDo('driver', 'Son'))




/********** Array ************/
var julian = ['Julian', 'Z', 1994, 'programmer', true]
julian.push('red')
julian.unshift('Dr.')
console.log(julian)

julian.pop()
julian.pop()
console.log(julian)
console.log(julian.indexOf(1994))
console.log(julian.indexOf('ab'))       // returns -1

var isLawyer = julian.indexOf('Lawyer') === -1 ? 'julian is not a lawyer' : 'julian is a lawyer'
console.log(isLawyer)



/************ Object ***********/
// way1:
var julian = {
    fn: 'Julian',
    ln: 'Z',
    birthYear: 1994,
    courses: ['cs1032', 'cs1026'],
    calAge: function() {       // funciton expression: returns a value
        this.age = 2019 - this.birthYear;
    }
};
console.log(julian.age);            // undefined???
console.log(julian.courses[0]);
julian['courses'].push('cs1027');
console.log(julian.courses);

// way2:
var ping = new Object();
ping.fn = 'Ping';
ping.ln = 'Z';
ping['age'] = 27;
console.log(ping);

/***** methods *****/
julian.age = julian.calAge();
console.log(julian.age);            // undefined???


/********* loop & iteration *********/
var julian = ['Julian', 'Z', 1994, 'programmer', true];
for (var i=0; i<julian.length; i++){
    console.log('index', i, 'is:', julian[i])
}

var i = 0;
while (i<julian.length){
    console.log('index', i, 'is:', julian[i]);
    i++;
}

/***** continue & break ******/
console.log('continue: ');
for (var i=0; i<julian.length; i++){
    if (typeof julian[i] !== 'string') continue;        // skip
    console.log(julian[i]);
}

console.log('break: ');
for (var i=0; i<julian.length; i++){
    if (typeof julian[i] !== 'string') break;           // terminate
    console.log(julian[i]);
}


console.log(sum(10,20))
//console.log(diff(10,20))        // reference error: cannot access diff before initialization

function sum(x,y){
    return x+y;
}
let diff = function(x,y){          
    return x-y;
}

