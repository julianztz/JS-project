/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

var john_s1 = 1
var john_s2 = 3
var john_s3 = 1

var mike_s1 = 1
var mike_s2 = 3
var mike_s3 = 1

var mary_s1 = 1
var mary_s2 = 1
var mary_s3 = 2

var john_avg = (john_s1+john_s2+john_s3)/3
var mike_avg = (mike_s1+mike_s2+mike_s3)/3
var mary_avg = (mary_s1+mary_s2+mary_s3)/3

if (john_avg>mike_avg){
    if (john_avg>mary_avg){
        console.log('John\'s team is the winner with a score of', john_avg);
    } else if (john_avg === mary_avg){
        console.log('John\'s team and Mary\'s team tie');
    } else {
        console.log('Mary\'s team is the winner with a score of', mary_avg);
    }       
} else {        // john <= mike
    if (mary_avg>mike_avg){
        console.log('Mary\'s team is the winner with a score of', mary_avg);
    } else if (mary_avg === mike_avg){
        if (mike_avg === john_avg){
            console.log('three teams tie the game');
        } else {
            console.log('Mike\'s team and Mary\'s team tie');
        }
    } else {
        if (mike_avg === john_avg){
            console.log('John\'s team and Mike\'s team tie');
        } else {
            console.log('Mike\'s team is the winner with a score of', mike_avg);
        }
    }
}

