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
generateBtn.addEventListener("click", function (writePassword));

//Start function to generate password
 function generatePassword() {
   enter = parseInt(prompt("How many characters would you like in your password? You may choose between 8 - 128. "));
   if ( enter < 8 || enter > 128) {
     enter = parseInt(prompt(""));

   } else {
     confrimNumber = confirm("Wiil you password contain numbers?");
     confrimSymbol= confirm("Wiil you password contain symbols?");
     confrimUpperCase= confirm("Wiil you password contain Uppercase letters?");
     confirmLowercase= confirm("Wiil you password contain Lowercase letters?");
   };
 
  }






//Loop to choose password chracters
for (var i=0; i<= complexity; i++){
  password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
}

// Add password to textbox
document.querySelector("yourSecurePassword").value = password;




