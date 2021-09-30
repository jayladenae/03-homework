// Assignment Code
var generateBtn = document.querySelector("#generate");
// my code
var pswCont = document.querySelector('#id');

// character types
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var number = [0,1,2,3,4,5,6,7,8,9]
var specChar = ["!","#","$","%","&","(",")","*",]


 generateBtn.addEventListener("click", function(){
 var pwLength = prompt("Please, enter the length you would like your password to be: (minumum characters: 8 | maximum characters:128)", "ENTER HERE"); 
  if (pwLength < 8 || pwLength > 128) {
  prompt("Please, enter a number between: 8 - 128.", "ENTER HERE");
  } 
  var psw = [];
  var spcChoice = window.confirm("Would you like to include special characters in your password?");
  if (spcChoice === true) {
  psw = psw.concat(specChar); 
  console.log(psw);
  } 
  var numChoice = window.confirm("Would you like to include numbers in your password?");
   if (numChoice === true){
    psw = psw.concat(number); 
    console.log(psw);
   }
    var upcChoice = window.confirm("Would you like to include uppercase letters in your password?");
   if (upcChoice === true ){
    psw = psw.concat(upperCase);
    console.log(psw);
  }
    var lcChoice = window.confirm("Would you like to include lowercase letters in your password?");
   if (lcChoice === true){
    psw = psw.concat(lowerCase); 
    console.log(psw);
   }
    var finpsw = psw;
    pwLength = parseInt(pwLength);
      var pswgenerated = "";
   while(pswgenerated.length < pwLength){
      pswgenerated +=finpsw[Math.floor(Math.random() * psw.length)];
    } 
  console.log(pswgenerated);
   alert("Here is your new password: " + pswgenerated);
});

