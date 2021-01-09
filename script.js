
//User input variable
var enter;
var confirmNumber;
var confirmSymbol;
var confirmUppercase;
var confirmLowercase;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var upperCase = document.querySelector("#upperCase");
  var lowerCase = document.querySelector("#upperCase");
  var symbol = document.querySelector("#symbol");
  var number= document.querySelector("#number");
  passwordText.value = password;
}


//Possible password characters
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers  = ["1","2","3","4","5","6","7","8","9","0"];
var symbols = ["!","@","#","$","%","^","&","*","()","_","+","[]","{}","<>","/","."];

//Loop to choose password chracters
for(var i=0; i<= complexity; i++){
  password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
}

// Add password to textbox
document.querySelector("yourSecurePassword").value = password;


// Add event listener to generate button
generate.addEventListener("click", )
