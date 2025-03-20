/**
 * inherit() returns a newly created object that inherits properties from the prototype object p.
 * It uses ECMAScript 5 function Object.create() if it is defined, and otherwise fallback to an older technique
 */
function inherit(p) {
    if (p == null) throw TypeError();
    if (Object.create) return Object.create(p);
    var t = typeof p;
    if (t != "object" && t != "function") throw TypeError();
    function f() {};
    f.prototype = p;
    return new f();
}

// A simple function for defining simple classes
function defineClass(constructor, methods, statics) {
    if (methods) extend(constructor.prototype, methods);
    if (statics) extend(constructor, statics);

    return constructor;
}

const student = {
    fullName: "Hemanth Kumar",
    marks: 99.9,
    printMarks: function() {
        console.log("marks = ", this.marks);
    }
};

let arr = ["apple", "mango", "banana"];


const employee = {
    calcTax1() {
        console.log("tax rate is 10%");
    },
    calcTax2: function() {
        console.log("tax rate is 20%");
    }
};

const karanArjun = {
    salary: 50000
};


karanArjun.__proto__ = employee;

//karanArjun.calcTax2();

class ToyotaCar {
    constructor(brand) {
        this.brand = brand;
        console.log("Creating new " + this.brand);
    }
    start() {
        console.log("Starting...");
    }
    
    stop() {
        console.log("Stopping...");
    }

}

//let fortuner = new ToyotaCar("Fortuner");
//let lexus = new ToyotaCar("Lexus");

class Parent {
    hello() {
        console.log("Hello");
    }
}

class Child extends Parent {

}

let obj = new Child();

class Person {
    eat() {
        console.log("Eating");
    }

    sleep() {
        console.log("Sleeping");
    }
};

class Engineer extends Person {
    work() {
        console.log("solve problems, build something");
    }
}

let hemanth = new Engineer();
hemanth.eat();
hemanth.work();
hemanth.sleep();