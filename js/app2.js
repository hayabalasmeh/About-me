'use strict'

let userConfirm = prompt('Are you ready to play a guess game about Haya Balasmeh Biography?yes,no');

userConfirm = userConfirm.toLowerCase();

alert('You answered with ' +userConfirm); //console.log('You answered with ' +userConfirm);

switch(userConfirm){
    case 'yes':
    case "y":
        alert('Alright, then get ready the game will start now');
        break;
        default:
        alert('It is okay , we will play anyway XD');}
        

let userFirstQ = prompt('First Question, Did Haya worked as innovation professional in 2017? yes/no');
 userFirstQ = userFirstQ.toLowerCase();
 alert('You answered with ' +userFirstQ);//console.log('You answered with ' +userFirstQ);

 switch(userFirstQ){
     case 'no':
     case 'n':
             alert('Great Job.You answered correctly');
             break;
             default:
                 alert("Sorry. Your answer is wrong, try again later.");
 }


 let userContinue = prompt('Do you want to continue with game? yes/no');
 userContinue = userContinue.toLowerCase();
 alert('You answered with ' +userContinue);   //console.log('You answered with ' +userContinue);
 
 if(userContinue =='yes'||userContinue =='y' ){
    let userSecQ= prompt('Does Haya Have a master degree in Business Administration?yes/no');
    userSecQ = userSecQ.toLowerCase();
    switch(userSecQ){
        case 'no':
            case 'n':
                alert('Bravo! you answered correctly');
                break;
                default:
                    alert('Sorry this is not correct. I wish I had one XD');
    }
 } else { alert('No problem you can comeback at anytime')}

 
  //console.log('You answered with '+userSecQ);




 let userStory= prompt('Did you enjoy the game?yes/no');
 userStory = userStory.toLowerCase();
 alert('You answered with '+userStory); //console.log('You answered with '+userStory);

 switch(userStory){
     case'yes':
     case 'y':
         alert('I am glad to hear that, thank you for your feedback');
         break;
         default:
             alert('we appreciate your feedback , if you want please contact us to see what we can do to improve the game');
 }
 