// Bonfire: Where do I belong
// Author: @billingsby
// Challenge: http://www.freecodecamp.com/challenges/bonfire-where-do-i-belong?solution=function%20where(arr%2C%20num)%20%7B%0A%20%20%0A%0A%20%20arr.push(num)%3B%0A%20%20var%20sorted%20%3D%20arr.sort(function(a%2C%20b)%7Breturn%20a-b%3B%7D)%3B%0A%20%20var%20index%20%3D%20sorted.indexOf(arguments%5B1%5D)%3B%0A%20%20return%20index%3B%0A%20%20%0A%0A%7D%0A%0Awhere(%5B2%2C%2020%2C%2010%5D%2C%2019)%3B%0A
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function where(arr, num) {
  

  arr.push(num);
  var sorted = arr.sort(function(a, b){return a-b;});
  var index = sorted.indexOf(arguments[1]);
  return index;
  

}

where([2, 20, 10], 19);
