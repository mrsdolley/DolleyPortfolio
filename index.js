//Exercise One
var command = 'Enter a number!';
var number = prompt(command);

var output = 0;

for (var num = 0; num <= number; num++) {
	output = output + num;
}

alert(output);

//Excerise Two
 
var questionOne = 'Do you want to play?';

var repeat, words = [];

var answerYes = "yes"; 
var answerNo = "no" ;

prompt(questionOne);

var command = 'Enter a word';

do {words.push(prompt(command));
     repeat = prompt('Do you want to play again?');
 
} while (repeat !== 'no');

  //document.write(words);
  console.log(words);

//Exercise Three
var questionOne = 'Would​ ​you​ ​like​ ​to​ ​print​ ​your​ ​name?';

prompt(questionOne);

var command = 'Enter your name.';

var name = window.prompt(command);

console.log("Hello. My name is " + name);

var questionTwo = 'Would​ ​you​ ​like​ ​to​ ​print​ ​this again?';

var repeat = window.prompt(questionTwo);
var repeatAgain;

 while (repeat == 'yes') {
    repeatAgain = console.log("Hello. My name is " + name + "!");
       repeat = prompt(questionTwo);
      
 }

 //Exercise Four
 var timeOfDay = window.prompt('What time of day is it?');

 var breakfast = 'Since​ ​it​ ​is​ ​morning,​ ​you​ ​should​ ​be​ ​eating​ ​breakfast.​ ​We suggest​ ​eggs​ ​and​ ​toast.';

 var lunch = 'Since​ ​it​ ​is​ ​noon,​ ​you​ ​should​ ​be​ ​eating​ ​lunch.​ ​We suggest​ a salad.';

 var dinner =  'Since​ ​it​ ​is​ ​evening,​ ​you​ ​should​ ​be​ ​eating​ ​dinner.​ ​We suggest​ chicken and rice.';


if (timeOfDay == 'morning') {
console.log(breakfast);
}
else if (timeOfDay == 'noon') {
console.log(lunch);
}
else if (timeOfDay == 'evening') {
console.log(dinner);
}
