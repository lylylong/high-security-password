// Assignment code here
// setup all password types & arrays as global variables
var specialCharacter = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "?",
  "-",
  "+",
  "_",
  "<",
  ">",
  "(",
  ")",
  "{",
  "}",
  "[",
  "]",
];
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

// for user to select the password types
var passwordTypes = function () {
  //for user to choose the length
  var length = parseInt(prompt("Type your password length: choose 8 - 128"));
  console.log("The password length is " + length);
  if (isNaN(length) === true) {
    alert("You must provide a NUMBER from 8 to 128, please start over!");
    return;
  }
  if (length < 8) {
    alert("You must provide a NUMBER at least 8, please start over!");
    return;
  }
  if (length > 128) {
    alert("You must provide a NUMBER no more than 128, please start over!");
    return;
  }

  // for the password types
  var specialCharacterInclude = confirm("Include special character(s)?");
  console.log(
    "Password will include special character(s): " + specialCharacterInclude
  );

  var numberInclude = confirm("Include number(s)?");
  console.log("Password will include number(s): " + numberInclude);

  var lowercaseInclude = confirm("Include lowercase(s)?");
  console.log("Password will include lowercase(s): " + lowercaseInclude);

  var uppercaseInclude = confirm("Include uppercase(s)?");
  console.log("Password will include uppercase(s): " + uppercaseInclude);

  if (
    specialCharacterInclude === false &&
    numberInclude === false &&
    lowercaseInclude === false &&
    uppercaseInclude === false
  ) {
    alert("You must pick at least one type of characters, please start over!");
    return;
  }

  // all user input
  var passwordTypes = {
    length: length,
    specialCharacterInclude: specialCharacterInclude,
    numberInclude: numberInclude,
    lowercaseInclude: lowercaseInclude,
    uppercaseInclude: uppercaseInclude,
  };
  return passwordTypes;
};

// randomly generate index
var getRandom = function (arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);

  var randomElement = arr[randomIndex];

  return randomElement;
};

// generate the password based on user input
var generatePassword = function () {
  var types = passwordTypes();
  var result = [];
  var possibleCharacterAll = [];
  var guaranteedCharacterAll = [];

  if (types.specialCharacterInclude) {
    possibleCharacterAll = possibleCharacterAll.concat(specialCharacter);
    guaranteedCharacterAll.push(getRandom(specialCharacter));
  }
  if (types.numberInclude) {
    possibleCharacterAll = possibleCharacterAll.concat(number);
    guaranteedCharacterAll.push(getRandom(number));
  }
  if (types.lowercaseInclude) {
    possibleCharacterAll = possibleCharacterAll.concat(lowercase);
    guaranteedCharacterAll.push(getRandom(lowercase));
  }
  if (types.uppercaseInclude) {
    possibleCharacterAll = possibleCharacterAll.concat(uppercase);
    guaranteedCharacterAll.push(getRandom(uppercase));
  }
  for (var i = 0; i < types.length; i++) {
    var possibleCharacter = getRandom(possibleCharacterAll);

    result.push(possibleCharacter);
  }
  for (var i = 0; i < guaranteedCharacterAll.length; i++) {
    result[i] = guaranteedCharacterAll[i];
  }
  return result.join("");
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
