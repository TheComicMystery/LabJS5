function findPalindromes(sentence) {
const words = sentence.split(' ');
const palindromes = [];
for (const word of words) {
const reversed = word.split('').reverse().join('');
if (word === reversed) {
palindromes.push(word);
}
}
return palindromes;
}
var output = findPalindromes("A man a plan a canal Panama");
console.log(output);