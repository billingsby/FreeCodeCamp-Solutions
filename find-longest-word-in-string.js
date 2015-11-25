
// Bonfire: Find the Longest Word in a String
// Author: @billingsby
// Challenge: http://www.freecodecamp.com/challenges/bonfire-find-the-longest-word-in-a-string
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function findLongestWord(str) {
  
    var string = str.split(" ");
    var longest = 0;
 
    for (var i = 0; i < string.length; i++)
        if (longest < string[i].length) {
            longest = string[i].length;
        }
  return longest;
    }



  


findLongestWord("What if we try a super-long word such as otorhinolaryngology");
