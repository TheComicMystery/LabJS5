function getProductOfAllEIementsAtProperty(obj, key) {
if (!obj[key]) return 0;
if (!Array.isArray(obj[key])) return 0;
return obj[key].reduce((a, b) => a * b, 1);
}
var obj = { key: [1, 2, 3, 4] };
var output = getProductOfAllEIementsAtProperty(obj, 'key');
console.log(output);