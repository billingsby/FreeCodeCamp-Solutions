// Bonfire: Mutations
// Author: @billingsby
// Challenge: http://www.freecodecamp.com/challenges/bonfire-mutations
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function mutation(arr) {

  var str = arr[0].toLowerCase();
  var second = arr[1].toLowerCase();
  for(var i = 0; i < second.length; i++) {
    if ( str.indexOf(second[i]) === -1) { 
      return false; 
    }
  }
  return true;
}

mutation(["hello", "Hello"]);
