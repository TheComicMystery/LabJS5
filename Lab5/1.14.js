function findPairOfNumbers(numbers, targetSum) {
for (let i = 0; i < numbers.length; i++) {
for (let j = i + 1; j < numbers.length; j++) {
if (numbers[i] + numbers[j] === targetSum) {
return [numbers[i], numbers[j]];
}
}
}
return [];
}
var output = findPairOfNumbers([3, 34, 4, 12, 5, 2], 9);
console.log(pair);