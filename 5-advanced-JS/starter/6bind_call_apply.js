var julian = {
    name: 'Julian',
    age: 25,
    job: 'programmer',
    presentation: function(style, timeOfDay) {
        if(style === 'formal') {
            console.log('good '+timeOfDay+ ' ladies and gentalmen! '+ 'I am '+ this.name+ ' I am '+this.age + ' I am a ' + this.job);
        } else if (style === 'casual') {
            console.log('sup! I am '+ this.name + ' good '+ timeOfDay);
        }
    }
};

//julian.presentation('casual', 'morning');
//julian.presentation('formal', 'morning');


// call: method borrowing
var ping = {
    name: 'Ping',
    age: 26,
    job: 'teacher'
}
//julian.presentation.call(ping, 'casual', 'afternoon');


// apply: method borrowing; same as call method
julian.presentation.apply(ping, ['formal','evening']);


// bind: allows preset argu; returns a function
var julianCasual = julian.presentation.bind(julian, 'casual');
                                        // the first argu should be this
//julianCasual('morning');
//julianCasual('evening');

var pingFormal = julian.presentation.bind(ping, 'formal');
                                        // the first argu should be this
//pingFormal('afternoon');
//pingFormal('night');