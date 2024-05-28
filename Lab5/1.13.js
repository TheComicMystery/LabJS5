function findSingleNumber(numbers) {
const oddCount = numbers.filter(num => num % 2 !== 0).length;
const evenCount = numbers.length - oddCount;
return oddCount === 1 ? numbers.find(num => num % 2 !== 0) : numbers.find(num => num % 2 === 0);
}
var output = findSingleNumber([2, 8, 10, 3]);
console.log(output);