//Immediately Invoked Function Expression
// data privacy: separate the code scope from outside
//               don't interfere other other global vars
// non-reusable


// normal way:
function game(){
    var score = Math.random() * 10;
    console.log(score >= 5);
};
game();

// IIFE:
(function(){
    var score = Math.random() * 10;
    console.log(score >= 5);
})();


 // 5 is the parameter in this case
(function(luck){
    var score = Math.random() * 10;
    console.log(score >= 5-luck);
})(5);