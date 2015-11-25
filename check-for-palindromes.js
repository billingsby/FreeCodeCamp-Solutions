// Bonfire: Check for Palindromes
// Author: @billingsby
// Challenge: http://www.freecodecamp.com/challenges/bonfire-check-for-palindromes
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function palindrome(str) {
  
  str = str.toLowerCase();
  str = str.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, '');
  str = str.replace(/\s+/g, '');

 

 var reverseString = str.split('').reverse().join('');


 
  if (str == reverseString) {
    
  return true;
  } else {
    return false;
}

}



palindrome("0_0 (: /~\ :) 0-0");
