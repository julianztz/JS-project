function foo(){
    function bar() {            // statement: no immediate result
        return 3;
    }
    return bar();               
    function bar() {            // this declaration is move to the top
        return 8;
    }
}
alert(foo());       // 8



function foo(){
    var bar = function() {      // expression: generate the value
        return 3;
    };
    return bar();                
    var bar = function() {      // this expression will not be executed
        return 8;
    };
}
alert(foo());       // 3



alert(foo());       // 3
function foo(){                 // statement
    var bar = function() {      // expression
        return 3;
    };
    return bar();                         
    var bar = function() {      // not executed
        return 8;
    };
}



function foo(){                 
    return bar();               // bar() is not a function
    var bar = function() {
        return 3;
    };
    var bar = function() {
        return 8;
    };
}
alert(foo());