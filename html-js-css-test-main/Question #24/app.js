var firstWord = "Mary";
var secondWord = "Army";

isAnagram(firstWord, secondWord); 

function isAnagram(first, second) {
  var a = first.toLowerCase();
  var b = second.toLowerCase();

  console.log(a.split("")) 
  console.log(a.split("").sort()) 
  console.log(a.split("").sort().join(""))
  
  a = a.split("").sort().join("");
  b = b.split("").sort().join("");

  return a === b;
}
