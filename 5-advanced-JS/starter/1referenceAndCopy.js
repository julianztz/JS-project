// 8.20 Primitives VS Objects
// Primitives: number, string, boolean undefined, null

//primitives: making copy
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);
console.log("primary type: making a new copy");

//objects: making reference
var obj1 = {
    name: "Julian",
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);
console.log("object: create reference & point to the same obj")

//functions
var age = 27;
var obj = {
    name: "ping",
    city: "london"
};

function change(a, b) {
    a = 30;
    b.city = "San Francisco";
};
change(age, obj);
console.log("primitive passes copy: " + age);
console.log("object passes reference: " + obj.city);