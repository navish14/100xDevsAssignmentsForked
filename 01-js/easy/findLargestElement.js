/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let bigNum = numbers[0];
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] > bigNum){
            bigNum = numbers[i];
        }
    }
    return bigNum;
}
console.log("navin");
//findLargestElement(num);
module.exports = findLargestElement;