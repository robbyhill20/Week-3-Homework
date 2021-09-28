// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase= ["a","b","c","d","e","f"]
var uppercase= ["A", "B","C","D","E","F"]
var numbers= [1,2,3,4,5,6,7,8]
var special=["#","@","%","&","$"]




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var pwLength= (prompt("How long would you like your password to be? Please choose a number beetn 8 and 128"))
  console.log(pwLength)
  if(pwLength < 8){
    return alert("Please choose a higher number")
  }
    else if(pwLength > 128) {
      return alert("Please choose a lower number")
    }
  }


generatePassword()

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
