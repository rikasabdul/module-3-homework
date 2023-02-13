// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input

function writePassword() {
  function generatePassword() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;
  
}
writePassword()



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




