function isPalindrome(word) {
  // Write your algorithm here
  let array = word.split("")
  let reversedArray = array.reverse()
  let reversedWord = reversedArray.join("")
  if (word == reversedWord){
    return true;
  } else {
    return false;
  }
}
isPalindrome('abba')
isPalindrome('racecar')


/* 
  Add your pseudocode here
 create a variable string to hold the words
 reverse the created word string
  call an if statement to compare the initial word and the reversed on
  if the words match's return true if not return false.
*/ 
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
