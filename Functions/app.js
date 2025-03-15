"use strict"

/**
 * Defining javascript functions
 */

/**
 * Examples of function declaration statements.
 */
/**
 * Function to print the name and value of each property of o. Return undefined
 */
function printprops(o) {
    for (var p in o) {
        console.log(p + ":" + o[p] + "\n");
    }
}

/**
 * Compute distance between carteesian points (x1,y1) and (x2,y2)
 */
function distance(x1,y1,x2,y2) {
    var dx = x2-x1;
    var dy = y2-y1;
    return Math.sqrt(dx*dx + dy*dy);
}

/**
 * A Recursive function that computes factorials
 */
function factorial(x) {
    if (x <= 1) return 1;
    return x * factorial(x-1);
}


/**
 * Functions examples for function definition expressions
 */
/**
 * function expression to define a function that squares its arguments.
 * Note that we assign it to a variable
 */
var square = function (x) {
    return x*x;
}
// Function expressions can include name which can be used in recursions.

var f = function fact(x) {
    if (x <= 1) return 1;
    return x * fact(x-1);
}

// Function expressions can also be used as arguments to other functions
var data = [333,44,1111,22];
data.sort(function (a,b) {
    return a-b;
});

// Function expressions are sometimes defined and invoked immediately
var tensquared = (function(x) {
    return x*x;
})(10);

// Function that identifies whether we are using strict mode or not
var strict = (function() {
    return !this;
})();

//console.log(strict);

var o = {
        m: function() {
            var self = this;
            console.log(this === o);
            f();

        function f() {
            console.log(this === o);
            console.log(self === o);
        }
    }
};
//o.m();

/**
 * Example for optional parameters
 */
// Append the names of the enumerable properties of object o to an array a and return a. if a is omitted return a new array
function getPropertyNames(o, /** Optional */ a) {
    //if (a === undefined) a = []; // If undefined use new array
    a = a || [];
    for (var prop in o) {
        a.push(prop);
    }
    return a;
}
var x = {a:1,b:2,c:3};
var a = getPropertyNames(x);
var p = [];
p = getPropertyNames(p, a);
//console.log("A:" + a)
//console.log("P:" + p)

/**
 * Function that accepts any number of arguments and then return the maximum of the passed arguments
 */
function max(/** ... */) {
    var max = Number.NEGATIVE_INFINITY;
    // Loop through the arguments, looking for and remembering the biggest
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

var largest = max(1, 10, 100, 2, 3, 1000, 4, 5, 10000, 6);
console.log(largest);