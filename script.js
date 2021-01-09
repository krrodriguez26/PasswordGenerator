// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var length = document.querySelector(".length");
  var uppercase = document.querySelector(".uppercase");
  var lowercase = document.querySelector(".lowercase");
  var symbols = document.querySelector(".symbols");
  var generate = document.querySelector(".generate");
  
  passwordText.value = password;
}

var generatePassword = true;

if (generatePassword{
  alert('Would you like uppercase characters?');{
  } else if (lowercase){
    alert('Would you like lowercase characters?');
  }

  else ()


}

// Add event listener to generate button
generate.addEventListener("click", function(writePassword) {










// Generator Funtions

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() *26) +97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() *26) +65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() *10) +48);
}

function getRandomSymbol() {
  return String.fromCharCode(Math.floor(Math.random() *16) +32); 
}
