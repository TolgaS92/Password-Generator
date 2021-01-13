// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword("password");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var userPref = {
    specials: false,
    numerics: true,
    lowers: true,
    uppers: true,
  };
  console.log(userPref);
  var characters = [];
  var amountOfChars = (d) => d.length;
  console.log(" ", amountOfChars(characters));

  var length = 8;

  length = parseInt(
    prompt("Enter password length ( from 8 to 128 please )")
  );

  length = validate_length(length);

  var addSpecialChars = confirm("Include special characters? Click OK: Yes, Cancel: No");

  if (addSpecialChars) {
    userPref.specials = true;
  }

  var addUppers = confirm("Include upper-case characters? Click OK: Yes, Cancel: No ");

  if (addUppers) {
    userPref.uppers = true;
  }
  console.log("Collected input: ", userPref);

  Object.keys(userPref).forEach((k) => {

    if (userPref[data]) {
      amountOfChars = amountOfChars.concat(data[k]);
    }
  });

  const $pw = document.querySelector("password");
  var randomPassword = [];
  for (var i = 0; i < length; i++) {

    var randomIndex = Math.floor(Math.random() * (amountOfChars.length - 1));

    var randomCharacter = amountOfChars[randomIndex];
    randomPassword.push(randomCharacter);
  }
  $pw.value = randomPassword.join('');
}



function validate_length(answer) {
  var givenAnswer = isNaN(answer) === false;
  var tooShort = answer > 7;
  var tooLong = answer < 128;

  if (givenAnswer && tooShort && tooLong) {
    console.log("Input length checks");
    alert(`Input: ${answer} works!`);
    length = answer;
  } else {
    console.log("Input length is not validate!");

    length = parseInt(prompt(`Answer ${answer} is not in between 8 and 128, re-enter!`)
    );
    validate_length(length);
  }

  return length;

}

