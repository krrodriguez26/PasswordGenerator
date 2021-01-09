// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var upperCase = document.querySelector("#upperCase");
  var lowerCase = document.querySelector("#upperCase");
  var upperCase = document.querySelector("#upperCase");
  var upperCase = document.querySelector("#upperCase");
  passwordText.value = password;
}


//Possible password characters
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers  = "1234567890";
var symbols = "!@#$%^&*()_+[]{}<>/.";

//Loop to choose password chracters
for(var i=0; i<= complexity; i++){
  password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
}

// Add password to textbox
document.querySelector("yourSecurePassword").value = password;


// Add event listener to generate button
generate.addEventListener("click", )
