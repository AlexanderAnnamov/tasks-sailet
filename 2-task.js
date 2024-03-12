// #### 2. Задача: Напишите функцию, которая принимает строку и возвращает эту строку в обратном порядке.

function reverseString(str) {
  return str.split("").reverse().join("");
}

function reverseString2(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

function reverseString3(str) {
  if (str === "") return "";
  else return reverseString(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("Hello, world!")); // Output: '!dlrow ,olleH'

console.log(reverseString2("Burger king")); // Output: 'gnik regruB'

console.log(reverseString3("recursion")); // Output: 'noisrucer'
