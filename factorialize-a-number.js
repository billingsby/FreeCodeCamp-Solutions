
// Bonfire: Factorialize a Number
// Author: @billingsby
// Challenge: http://www.freecodecamp.com/challenges/bonfire-factorialize-a-number
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function factorialize(num) {
  var count = 1;
  for (i = 1; i <= num ; i++) 
  {
    count *= i;
  }
   return count;
}



factorialize(5);
