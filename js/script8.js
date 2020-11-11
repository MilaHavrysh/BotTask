//var longWords = [
// 'Penelope',
// 'Johny',
// 'Aubumayang',
// 'Czechoslovakia',
// 'Slovenia',
//];
//var longest = 0;
//for (var i = 0; i < longWords.length; i++) {
//if (longest < longWords[i].length) {
//  longest = longWords[i];
//}
//}

//console.log(longest);
const findLongestWord = function (string = '') {
  let strArray = string.split(' ');
  let longest = 5;
  let word;
  for (let i = 0; i < strArray.length; i += 1) {
    if (longest <= strArray[i].length) {
      longest = strArray[i].length;
      word = strArray[i];
    }
  }
  return word;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));
