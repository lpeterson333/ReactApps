// The Caesar cipher is one of the earliest known and simplest ciphers. It is a type of substitution cipher in which each letter in the plaintext is 'shifted' a certain number of places down the alphabet. For example, with a shift of 1, A would be replaced by B, B would become C, and so on. The method is named after Julius Caesar, who apparently used it to communicate with his generals.

//use this with the file caesarEncrypt.html

//a default shift of 13 is provided which corresponds to the ROT13 cipher
//when encrypting the case is preserved, and non-letters are unchanged.
//TODO:  screen should refresh with new input
//TODO:  safety checks on encryptMeStr input

//take each individual letter
//get the character code for that letter
//uppercase character codes are 65 to 90
//lowercase character codes are 97 to 122
//if not a letter upper or lower case move to next letter
//if a letter upper or lower case replace with character code + shift
//except that once character code + shift reaches 26 it has to go back to 0
//(charCode + shift) % 90  or (charCode + shift) % 122
//there was a way to do this using bit shift i think 
//if shiftNum = 3 then 65 becomes 68
// "use strict";
//const {encrypt}= require("./encrypt") //require returns an object, use object destructuring to assign function encrypt to a variable of the same name
import encrypt from "./encrypt"

function caesarCipherEncryptor(encryptMeStr,shift){
  let message = ""
  const shiftNum = shift*1 //converts string to number because of data type conversion in Javascript
  //safety checks on shift
  //check if shift is an integer 
  if (!/^[0-9]*$/.test(shift)){
    message = "Error:  Enter a number for the shift value";
    return message;
  }
  if (shiftNum < 0 || shiftNum > 26){
      message = "Error:  The number must be between 0 and 26";
      return message;
  }
   return encrypt(encryptMeStr,shiftNum)
}

export default caesarCipherEncryptor