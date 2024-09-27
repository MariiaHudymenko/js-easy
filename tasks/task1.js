// Задача: Написати функцію, яка приймає рядок і замінює всі голосні (a, e, i, o, u)
// на певний символ, наприклад *.

function replaceVowels(str) {
  let a = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (a.includes(str[i])) {
      res += "*";
    } else {
      res += str[i];
    }
  }
  return res;
}

console.log(replaceVowels("hello world")); // Виведе: "h*ll* w*rld"
console.log(replaceVowels("Javascript")); // Виведе: "J*v*scr*pt"

module.exports = replaceVowels;
