/*
Write a function that reverse a string
- Do not the reverse() function
Bonn Ratha
*/

//Global Variable
var inputString = "Hello My Name is Bonn Ratha";

/*
This function reverse the input String
First, it will find the length of the input string
Then, it will store the last character and it first index's new array and onward
Then it uses join reference method to convert it back to String
*/
function reverseString(inputS) {

  var arrayString = [];
  for (var i = 0; i < inputS.length; i++) {
    arrayString[i] = inputS.charAt(inputS.length - 1 - i);
  }
  return arrayString.join('');

}

/// A faster way that uses reverse() method.
function reverseString1(inputS) {
  return inputS.split("").reverse().join("");
}

function reverseString2(str) {
  return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
