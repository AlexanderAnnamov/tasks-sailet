// #### 10. Задача: Напишите функцию, которая принимает строку и возвращает ее в верблюжьем регистре (camel case), где каждое слово, кроме первого, начинается с заглавной буквы и все пробелы удалены.

const toCamelCase = (str) =>
  str
    .split(" ")
    .map((word, index) =>
      index === 0
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join("");

function toCamelCase2(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
}

function toCamelCase3(str) {
  let camelCaseStr = "";
  let words = str.toLowerCase().split(" ");

  for (let i = 0; i < words.length; i++) {
    if (i === 0) {
      camelCaseStr += words[i];
    } else {
      camelCaseStr += words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  }

  return camelCaseStr;
}

console.log(toCamelCase("каждое слово с большой буквы"));

console.log(toCamelCase2("каждое слово с большой буквы"));

console.log(toCamelCase3("каждое слово с большой буквы"));
