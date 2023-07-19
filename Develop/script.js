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
var passwordCriteria = {
  length: 8,
  lowercase: true,
  uppercase: false,
  numeric: true,
  specialChar: true,
};

var alphabet = "abcdefghijklmnopqrstuvwxyz" 
var alphaLower = [...alphabet]
console.log(alphaLower);

//Functions

// Prompt for length
var length = prompt("How long does your password need to be?");
//Validate length
//Prompt for characters
//Validate characters
//Generate password
//Show password

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Special functions like event listeners
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


























 */