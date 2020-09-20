// generate password process
function generatePassword() {
  // make sure user creates password 8 - 128
  var length = parseInt(window.prompt("Password Length: type from 8 to 128"));
  if (isNaN(length) === true) {
    window.alert("You must provide a NUMBER from 8 to 128, please try again!");
    return;
  }
  if (length < 8) {
    window.alert("You must provide a NUMBER from 8 to 128, please try again!");
    return;
  }
  if (length > 128) {
    window.alert("You must provide a NUMBER from 8 to 128, please try again!");
    return;
  }
  console.log("The password length is " + length);

  // ask for the characters types
  var specialCharacterInclude = confirm("Include special character(s)?");

  console.log(
    "Password will include special character(s) - " + specialCharacterInclude
  );

  var numberInclude = confirm("Include number(s)?");
  console.log("Password will include number(s) - " + numberInclude);

  var lowercaseInclude = confirm("Include lowercase(s)?");
  console.log("Password will include lowercase(s) - " + lowercaseInclude);

  var uppercaseInclude = confirm("Include uppercase(s)?");
  console.log("Password will include uppercase(s) - " + uppercaseInclude);

  if (
    specialCharacterInclude === false &&
    numberInclude === false &&
    lowercaseInclude === false &&
    uppercaseInclude === false
  ) {
    window.alert("You must select at least one option, please start over!");
    return;
  }

  // charset
  (charset =
    "!@#$%^&*()_+-=?abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"),
    (retVal = "");
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

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
