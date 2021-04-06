'use strict'

let userFirstQ = prompt('Did Haya worked at King Hussein Cancer Center ?yes,no');

userFirstQ = userFirstQ.toLowerCase();

//alert('You answered with ' +userConfirm); //console.log('You answered with ' +userConfirm);
let score=0;
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
        alert('Could you please stick with the yes/no answer');}
        

let userSecQ = prompt(' Did Haya worked as innovation professional in 2017? yes/no');
 userSecQ = userSecQ.toLowerCase();
 //alert('You answered with ' +userFirstQ);//console.log('You answered with ' +userFirstQ);

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
          alert('Can you please stick to the yes/no answer!')
 }

      
  
  let userThirdQ= prompt('Does Haya Have a master degree in Business Administration?yes/no');
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
    }

 let userFourthQ = prompt('Are Haya still working with Dream&Idea consultation firm? yes/no');
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
            
    }
    
    let userFifthQ = prompt('Did Haya Work outside Jordan ?');
    userFifthQ= userFifthQ.toLowerCase();
    switch (userFifthQ) {
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
    }

    
    let userNum= prompt("So, let's make the game more funny, could you guess the number of countries I have visited in my whole life? ");
        
        console.log(userNum);
    let i = 1;
     while (i <= 3) {
        
         if (userNum > 12) {
             userNum= prompt('Wow that is a high number of places, can you try again, please!');
             userNum = parseInt(userNum);
         } else if (userNum < 12 ) {
             userNum= prompt('Actually I have visited higher number of places, try again!');
             userNum = parseInt(userNum);
         } 
             
          else if (userNum === 12) {
             alert('Bravo! that is correct !');
             userNum = parseInt(userNum);
             score++;
             i= 4;
               }
         i++
        }


       if(userNum !==12){
           alert ('Sorry, Your attempts have faild. Actually I have visited 12 countries so far !');
        } else { alert('Good Job !');}

        

    let countriesNames = ['qatar','dubai','canada','france','poland','united states'];
    
    let countNum = prompt('can you guess the name of one the Countries?');
    countNum = countNum.toLowerCase();
     //console.log(countNum);
     //console.log(countriesNames);
     //console.log(countNum);
     //console.log(countriesNames.indexOf(countNum));
    let trial = 1;
    
    while (trial <= 6) {
       
         if (countriesNames.indexOf(countNum) >= 0){
             alert('Bravo! I have visited it and it was such a lovely country');
             trial=7;
             score++;
            }
             else{ 
                 countNum = prompt('No, I have not visited this country. Try again!');
                countNum = countNum.toLowerCase();
             }
             countNum = countNum.toLowerCase(); 
         console.log(countNum);
        trial++;
    }
    
    alert('Actually I have visited the following countries '+ countriesNames);
   
 //alert('You answered with ' +userContinue);   //console.log('You answered with ' +userContinue);
 
 

 
  //console.log('You answered with '+userSecQ);




 let userStory= prompt('Did you enjoy the game?yes/no');
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
 alert('You score is out of 7: '+ score);
 let userName= prompt('would you please remind me with your name ? ');
 console.log(userName);
  alert("Thank you for visiting my website "+userName);