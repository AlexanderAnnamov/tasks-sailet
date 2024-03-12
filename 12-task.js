// #### 12. Задача: Напишите функцию, которая принимает массив объектов и сортирует их по заданному свойству в порядке возрастания.

function sortObjects(arr, property) {
  return arr.sort((a, b) => a[property] - b[property]);
}

function sortObjects2(arr, prop) {
  return [...arr].map((item) => item).sort((a, b) => a[prop] - b[prop]);
}

const sortObjects3 = (arr, prop) => arr.sort((a, b) => a[prop] - b[prop]);

const data = [
  { name: "John", age: 25, count: 1 },
  { name: "Alice", age: 30, count: 2 },
  { name: "Bob", age: 20, count: 3 },
];

console.log(sortObjects(data, "age")); // Output: [{ name: 'Bob', age: 20 }, { name: 'John', age: 25 }, { name: 'Alice', age: 30 }]

console.log(sortObjects2(data, "count")); // Output: [{ name: 'John', age: 25, count: 1 },{ name: 'Alice', age: 30, count: 2 },{ name: 'Bob', age: 20, count: 3 }]

console.log(sortObjects3(data, "name")); // Output: [{ name: 'Bob', age: 20, count: 3 },{ name: 'John', age: 25, count: 1 },{ name: 'Alice', age: 30, count: 2 }]
