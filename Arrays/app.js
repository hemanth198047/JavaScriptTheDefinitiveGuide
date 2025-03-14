var o = {
    x:1,
    y:2,
    z:3
};
var keys = Object.keys(o);
var values = [];
for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    values[i] = o[key];
}
// console.log(keys, values);

for (var i = 0, len = keys.length; i < len; i++) {
//    console.log(keys[i]+"="+values[i]);
}

/**
 * if you want to exclude null, undefined and non-existent elements from an array
 */
for (var i = 0; i < keys.length; i++) {
    if (!keys[i]) continue;
}

/**
 * if you want to skip only undefined and non-existent elements from an array
 */
for (var i = 0; i < keys.length; i++) {
    if (keys[i] === undefined) continue;
}

/**
 * If you want to skip only non-existent elements from an array
 */
for (var i = 0; i < keys.length; i++) {
    if (!i in keys) continue;
}

var a = [33, 4, 1111, 222];
//console.log("Alphabatical Order: " + a.sort());
/*console.log("Numerical Order: " + a.sort(function(a,b) {
    return a-b;
})); */

/**
 * Example of concat
 */
var a = [1,2,3];
a = a.concat(4,5);
a = a.concat([6,7]);
a = a.concat([8,9],[10,11]);
a = a.concat(12,[13,[14,15]])
//console.log(a);

/**
 * Example of slice
 */
//var a = [1,2,3,4,5,6,7,8,9];
//console.log(a.slice(1,3));
//console.log(a.slice(-3,-1));
//console.log(a.slice(-1,3));
//console.log(a.slice(1,-3));

/**
 * Example for splice
 */
//var a = [1,2,3,4,5,6,7,8,9];
//a.splice(0,2,'a','b');
//console.log(a);
//a.splice(2,2,[1,2]);
//console.log(a);

/**
 * Example for reduce and reduceRight
 */
//var a = [1,2,3,4,5,6,7,8,9];
/*console.log(a.reduce(function(a,b) {
    return a+b;
}, 0)); */

/**
 * Example for indexOf and lastIndexOf.
 * this function finds all occurances of a value x in array a and return an array of matching indexes
 */

var a = [1,2,3,4,5,6,3,8,3];
function findAll(a, x) {
    var results = [], pos = 0, len = a.length;
    while (pos < len) {
        pos = a.indexOf(x, pos);
        if (pos === -1) break;
        results.push(pos);
        pos = pos + 1;
    }
    return results;
}

//console.log(findAll(a, 3));

var a = {"0":"a", "1":"b","2":"c", length:3};

//console.log(Array.prototype.join.call(a, "+")); // Produces a+b+c as output

var str = "sample"
//console.log(str[3]); // prints 'l'
console.log(Array.prototype.join.call(str, "~"));
console.log(Array.prototype.filter.call(str, function(x) {
    return x.match(/[^aeiou]/);
}).join(""));
