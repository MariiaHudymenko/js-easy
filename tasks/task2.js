// Задача: Написати функцію, яка приймає рядок і повертає його у зворотному порядку,
//  при цьому пропускаючи всі цифри.

function reverseWithoutNumbers(str) {
  let res = "";
  let a = [];

  for (let i = 0; i < str.length; i++) {
    if (isNaN(str[i]) || str[i] === " ") {
      a.push(str[i]);
    }
  }

  for (let i = str.length - 1; i >= 0; i--) {
    if (isNaN(str[i])) {
      res += str[i];
    }
  }

  return res;
}

console.log(reverseWithoutNumbers("hello123world456")); // Виведе: "dlrowolleh"
console.log(reverseWithoutNumbers("abc123xyz")); // Виведе: "zyxabc"

module.exports = reverseWithoutNumbers;
