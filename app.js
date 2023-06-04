'use strict'

const changeText = document.querySelector("#change-text");
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
    if (name !=null &&name !="") 
    changeText.textContent = "Hi " + name;
    const emoji = '\uD83D\uDE0D';
    console.log(emoji);
}