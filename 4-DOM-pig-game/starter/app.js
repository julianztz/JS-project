/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// global variables
var scores, roundScore, activePlayer;
var gamePlaying;
var lastDice;


/*************initialization*************/
init();

/***************Roll dice button************/
//Method1: callback function
//function btn(){
//    
//}
//btn();
//document.querySelector(".btn-roll").addEventListener('click', btn); 
//// callback function; reference to btn()
//// btn is a function we pass to addEventListener() function as argu

//Method2: anonymous function
document.querySelector(".btn-roll").addEventListener('click', function(){
    

    if(gamePlaying){
        var currentDOM = document.querySelector("#current-"+activePlayer);
        //anonymous function: no name, cannot be reused outside the function//
        //1.random number
        var dice1 = Math.floor(Math.random()*6)+1;
        var dice2 = Math.floor(Math.random()*6)+1;
        console.log(dice1);        
        console.log(dice2);        

        //2.display result: dice img
//        var diceDOM = document.querySelector(".dice");
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        
        document.getElementById('dice-1').src = 'dice-'+dice1+'.png';
        document.getElementById('dice-2').src = 'dice-'+dice2+'.png';

        
        //3.update current & round score if NOT 1
        // challenge3:
        if (dice1!==1 && dice2!==1){
            roundScore += dice1;
            roundScore += dice2;
            currentDOM.textContent = roundScore;
        } else {
            nextPlayer();
        }
        
        /*
        // challenge1:
        if (dice === 6 && lastDice === 6){
            scores[activePlayer] = 0;                   // challenge1: twice 6 in a row
            document.getElementById("score-"+activePlayer).textContent = scores[activePlayer];
            nextPlayer();   
        } 
        else if (dice !== 1){
            roundScore += dice;
            currentDOM.textContent = roundScore;
        } else {
            nextPlayer();
        }  
        lastDice = dice;
        */
    }

}); 

/***************hold button**************/
document.querySelector(".btn-hold").addEventListener('click',function(){
    if(gamePlaying){
        var currentDOM = document.querySelector("#current-"+activePlayer);
        //1.add current score tp global score
        scores[activePlayer] += roundScore;
        //2.update UI
        var winningScore = document.querySelector('.final-score').value;
        console.log(winningScore);
        if (!winningScore){
            winningScore = 100;
        }
        
        document.getElementById("score-"+activePlayer).textContent = scores[activePlayer];
        //3.check if anyone won the game
        if (scores[activePlayer]>=winningScore){
            gamePlaying = false;
            document.querySelector('#name-'+activePlayer).textContent = "WINNER!";
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
//            document.querySelector(".dice").style.display = 'none';  // only selects the first
            document.getElementById("dice-1").style.display = 'none';
            document.getElementById("dice-2").style.display = 'none';
        } else {
            nextPlayer();
        }
    }

});


function nextPlayer(){
    var currentDOM = document.querySelector("#current-"+activePlayer);
    roundScore = 0;
    currentDOM.textContent = 0;
    activePlayer === 0 ? activePlayer=1 : activePlayer=0;

    document.querySelector(".player-0-panel").classList.toggle('active');
    document.querySelector(".player-1-panel").classList.toggle('active');
//    document.querySelector(".dice").style.display = 'none';   // only selects the first
    document.getElementById("dice-1").style.display = 'none';
    document.getElementById("dice-2").style.display = 'none';
}


/***************new game button**************/
document.querySelector(".btn-new").addEventListener('click',init);


function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    

//    document.querySelector(".dice").style.display = 'none';     // querySelector only selects the first
    document.getElementById("dice-1").style.display = 'none';
    document.getElementById("dice-2").style.display = 'none';
    
    document.getElementById("score-0").textContent = '0';
    document.getElementById("score-1").textContent = '0';
    document.getElementById("current-0").textContent = '0';
    document.getElementById("current-1").textContent = '0';  
    
    document.getElementById('name-0').textContent = "Player1!";
    document.getElementById('name-1').textContent = "Player2!";
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');   document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    // set the player1 to be active player
    document.querySelector('.player-0-panel').classList.add('active');
};




/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/