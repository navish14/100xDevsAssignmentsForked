/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  console.log(str);
  let reversedStr = str.split("").reverse().join("");
  console.log(reversedStr);
    if (str === reversedStr){
      return (true);
    }else
    return (false);
  }
 //let result = isPalindrome("A man a plan a canal Panama") 

 module.exports = isPalindrome;

//console.log(result);