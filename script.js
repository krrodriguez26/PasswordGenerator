// Assignment Code
var generateBtn = document.querySelector("#generate");

//User input variable
var passwordLength;
var confirmNumber;
var confirmSymbol;
var confirmUppercase;
var confirmLowercase;

//Possible password characters
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers  = ["1","2","3","4","5","6","7","8","9","0"];
var symbols = ["!","@","#","$","%","^","&","*","()","_","+","[]","{}","<>","/","."];

// Password input
function writePassword() {
  var password = generatePassword();
 var passwordText = document.querySelector("#password");
  
 passwordText.value = password;
}

// Event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Start function to generate password
 function generatePassword() {
   passwordLength = prompt("How many characters would you like in your password?");
  
   if(!Passwordlength){
     alert("You must enter a value");
   
    } else if (passwordLength < 8 || passwordLength >128){
      passwordLength = prompt("You may choose between 8 - 128.")
      console.log("Password length " + passwordLength);
    }   
     else {
     confrimNumber = confirm("Will your password contain numbers?");
     confrimSymbol= confirm("Will your password contain symbols?");
     confrimUpperCase= confirm("Will your password contain Uppercase letters?");
     confirmLowercase= confirm("Will your password contain Lowercase letters?");
   };
 










   
   // Copy Button
   var copy = document.querySelector("#copy");
   copy.addEventListener("click", function () {
       copyPassword();
   });
  
   function copyPassword() {
       document.getElementById("password").select();
       document.execCommand("Copy");
       alert("Password copied to clipboard!");
   }
