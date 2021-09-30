// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase= ["abcdefghi"]
var uppercase= ["ABCDEFGHIJK"]
var numbers= ["12345678"]
var special=["#@&!$"]
var characters=[0]
var wantLower= true
var wantUpper= true
var wantSpecial= true 
var wantNumbers= true
var password = ""
var values = [""]       

// Write password to the #password input
var generatePassword= function(){
var pwLength= (prompt("How long would you like your password to be? Please choose a number beetween 8 and 128"))
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
  var generateLower=confirm("Do you want lowercase letters in your password?")
  if(!generateLower) {
    wantLower=false
  }   else(++characters)
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
      
    //for loop to create password
    for (var i =0; i <= pwLength; i++){
      var random= Math.floor(Math.random()*values.length);
      password += values.substring(random, random +1); 
  }  
  document.getElementById("password").value = password
}
generateBtn.addEventListener("click",generatePassword)

