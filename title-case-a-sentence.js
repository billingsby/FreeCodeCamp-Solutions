// Bonfire: Title Case a Sentence
// Author: @billingsby
// Challenge: http://www.freecodecamp.com/challenges/bonfire-title-case-a-sentence
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function titleCase(str) {
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});

}
                                                                                       
titleCase("I'm a little tea pot");
