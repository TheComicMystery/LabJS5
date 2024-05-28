function sumDigits(number) {
return Math.abs(number).toString().split('').reduce((a, b) => a + parseInt(b), 0) * Math.sign(number);
}
var output = sumDigits(1148);
console.log(output);