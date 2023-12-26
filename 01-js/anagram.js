// /**
//  * Checks if two strings are anagrams of each other.
//  * An anagram is a word, phrase, or name formed by rearranging the letters of another word.
//  * @param {string} str1 - The first word.
//  * @param {string} str2 - The second word.
//  * @returns {boolean} - True if the words are anagrams, false otherwise.
//  */
// function isAnagram(str1, str2) {
//   // Convert the strings to lowercase and split them into arrays of characters
//   const arr1 = str1.toLowerCase().split("");
//   const arr2 = str2.toLowerCase().split("");

//   // Sort the arrays of characters in ascending order
//   arr1.sort();
//   arr2.sort();

//   // Check if the sorted arrays of characters are equal
//   return arr1.join("") === arr2.join("");
// }


// console.log(isAnagram("hello","ohell"));


function isAnagram(str1,str2){
  if(str1.length===str2.length){
        const arr1=str1.toLowerCase().split("").sort().join("");
        const arr2=str2.toLowerCase().split("").sort().join("");
        return arr1===arr2;
}
return false;}
module.exports = isAnagram;
