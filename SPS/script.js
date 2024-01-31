/*var main = function (input) {
  var randomDiceRoll = diceRoll();
  var randomDiceRoll2 = diceRoll();
  var randomDiceRoll3 = diceRoll();
  var randomDiceRoll4 = diceRoll();
  console.log("dice roll");
  console.log(randomDiceRoll,randomDiceRoll2,randomDiceRoll3,randomDiceRoll4);
  var myOutputValue =
    "you lose!";
  // easier dice game, within 2
  if ( (input == randomDiceRoll || input == randomDiceRoll2 || input == randomDiceRoll3 || input == randomDiceRoll4 )
  ) {
    console.log("win!");
    myOutputValue =
      "you won! you guessed " + input + " and you rolled " + randomDiceRoll + randomDiceRoll2 + randomDiceRoll3 + randomDiceRoll4;
  }
  return myOutputValue;
};
// dice roll function
var diceRoll = function () {
  var randomDecimal = Math.random() * 9;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger;
  return diceNumber;
};
*/
//Computerised Scissors Paper Stone 
//Create a basic version of Scissors Paper Stone where the user inputs one of "scissors", "paper", or "stone", the program internally randomly chooses scissors, 
//paper, or stone, and the program outputs whether the user won, the program won, or it's a draw.
//Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.
var main = function (input) {
var CompChoice = randomnumber();
console.log ('number' , CompChoice)
var PC = input; 
var SCI = 'SCISSORS';
var pap = 'PAPER';
var rock= 'ROCK';
var RSCI = 'R_SCISSORS';
var rpap = 'R_PAPER';
var rrock = 'R_ROCK';

if (PC != SCI ||
    PC != pap ||
    PC != rock ||
    PC != RSCI||
    PC != rpap||
    PC != rrock)
  {
    MyOutputValue = "Please Enter Only SCISSORS , ROCK , PAPER , OR reversed 😏 , TRY AGAIN.";
  } 
  
if (CompChoice == 0)
{ 
  CC= SCI;
  RCC= RSCI ;
}
if (CompChoice == 1)
{ 
  CC= pap;
  RCC= rpap ;
}
if (CompChoice == 2)
{
 CC = rock;
 RCC= rrock ;
}
// Player Choice Same As Computer Choice
if (PC == CC){
MyOutputValue = 'Its a tie! <br><br> you chose ' + input + '<br><br>Computer Chose ' + CC + '<br><br> Play another round by typing SCISSORS , ROCK Or PAPER!';
}
// Input = rock , Output = Paper
if (PC == rock && CC == pap) 
{
  MyOutputValue = 'You Lose! <br><br>'+'You Chose Rock 🗿<br><br>'+'Computer Chose Paper 📝' + '<br><br> Play another round by typing SCISSORS , ROCK Or PAPER!';
}
// Input = Paper , Output = Scissors 
if (PC == pap && CC == SCI) 
{
  MyOutputValue = 'You Lose! <br><br>'+'You Chose Paper 📝<br><br>'+'Computer Chose Scissors ✂️' + '<br><br> Play another round by typing SCISSORS , ROCK Or PAPER!';
}
// Input = Scissors , Output = Rock
if (PC == SCI && CC == rock) 
{
  MyOutputValue = 'You Lose! <br><br>'+'You Chose Scissors ✂️<br><br>'+'Computer Chose Rock 🗿' + '<br><br> Play another round by typing SCISSORS , ROCK Or PAPER!';
}
// Input = Scissors , Output = Paper
if (PC == SCI && CC == pap) 
{
  MyOutputValue = 'You Win!<br><br>'+'You Chose Scissors ✂️<br><br>'+'Computer Chose Paper 📝' + '<br><br> Play another round by typing SCISSORS , ROCK Or PAPER!';
}
// Input = Paper , Output = Rock
if (PC == pap && CC == rock) 
{
  MyOutputValue = 'You Win!<br><br>'+'You Chose Paper 📝<br><br>'+'Computer Chose Rock 🗿' + '<br><br> Play another round by typing SCISSORS , ROCK Or PAPER!';
}
// Input = rock , Output = Scissors
if (PC == rock && CC == SCI) 
{
  MyOutputValue = 'You Win!<br><br>'+'You Chose Rock 🗿<br><br>'+'Computer Chose Scissors ✂️' + '<br><br> Play another round by typing SCISSORS , ROCK Or PAPER!';
}   
// REVERSED VERSION 
if (PC == RCC)
{
  MyOutputValue = 'Its a tie! <br><br> you chose ' + input + '<br><br>Computer Chose ' + RCC + '<br><br> Play another round by typing SCISSORS , ROCK Or PAPER!';
}
if (PC == rrock && RCC == rpap) 
{
  MyOutputValue = 'You Win! <br><br>'+'You Chose Rock 🗿<br><br>'+'Computer Chose Paper 📝' + '<br><br> Play another round by typing SCISSORS , ROCK Or PAPER!';
}
if (PC == rpap && RCC == RSCI) 
{
  MyOutputValue = 'You Win! <br><br>'+'You Chose Paper 📝<br><br>'+'Computer Chose Scissors ✂️' + '<br><br> Play another round by typing SCISSORS , ROCK Or PAPER!';
}
if (PC == RSCI && RCC == rrock) 
{
  MyOutputValue = 'You Win! <br><br>'+'You Chose Scissors ✂️<br><br>'+'Computer Chose Rock 🗿' + '<br><br> Play another round by typing SCISSORS , ROCK Or PAPER!';
}
if (PC == rrock && RCC == RSCI) 
{
  MyOutputValue = 'You Lose! <br><br>'+'You Chose Rock 🗿<br><br>'+'Computer Chose Scissors ✂️' + '<br><br> Play another round by typing SCISSORS , ROCK Or PAPER!';
}
if (PC == rpap && RCC == rrock) 
{
  MyOutputValue = 'You Lose! <br><br>'+'You Chose Paper 📝<br><br>'+'Computer Chose Rock 🗿' + '<br><br> Play another round by typing SCISSORS , ROCK Or PAPER!';
}
if (PC == RSCI && RCC == rpap) 
{
  MyOutputValue = 'You Lose! <br><br>'+'You Chose Scissors ✂️<br><br>'+'Computer Chose Paper 📝' + '<br><br> Play another round by typing SCISSORS , ROCK Or PAPER!';
}
return MyOutputValue;
}
var randomnumber= function(){
  var randomgen = Math.random() * 3 ;
  var randomint = Math.floor(randomgen);
  var choice = randomint;
  return choice;
}
