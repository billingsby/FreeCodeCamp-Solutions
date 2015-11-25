
// Bonfire: Reverse a String
// Author: @billingsby
// Challenge: http://www.freecodecamp.com/challenges/bonfire-reverse-a-string?solution=function%20reverseString(str)%20%7B%0A%20%20str%20%3D%20str.split(%27%27)%20.reverse()%20.join(%27%27)%3B%0A%20%20%0A%20%20return%20str%3B%0A%20%0A%7D%0A%0A%0AreverseString(%22hello%22)%3B%0A
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function reverseString(str) {
  str = str.split('') .reverse() .join('');
  
  return str;
 
}


reverseString("hello");
