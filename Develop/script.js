// Assignment code here
var passwordLength = passwordLength > 8 && passwordLength < 128;

var generatePassword = function () {
  var passwordLength = parseInt(
    window.prompt("Password Length: type from 8 to 128")
  );
  if (isNaN(passwordLength) === true) {
    window.alert("You must provide a NUMBER from 8 to 128");
    generatePassword();
  }
  if (passwordLength < 8) {
    window.alert("You must provide a NUMBER from 8 to 128");
    generatePassword();
  }
  if (passwordLength > 128) {
    window.alert("You must provide a NUMBER from 8 to 128");
    generatePassword();
  }
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
