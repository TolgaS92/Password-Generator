//Assignment Code
const generateBtn = document.querySelector("#generate");

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const symbols = ["@", "%", "#", "/", "!", "$"];
const upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


let userPref = [];

// Write password to the #password input
function writePassword() {
    let password = generatePassword("password");
    let passwordText = document.querySelector("#password");

    passwordText.value = password;

}
//function that generates the password with given right values
function generatePassword() {
    let password = " ";
    // Setting up, length of the password for the user
    //WHEN prompted for the length of the password
    //THEN I choose a length of at least 8 characters and no more than 128 characters
    let lenght = prompt("How many characters would you like to include to your password, between minimum 8 - maximum 128 Characters?");
    if (lenght >= 8 && lenght <= 128) {


        //adding Number
        let addNumbers = confirm("Include numbers ? OK: yes, Cancel: no!");
        if (addNumbers) {
            userPref = userPref.concat(numbers)
        }
        //adding Symbol
        let addSymbols = confirm("Include symbols ? OK: yes, Cancel: no!");
        if (addSymbols) {
            userPref = userPref.concat(symbols)
        }
        //adding uppercase letters
        let addUpperletters = confirm("Include upper-case letters ? OK: yes, Cancel: no!");
        if (addUpperletters) {
            userPref = userPref.concat(upperLetters)
        }
        //adding lowercase letters
        let addlowerletters = confirm("Include lower-case letters ? OK: yes, Cancel: no!");
        if (addlowerletters) {
            userPref = userPref.concat(lowerLetters)
        }
        //Making a random password with given values..
        for (var i = 0; i < lenght; i++) {
            password = password + userPref[Math.floor(Math.random() * userPref.length)]
        }

        //THEN a password is generated that matches the selected criteria
        //WHEN the password is generated
        return password;

    } else {
        alert("Given value is wrong, Enter a valid number between 8 to 128!")
    }
}
generateBtn.addEventListener("click", writePassword);
