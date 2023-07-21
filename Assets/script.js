
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

var generateBtn = document.querySelector("#generate");

//Variable definition
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
function generatePassword() {
  // Prompt for length
  var length = prompt("What length should this password be?");
  //Validate length
  if (!length) {
    alert("Looks like you forgot to tell me how long the password should be!");
  } else if (length < 8 || length > 128) {
    alert("Sorry must be between 8 and 128 characters, try again.");
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
  
  //Generate password
  var charOptions = []
  if (upperCase) {
    charOptions = charOptions.concat(alphaUpper);
  }
  if (lowerCase) {

    charOptions = charOptions.concat(alphaLower);
  }
  if (numbers) {
    charOptions = charOptions.concat(num);
  }
  if (characters) {
    charOptions = charOptions.concat(specialChar);
  }

  var password = ""
  for (let i = 0; i < length; i++) {
    var randomNumb = Math.floor(Math.random() * charOptions.length);
    var randomChar = charOptions[randomNumb]
    password = password + randomChar
  }
  
  return password
};

//Show password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
//Special functions like event listeners
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
