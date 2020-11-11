function formatString(string, maxLength = 40) {
  string.split('');
  let stringNew = string;
  for (let i = 0; i <= maxLength - 1; i += 1) {
    if (string.length > maxLength) {
      stringNew = `${string.slice(0, maxLength)}...`;
    }
  }
  return stringNew;
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(
  formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30),
);
// 'Vestibulum facilisis, purus ne...'

//Напиши функцию formatString(string, maxLength = 40) которая принимает строку и форматирует ее если необходимо.

//Если длина строки не превышает maxLength, функция возвращает ее в исходном виде.
//Если длина больше maxLength, то функция обрезает строку до размера maxLength символов и добавляет в конец строки троеточие ..., после чего возвращает укороченную версию.
