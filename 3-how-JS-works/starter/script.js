///////////////////////////////////////
// Lecture: Hoisting

calculateAge(1991);     // use before declaring
function calculateAge(year){
    console.log(2019 - year);    
}
calculateAge(1994);


//retirement(1994);     // won't work this way
var retirement = function(year){
    console.log(70 - (2019-year));
}
retirement(1994);



console.log(age)    // undefined
var age = 25
//console.log(sdas)   // not defined error







///////////////////////////////////////
// Lecture: Scoping


// First scoping example


//var a = 'Hello!';
//first();
//
//function first() {
//    var b = 'Hi!';
//    second();
//
//    function second() {
//        var c = 'Hey!';
//        console.log(a + b + c);
//    }
//}




// Example to show the differece between execution stack and scope chain


//var a = 'Hello!';
//first();
//
//function first() {
//    var b = 'Hi!';
//    second();
//
//    function second() {
//        var c = 'Hey!';
//        third()
//    }
//}
//
//function third() {
//    var d = 'Julian';
//    console.log(a + d);
////    console.log(a + b + c + d);
//}




///////////////////////////////////////
// Lecture: The 'this' keyword
//console.log("this object: ",this);
//calculateAge(1994);
//function calculateAge(year){
//    console.log(2019-year);
//    console.log("this is still: ",this);
//}
//
//var julian = {
//    name: "Julian",
//    birthYear: 1994,
//    calAge: function(){
//        console.log("this var is "+ this.name +" obj: ",this);
//        console.log(2019-this.birthYear);
//        
////        function innerFunc(){       // regular func(), not a method
////            console.log("this from innerFun():",this);
////        }
////        innerFunc();        // this is window obj again
////        
////        // function expression
////        var school = function(){    
////            console.log("this from function-expression school: ",this);
////        }
////        school();
//        
//    }
//}
//
//julian.calAge();
//
//var ping = {
//    name: 'Ping',
//    birthYear: 1991,
//};
//
//// !!!!!Method Borrowing!!!!!
//ping.calAge = julian.calAge;
//ping.calAge();










