function findShortestWordAmongMixedElements(array) {
let shortestWord = '';
for (let element of array) {
if (typeof element === 'string') {
if (shortestWord === '' || element.length < shortestWord.length) {
shortestWord = element;
}
}
}
return shortestWord;
}
var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output);