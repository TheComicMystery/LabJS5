function reverseInParentesisNew(str, n) {
let result = '';
while (str.length > 0) {
let chunk = str.slice(0, n);
result += chunk.split('').reverse().join('');
str = str.slice(n);
}
return result;
}
var output = reverseInParentesisNew('abcdefg', 3);
console.log(output);