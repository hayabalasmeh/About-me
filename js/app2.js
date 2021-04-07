'use strict';

// Q1 declaring:
let userFirstQ = null;
let score=0;

function q1(){
    userFirstQ = prompt('Did Haya worked at King Hussein Cancer Center ?yes,no');
    userFirstQ = userFirstQ.toLowerCase();

    //console.log('You answered with ' +userConfirm);
    switch(userFirstQ){
        case 'yes':
        case "y":
            alert('Alright, You have answered correctly');
            score ++;
            break;
        case 'no':
        case 'n':
            alert('Actually I had worked at KHCC. You did not answer it coorectly');
            break;
        default:
            alert('Could you please stick with the yes/no answer');
            break;
    }
}

// Q1 calling:
q1();


// Q2 declaring:
let userSecQ = null;

function q2(){
    userSecQ = prompt(' Did Haya worked as innovation professional in 2017? yes/no');
    userSecQ = userSecQ.toLowerCase();
    //console.log('You answered with ' +userFirstQ);

    switch(userSecQ){
    case 'no':
    case 'n':
        alert('Great Job.You answered correctly');
        score++;
        break;
    case 'yes':
    case 'y':
        alert("Sorry. Your answer is wrong, try again later.");
        break;
    default:
        alert('Can you please stick to the yes/no answer!');
        break;
    }
}

// Q2 calling:
q2();

// Q3 declaring:
let userThirdQ = null;

function q3(){  
    userThirdQ = prompt('Does Haya Have a master degree in Business Administration?yes/no');
    userThirdQ = userThirdQ.toLowerCase();

    switch(userThirdQ){
        case 'no':
        case 'n':
            alert('Bravo! you answered correctly');
            score++;
            break;
        case 'yes':
        case 'y':
            alert('Sorry this is not correct. I wish I had one XD');
            break;
        default:
            alert('Try again later!');
            break;
    }
}

// Q3 calling:
q3();

// Q4 declaring:
let userFourthQ = null;

function q4(){
    userFourthQ = prompt('Are Haya still working with Dream&Idea consultation firm? yes/no');
    userFourthQ = userFourthQ.toLowerCase();

    switch (userFourthQ) {
        case 'yes':
        case 'y':
            alert('Actually that is not correct !');   
            break;
        case 'no':
        case 'n':
            alert('That is correct. I resigned at JAN/2021');
            score++;
            break;
        default:
            alert('Can you answer using only yes/no answer, please!');
            break;   
    }
}

// Q4 calling:
q4();


// Q5 declaring:

let userFifthQ = null;
function q5(){
    userFifthQ = prompt('Did Haya Work outside Jordan ?');
    userFifthQ= userFifthQ.toLowerCase();

    switch (userFifthQ){
        case 'yes':
        case 'y':
            alert('That is correct I have worked in UAE for 3 months.');
            score++;
            break;
        case 'no':
        case 'n':
            alert('No I do have worked outside Jordan');
            break;
        default:
            alert('Can you try again later with y/n answer !');
            break;
    }
}

// Q5 calling:
q5();

// Q6 declaring: 
let userNum = null;
let i = 1;
function q6(){
    userNum = prompt("So, let's make the game more funny, could you guess the number of countries I have visited in my whole life? ");
    userNum = parseInt(userNum);

    // console.log(userNum);
    while (i <= 3) {
        if (userNum > 12) {
            userNum= prompt('Wow that is a high number of places, can you try again, please!');
            userNum = parseInt(userNum);
        }else if (userNum < 12 ) {
            userNum= prompt('Actually I have visited higher number of places, try again!');
            userNum = parseInt(userNum);
        }else if (userNum === 12){
            alert('Bravo! that is correct !');
            userNum = parseInt(userNum);
            score++;
            i= 4;
            }
        i++;
    }
    if(userNum !== 12){
        alert ('Sorry, Your attempts have faild. Actually I have visited 12 countries so far !');
    }else{ 
        alert('Good Job !');
    }
}

// Q6 calling:
q6();

        
// Q7 declaring:
let countriesNames;
let countNum;
let trial = 1;

function q7(){
    countriesNames = ['qatar','dubai','canada','france','poland','united states'];
    countNum = prompt('can you guess the name of one the Countries?');
    countNum = countNum.toLowerCase();
        //console.log(countNum);
        //console.log(countriesNames);
        //console.log(countNum);
        //console.log(countriesNames.indexOf(countNum));
    
    while (trial <= 5){
        if(countriesNames.indexOf(countNum) >= 0){
            alert('Bravo! I have visited it and it was such a lovely country');
            score++;
            trial=7;
        }else{ 
            countNum = prompt('No, I have not visited this country. Try again!');
            countNum = countNum.toLowerCase();
        }
        countNum = countNum.toLowerCase(); 
        // console.log(countNum);
        trial++;
    }
    alert('Actually I have visited the following countries '+ countriesNames);
}

// Q7 calling:
q7();
    
// last message Declare:
let userStory;
let userName;
function feedBack(){
    userStory= prompt('Did you enjoy the game?yes/no');
    userStory = userStory.toLowerCase();
    //alert('You answered with '+userStory); //console.log('You answered with '+userStory);

    switch(userStory){
        case'yes':
        case 'y':
            alert('I am glad to hear that, thank you for your feedback');
            break;
        case'no':
        case 'n':
            alert('we appreciate your feedback , if you want please contact us to see what we can do to improve the game');
            break;
        default:
            alert('Thank you !');
    }

    alert('You score is ' + score + ' out of 7');
    userName = prompt('would you please remind me with your name?');
    // console.log(userName);
    alert("Thank you for visiting my website "+userName);
}

// last message calling:
feedBack();