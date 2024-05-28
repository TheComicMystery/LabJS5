function modulo(a, b) {
return a - Math.floor(a / b) * b;
}
var output = modulo(25, 4);
console.log(output);