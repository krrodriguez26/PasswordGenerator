// Assignment Code
var generateBtn = document.querySelector("#generate");

//User input variable
var passwordLength;
var confirmNumber;
var confirmSymbol;
var confirmUppercase;
var confirmLowercase;
var userInput;

//Possible password characters
var numbers  = ["1","2","3","4","5","6","7","8","9","0"];
var symbols = ["!","@","#","$","%","^","&","*","()","_","+","[]","{}","<>","/","."];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

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
 
   if(!PasswordLength){
     alert("You must enter a value");
   
    } else if (passwordLength < 8 || passwordLength >128){
      passwordLength = prompt("You may choose between 8 - 128.")
      
    }   
     else {
     confrimNumber = confirm("Will your password contain numbers?");
     confrimSymbol= confirm("Will your password contain symbols?");
     confrimUpperCase= confirm("Will your password contain Uppercase letters?");
     confirmLowercase= confirm("Will your password contain Lowercase letters?");
   };

   //  4 negative options
     if (!confirmNumber && !confrimSymbol && !confrimUpperCase && !confirmLowercase){
       userInput = alert("You must choose from the criteria!")
   }

   // If all criteria is true
    else if (confirmNumber && confrimSymbol && confrimUpperCase && confirmLowercase){
       userInput = numbers.concat(symbols,upperCase,lowerCase);
    }

    // If 3 choices are true
     else if(confirmNumber && confrimSymbol && confrimUpperCase && confirmLowercase){
      userInput = numbers.concat(symbols,upperCase);
     }
     else if(confirmNumber && confrimSymbol && confrimUpperCase && confirmLowercase){
      userInput = numbers.concat(symbols,lowerCase);
     }
     else if(confirmNumber && confrimSymbol && confrimUpperCase && confirmLowercase){
      userInput = numbers.concat(upperCase,lowerCase);
     }
     else if(confirmNumber && confrimSymbol && confrimUpperCase && confirmLowercase){
      userInput = symbols.concat(numbers,upperCase);
     }

     //If 2 choices are true
     else if(confirmNumber && confrimUpperCase){
      userInput = numbers.concat(upperCase);
     }
     else if(confirmNumber && confirmLowerCase){
      userInput = numbers.concat(lowerCase);
     }
     else if(confirmNumber && confrimSymbol){
      userInput = numbers.concat(symbols);
     }
     else if(confirmLowercase && confrimUpperCase){
      userInput = lowerCase.concat(upperCase);
     }
     else if(confirmLowercase && confrimNumber){
      userInput = lowerCase.concat(numbers);
     }
     else if(confirmSymbol&& confrimNumber){
      userInput = symbols.concat(numbers);
     }

     // If 1 choice is true
     else if (confirmNumber) {
      userChoices = numbers;
    }
    else if (confirmSymbol) {
      userChoices = symbols;
    }
    else if (confirmUppercase) {
      userChoices = upperCase;
    }
    else if (confirmLowercase) {
      userChoices = lowerCase;
    }

  // Random selection for loop
  for (var i = 0; i < passwordLength; i++) {
    var allChoices = userInput[Math.floor(Math.random() * userInput.length)];
  }

  // Variable for empty password length
  var passwordBlank = [];

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
 }


        