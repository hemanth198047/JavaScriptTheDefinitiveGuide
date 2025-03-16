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

function factorial(n) {
    if (isFinite(n) && n>0 && n == Math.round(n)) {
        if (!(n in factorial)) {
            factorial[n] = n * factorial(n-1);
        }
        return factorial[n];
    }
    else {
        return NaN;
    }
}

factorial[1] = 1;

//console.log(factorial(5));

// Define an extend function that copies the properties of its second and subsequent arguments onto its first argument.
// We workaround a bug in IE here: in many versions of IE,  the for/in loop won't enumerate an enumerable property of o if the prototype of o
// doesn't have an enumerable property with the same name. This means that properties like toString() are not handled correctly unless we explicitly check for them

var extend = (function() { // Assign the return value of this function
    // First check for the rpesence of bug before patching it
    for (var p in {toString:null}) {
        // If we get here, then the for/in loop works correctly and we return a simple version of extend() function
        return function extend(o) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var prop in source) {
                    o[prop] = source[prop];
                }
            }
            return o;
        };
    }

    // If we get here, it means that the for/in loop didn't enumerate the toString property of the test object. so, return a version of extend() function
    // that explicitly tests for the non-enumerable properties of Object.prototype

    return function patched_extend(o) {
        for (var i = 1; arguments.length; i++) {
            var source = arguments[i];
            // Copy all the enumerable properties
            for (var prop in source) o[prop] = source[prop];

            // And now check for the special properties
            for (var j = 0; j < protoprops.length; j++) {
                prop = protoprops[j];
                if (source.hasOwnProperty(prop)) o[prop] = source[prop];
            }
        }
        return o;
    };

    // This is the list of special-case properties we check for
    var protoprops = ["toString", "valueOf", "constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString"];
}());

var scope = "global scope";
  function checkscope() {
    var scope = "local scope";
    function f() {
        return scope;
    }
    return f;
  }

  //console.log(checkscope()());

  function counter(n) { // n itself acts as a private variable now
    return {
        get count() {
            return n++;
        },
        set count(val) {
            if (val < n) {
                throw TypeError();
            }
            n = val;
        }
    };
  }

  /*var c = counter(1000);
  console.log(c.count);
  console.log(c.count);
  c.count = 2000;
  console.log(c.count);
  console.log(c.count);
  c.count = 2000;
  console.log(c.count); */

  /**
   * Function that replaces a method named m in an object o with a new method that prints logs before and after calling the method
   */
function trace(o, m) {
    var original = o[m];
    o[m] = function() {
        console.log(new Date(), "Entering: ", m);
        var result = original.apply(o, arguments);
        console.log(new Date(), "Exiting: ", m);
    };
}

function test() {
    console.log("TEST");
}

//test();
var test2 = test.bind();
//test2();

/**
 * Illustration of bind with arguments
 */

let user1 = {name:'Hemanth'};
let user2 = {name:'Kumar', greet() {
//    console.log(this);
    console.log(`Hello ${this.name}`);
}};

 //user2.greet();
 // Using function wrapper
//setTimeout(function() {user2.greet();}, 1000);
// Using bind mechanism
//let greet = user2.greet.bind(user2);
//setTimeout(greet,1000);

/*user2.greet = function() {
    console.log(`Hi ${this.name}`);
}*/

//let greet1 = user2.greet.bind(user1);
//setTimeout(greet1, 1000);

/**
 * Demonstration of binding arguments to a function
 */
const greeting = function(greet, name) {
    return `${greet} ${name}`;
};
//console.log(greeting('Hi', 'Hemanth'));
// The first argument of bind should be an object that becomes "this" of the new function that is returned by bind
const morningGreeting = greeting.bind(null, 'Good Morning'); // This is called partial application

//console.log(morningGreeting('hemanth'));

const morningGreetingForHemanth = greeting.bind(null, "Good Morning", "Hemanth");
//console.log(morningGreetingForHemanth());

function toBeBindedFunction(y) { // This is the function that needs to be binded
    return this.x + y;
}
var o = {x:1}; // This is the object to which above function needs to be binded

var g = toBeBindedFunction.bind(o); // Here we are binding the function f with the object o and this bind function returns a new function which needs to be invoked
console.log("Value from the binded function: " + g(2)); // Here 2 is passed to the new function g which in turn passes this argument to the original function
// original function is calling this.x and this.x is available in the object. Since the function is binded to o, this x value of o will be available for the function that is binded.
// Hence we get the original result

/**
 * Binding a function to a object with ECMAScript 3 style
 */
function bind(f, o) {
    if (f.bind) {
        return f.bind(o);
    }
    else {
        return function() {
            f.apply(o, arguments);
        };
    }
}