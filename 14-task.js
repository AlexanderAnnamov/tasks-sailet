// #### 14. Задача: Напишите функцию, которая принимает строку и возвращает новую строку, в которой все гласные заменены символом "\*".

function replaceVowels(str) {
  return str.replace(/[aeiou]/gi, "*");
}

function replaceVowels2(str) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  return str
    .split("")
    .map((char) => (vowels.includes(char) ? "*" : char))
    .join("");
}

function replaceVowels3(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let result = "";

  for (let char of str) {
    result += vowels.includes(char) ? "*" : char;
  }

  return result;
}

console.log(replaceVowels("Hello, world!")); // Output: 'H*ll*, w*rld!'

console.log(replaceVowels2("Banana, give me!")); // Output: 'H*ll*, w*rld!'

console.log(replaceVowels3("I'am ok!")); // Output: 'H*ll*, w*rld!'
