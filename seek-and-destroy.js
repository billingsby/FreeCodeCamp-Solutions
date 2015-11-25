// Bonfire: Seek and Destroy
// Author: @billingsby
// Challenge: http://www.freecodecamp.com/challenges/bonfire-seek-and-destroy
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function destroyer(arr) {
  var test = [];
  
  for (i=1; i < arguments.length; i++) {
    test.push(arguments[i]);
  }
 
  var newArray = arguments[0].filter(function(element, index){
    var keep = true;

    for(var i = 0; i < test.length; i++){
      if (element === test[i]){ 
        keep = false;
      }
  }
  return keep;
});
  return newArray;
}
                             
                                

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
