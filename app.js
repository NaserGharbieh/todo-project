'use strict'
const questionsArray=["Are you intrested in hiring me ?",
                      "Do you want to see this project ?",                                   
                      "If you like it,\nCan you contact me with the about me page for further info ?" ]; 
 var answersArray =new Array(3); 
 confirmWelcomeMsg();
 alert("I have three questions.\nI would like you to answer them with the right format\nONlY LIKE This: (Yes/No)")
 askQuestions(questionsArray,answersArray);  
 replaceEmptyAnswers (answersArray);
 printAnswersInConsol (answersArray);
 

function askQuestions ( questionsArray,answersArray){

  for (let index = 0; index < questionsArray.length; index++) {
         answersArray[index] = prompt(questionsArray[index]);
     }
}
function replaceEmptyAnswers (answersArray){
  for (let index = 0; index < answersArray.length; index++) {
   if (answersArray[index]===""||answersArray[index]==null)
   answersArray[index]="invalid";
  }
  }
function printAnswersInConsol (answersArray){
for (let index = 0; index < answersArray.length; index++) {
  console.log( questionsArray[index]+"\n Answer : "+ answersArray[index]);
  }
}

function confirmWelcomeMsg(){
var confirmWelcomMsg = confirm("Do you want a wlecoming message? \nClick cancel if you want to skip it ^_^") ;
if(confirmWelcomMsg == true){
    var name = prompt("please enter your name");
    var gender = prompt("please enter your gender \n  The answer should be either (male or female).");
    var age = prompt("please enter your age ");
      if (age<=0 ) {
      alert("age should be more than zero");
      age = prompt("please enter your age ");

      } 

      if( gender== "male")
      alert("Hi Mr " + name +"\nI hope you have a wonderful day");
      else if( gender== "female")
      alert("Hi Ms " + name +"\nI hope you have a wonderful day");
      else alert("Hi " + name +"\nI hope you have a wonderful day");
    if (name != null && name !="") 
    changeText.textContent = "Hi " + name;
  }}
  const changeText = document.querySelector("#change-text");
    