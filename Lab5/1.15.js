function checkMirrorReverseNew(str1, str2) {
return str1 === str2.split('').reverse().join('');
}
var output = checkMirrorReverseNew("hello world", "orldhello w");
console.log(output); 