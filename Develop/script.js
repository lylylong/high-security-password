// Assignment code here
var passwordLength = passwordLength > 8 && passwordLength < 128;
var pecialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

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
  console.log("The password length is " + passwordLength);

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
