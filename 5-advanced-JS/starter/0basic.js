// 8.19 Function constructor

//julian obj
var julian = {
    name: "Julian",
    birthYear: 1994,
    job: "SDE"
};

//Person constructor/class
var Person = function (name, birthYear, job) {
    this.name = name;
    this.birthYear = birthYear;
    this.job = job;
}
//inheritance method: calculateAge
Person.prototype.calculateAge = function () {
    console.log(this.name + " is " + (2019 - this.birthYear) + " years old.");
}
//inheritance property: lastName
Person.prototype.lastName = "Doe";

var julian = new Person("Julian", 1994, "SDE");
var ping = new Person("Ping", 1991, "officer");
julian.calculateAge();
ping.calculateAge();


/*
 ** more ways to create obj & inheritance
 */
// Object.create 

var personProto = { // prototype as simple obj; NOT constructor (small letter) 
    calculateAge: function () {
        console.log(2019 - this.birthYear);
    }
};

//way1
var tom = Object.create(personProto);
tom.name = "Tom";
tom.birthYear = 1989;
tom.job = "hooker";

//way2
var jane = Object.create(personProto, {
    name: {
        value: "Jane"
    },
    birthYear: {
        value: "1999"
    },
    job: {
        value: "nurse"
    }
});











