// 8.20 function returns functions
function interviewQ(job){
    if(job==="designer") {
       // anonymous function that can be defined later
       return function(name){
            console.log("what is designer? " + name);
       }
    }  else if(job==="teacher") {
       return function(name){
            console.log("what is teacher? " + name);
       }
    }  else {
       return function(name){
            console.log("whusup? " + name);
       }
    } 
}

//how to use anonymous function
var designerQ = interviewQ("designer");
var teacherQ = interviewQ("teacher");
var generalQ = interviewQ("homeless");
designerQ("Julian");
teacherQ("Julian");
designerQ("Ping");
teacherQ("Ping");
generalQ("Al");
 
//another way of doing this:
interviewQ("programmer")("XOXO");
interviewQ("teacher")("Bing");