// Bonfire: Falsy Bouncer
// Author: @billingsby
// Challenge: http://www.freecodecamp.com/challenges/bonfire-falsy-bouncer
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function bouncer(arr) {
  var newArray = new Array();
  
  for (i = 0; i < arr.length; i++) {
    if (arr[i]) {
    newArray.push(arr[i]);
    }
  }
  return newArray;
}

bouncer([7, "ate", "", false, 9]);
