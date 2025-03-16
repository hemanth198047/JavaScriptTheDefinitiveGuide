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
//console.log(largest);

/**
 * Function that uses object properties as arguments
 */
// Copy length elements of an array from to the array to.
// begin copying with element from_start in the from array
// and copy that element to to_start in the to array
// it is hard to remember the order of arguments
function arrayCopy(/* array */ from, /* index */ from_start,
                    /* array */ to, /* index */ to_start,
                    /* integer */ length
) {
    for (var i = from_start; i < from.length; i++) {
        to[to_start++] = from[i];
    }
}

// This version is a little inefficient, but you don't have to remember the order of the arguments, and from_start and to_start default to 0
function easyCopy(args) {
    arrayCopy(args.from, args.from_start || 0, args.to, args.to_start || 2, args.length);
}

var a =[1, 2, 3, 4];
var b = [];
easyCopy({from:a, to:b, length:4});
//console.log(b);

/**
 * Functions used as data
 */
// To demonstrate using functions as data, first we define few functions
function add(x, y) {return x+y;}
function subtraxt(x, y) { return x-y;}
function multiply(x,y) {return x*y;}
function divide(x,y) { return x/y;}

// Here's a function that takes one of the above functions as an argument and invokes it on two operands
function operate(operator, operand1, operand2) {
    return operator(operand1, operand2);
}

// We could invoke this function like this to compute the value of (2+3) + (4*5)
var i = operate(add, (operate(add, 2, 3)), (operate(multiply, 4, 5)));

// For the sake of the example, we implement the simple functions again, this time using function literals within an object literal
var operators = {
    add: function (x,y) {return x+y;},
    subtract: function (x,y) {return x-y;},
    multiply: function (x,y) { return x*y;},
    divide: function (x,y) { return x/y;},
    pow: Math.pow // Works for the predefined functions also
};

// This function takes the name of the operator, looks up that operator in the object, and then invokes it on the supplied operands.
// Note the syntax used to invoke the operator function.
function operate2(operation, operand1, operand2) {
    if (typeof operators[operation] === "function") {
        return operators[operation](operand1, operand2);
    }
    else {
        throw 'Unknown Operator';
    }
}

// Compute the value of ("hello" + "" + "world") like this
var j = operate2("add", "hello", operate2("add", " ", "world"));
var k = operate2("pow", 10, 2);
//console.log(j + "\n" + k);

