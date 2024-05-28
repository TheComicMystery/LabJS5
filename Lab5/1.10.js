function findSmallestNumberAmongMixedElements(array) {
let smallestNumber = Infinity;
for (let element of array) {
if (typeof element === 'number') {
if (element < smallestNumber) {
smallestNumber = element;
}
}
}
return smallestNumber === Infinity ? '' : smallestNumber;
}
var output = findSmallestNumberAmongMixedElements([4, "octopus", 9]);
console.log(output);