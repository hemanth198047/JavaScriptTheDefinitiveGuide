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
    console.log(keys[i]+"="+values[i]);
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
console.log("Alphabatical Order: " + a.sort());
console.log("Numerical Order: " + a.sort(function(a,b) {
    return a-b;
}));
