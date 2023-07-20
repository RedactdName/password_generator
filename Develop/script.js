// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


/**
 * Add event listener to generate password button --- starts the program
 * Series of prompts for password criteria
 *  - Get length 8-128 char
 *    -validate length
 *  - Include lowercase
 *  - Include uppercase
 *  - Include numeric
 *  - Include special char
 *    - Validate char use
 *  - Generate password that meets criteria
 *  - Show the password
*/
//Variable definition

var generateBtn = document.querySelector("#generate");
// var passwordCriteria = {
//   length: 8 - 128,
//   lowercase: true,
//   uppercase: true,
//   numeric: true,
//   specialChar: true,

//Variable Values
var alphabet = "abcdefghijklmnopqrstuvwxyz" 
var numbers = "1234567890"
var specials = "~`!@#$%^&*()-=+_{}|[]\<>?"
//Convert lowercase to uppercase array
var alphaUpper = alphabet.toUpperCase().split('');
//Spliting string to arrays
var alphaLower = [...alphabet]
var num = [...numbers]
var specialChar = [...specials]

//Functions
function generatePassword(){
  // console.log ("You clicked the button");
  // Prompt for length
  var length = prompt("What length should this password be?");
  //Validate length
  if (!length) {
   alert ("Looks like you forgot to tell me how long the password should be!") ;
  } else if (length < 8 || length > 128) {
   alert ("Sorry must be between 8 and 128 characters, try again.") ;
  } else {
    //Prompt for characters once length is validated
    var upperCase = confirm("Click OK if you need uppercase letters?");
    var lowerCase = confirm("OK for lowercase letters too?");
    var numbers = confirm("What about numbers?");
    var characters = confirm("Finally, click OK if you require use of special characters");
  };
  
  // Validate characters
  if (!upperCase && !lowerCase && !numbers && !characters) {
   alert("What will your password be made of?")
  }

var charOptions = []
  if (upperCase) {
    charOptions = charOptions.concat (alphaUpper);
  }
  if (lowerCase) {
    charOptions = charOptions.concat (alphaLower);
  }
  if (numbers) {
    charOptions = charOptions.concat (num);
  }
  if (characters) {
    charOptions = charOptions.concat (specialChar);
  }

  var password = ""
   for (let i = 0; i < length; i++) {
     var randomNumb = Math.floor(Math.random() * charOptions.length);
     var randomChar = charOptions[randomNumb]
    password = password + randomChar
   }
  
  return password 
} ;

//Generate password
  function writePassword () {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
    
  } 
  
  //Show password
//Special functions like event listeners
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
