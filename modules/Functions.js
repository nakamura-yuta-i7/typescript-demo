//Named function
function add(x, y) {
    return x + y;
}
//Anonymous function
var myAdd = function (x, y) { return x + y; };
console.dir(add(1, 2));
console.dir(myAdd(1, 2));
var z = 100;
function addToZ(x, y) {
    return x + y + z;
}
console.dir(addToZ(1, 2));
//# sourceMappingURL=Functions.js.map