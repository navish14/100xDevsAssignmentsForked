/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  console.log(str1);
  console.log(str2);
  let s1 = str1.toLowerCase();
  let s2 = str2.toLowerCase();
     s1 = s1.split("").sort().join('');
     s2 = s2.split("").sort().join('');

    

    console.log(s1);
    console.log(s2);

    return s1 === s2;

}
//isAnagram(str1, str2);

module.exports = isAnagram;
