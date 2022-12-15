function isPalindrome(word) {
  // Write your algorithm here
   if(word.length < 2) return true
  let start = 0
  let end = word.length - 1

  while(start <= end){
    if(word[start] != word[end]){
      return false
    }
    start++
    end--
  }
    return true
  
}

/* 
  Add your pseudocode here
  iterate through the string and check if last letter is not equal to the first 
  if letters are not the same/equal: return false
  otherwise if they are equal: return true
  make start to increase(++) & make end to decrease(--)
*/

/*
  Add written explanation of your solution here
  For a word to be considered palindrome it needs to be  pronunced the same in reverse as the original.
  Define a function that requires an  input of a word.
  Have a condition to check if the word length is <2(since empty strings and 1 letter words are essentially palindromes) 
  Hence return true if the word length is <2.
  If the condition is not met and word length is >2 we iterate through the string  
  It returns false if the last letter doesn't match the first letter.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
//true
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  //false
}

module.exports = isPalindrome;
