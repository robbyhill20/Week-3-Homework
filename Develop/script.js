// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase= ["a","b","c","d","e","f"]
var uppercase= ["A", "B","C","D","E","F"]
var numbers= [1,2,3,4,5,6,7,8]
var special=["#","@","%","&","$"]
var characters=[0]
var wantLower= true
var wantUpper= true
var wantSpecial= true 
var wantNumbers= true
var password = ""
var values = [""]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var generatePassword= function(){
  characters= 0
  var pwLength= (prompt("How long would you like your password to be? Please choose a number beetn 8 and 128"))
  console.log(pwLength)
  if(pwLength < 8){
    return alert("Please choose a higher number")
  }
    else if(pwLength > 128) {
      return alert("Please choose a lower number")
    }
  
  var generateUpper=confirm("Do you want uppercase letters in your password?")
  if(!generateUpper) {
    wantUpper=false
   } else(++characters)
  console.log(generateUpper)
  var generateLower=confirm("Do you want lowercase letters in your password?")
  if(!generateLower) {
    wantLower=false
  }   else(++characters)
  console.log(generateLower)
  console.log(characters)
  if(characters < 1){
    return alert ("You must choose an upper or lowercase letter for your password")
  }
  var generateNumbers=confirm("Do you want numbers in your password?")
  if(!generateNumbers) {
    wantNumbers=false
    }
    else(++characters)
    
   
    var generateSpecial=confirm("Do you want special characters in your password?")
    if(!generateSpecial) {
      wantSpecial=false
      }
      else(++characters)

      if(characters < 2){
        return alert("Your password must contain more than one element ")
      }
      
      console.log(wantUpper)
      console.log(wantLower)
      console.log(wantNumbers)
      console.log(wantSpecial)
      console.log(characters)
    //adding all the chosen items to the values array
    if(characters==4){
      values= uppercase + lowercase + numbers + special 
    }
      else if(wantUpper==true && wantLower==true && wantNumbers ==true){
        values =uppercase +lowercase +numbers
      } 
      else if(wantUpper==true && wantLower==true && wantSpecial ==true){
        values =uppercase +lowercase + special
      } 
      else if(wantUpper==true && wantLower==true){
        values =uppercase +lowercase
      }
      else if(wantUpper==true && wantNumbers==true){
        values =uppercase + numbers
      }
      else if(wantUpper==true && wantLower==true){
        values =uppercase +lowercase
      }
      else if(wantUpper==true && wantSpecial==true){
        values =uppercase + special
      }

      else if(wantLower==true && wantNumbers==true && wantSpecial ==true){
        values =special +lowercase +numbers
      } 
      else if(wantLower==true && wantSpecial ==true){
        values = lowercase + special
      } 
      else if(wantLower==true && numbers==true){
        values =numbers +lowercase
      }

  
      var removeCommas= values.replace(/,/g,'')
    
    
     //for loop to create password
    for (var i =0; i <= pwLength; i++){
      var random= Math.floor(Math.random()*removeCommas.length);
      password += removeCommas.substring(random, random +1);
     
  }  
  console.log(password) 
  document.getElementById("password").value = password
}
generateBtn.addEventListener("click",generatePassword)

//stener to generate button
//generateBtn.addEventListener("click", writePassword)
