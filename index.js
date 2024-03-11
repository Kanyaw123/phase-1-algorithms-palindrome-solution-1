function isPalindrome(word) {
  const cleanedWord = word.replace(/\s/g, '').toLowerCase();
  
  let start = 0;
  let end = cleanedWord.length - 1;
  
  while (start < end) {
    if (cleanedWord[start] !== cleanedWord[end]) {
      return false;
    }
    start++;
    end--;
  }
  
  return true;
}

if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba")); // true
  console.log("=>", isPalindrome("racecar")); // true
  console.log("=>", isPalindrome("a")); // true
  console.log("=>", isPalindrome("robot")); // false
  console.log("=>", isPalindrome("ab")); // false
}

module.exports = isPalindrome;
