// #### 5. Задача: Напишите функцию, которая принимает строку и возвращает объект, содержащий количество вхождений каждого символа в строке.

function countCharacters(str) {
  const charCount = {};

  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  return charCount;
}

function countCharacters2(str) {
  return str
    .split("")
    .map((char) => ({ [char]: str.split(char).length - 1 }))
    .reduce((acc, obj) => {
      Object.keys(obj).forEach((key) => {
        acc[key] = obj[key];
      });
      return acc;
    }, {});
}

function countCharacters3(str) {
  return str.split("").reduce((acc, char) => {
    acc[char] = acc[char] ? acc[char] + 1 : 1;
    return acc;
  }, {});
}

console.log(countCharacters("hello")); // Output: { h: 1, e: 1, l: 2, o: 1 }

console.log(countCharacters2("world")); // Output: { w: 1, o: 1, r: 1, l: 1, d: 1 }

console.log(countCharacters3("friend")); // Output: { f: 1, r: 1, i: 1, e: 1, n: 1, d: 1 }
