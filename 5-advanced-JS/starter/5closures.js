// 8.20 closure
/*
* A closure is the combination of a function bundled together (enclosed);
* In other words, a closure gives you access to an outer function’s scope from 
* an inner function. In JavaScript, closures are created every time a function 
* is created, at function creation time.
*
* The inner function will have access to the variables in the outer function 
* scope, even after the outer function has returned. The inner function is returned 
* to outter as return value
* 
* Why using closure? 
    Data Privacy: essential property that helps us to program on interface; 
    not implementation (Design Pattern)
* 
*/

function retirement(retirementAge) {
    var a = " years left until retirement";
    //  closure:
    //    the inner function() is has always access to vars and parameters
    //    of the outter func retirement(); even if is already returned
    return function (birthYear) {
        var age = 2019 - birthYear;
        console.log((retirementAge - age) + a);
    }
}

// way1
var retirementUS = retirement(66);
var retirementCN = retirement(70);
var retirementGer = retirement(65);

retirementUS(1990);
retirementCN(1990);
retirementGer(1990);

// way2
//retirement(66)(1990);



// closure EXE:

/*  better way  */
function interviewQ(job) {

    return function (name) {
        if (job === "designer") {
            console.log("what is designer? " + name);
        } else if (job === "teacher") {
            console.log("what is teacher? " + name);
        } else {
            console.log("whusup? " + name);
        }
    }
}

var interviewLaw = interviewQ("lawyer");
interviewLaw("Howard");

interviewQ("designer")("Joe");
// outter function interviewQ return at ("designer")



///* original code */
//var name = "The Window";
//var object = {
//    name: "My Object",
//    getNameFunc: function () {
//        return function () {
//            return this.name;
//        };
//    }
//};
//alert(object.getNameFunc()());


///* closure frag1 */
//var name = "The Window";
//var object = {
//    // global var
//    name: "My Object",
//
//    // global function
//    getNameFunc: function () {
//        console.log("\nthis.name from getNameFunc: ", this.name);
//        var parentFuncVar = "parent is still here!"
//
//        // getNameFunc ends here
//        return function () {
//            console.log("this.name from closure: ", this.name);
//            console.log(parentFuncVar);
//            return this.name;
//        };
//    }
//};
//object.getNameFunc()();


/* closure frag2 */
var name = "The Window";
var object = {
    name: "My Object haha",

    getNameFunc: function () {
        var that = this;
        console.log("name from getNameFunc: ", this.name);
    
        /* this function is closure */
        return function () {
            // outter function returns already; this becomes windows scope
            console.log(this.name);
            // closure: that can still be used in inner function
            console.log(that.name);
            return that.name;
        };
    }
};
object.getNameFunc()();

// !!!!!!!!this: is depending on which object call the function!!!!!!!!
