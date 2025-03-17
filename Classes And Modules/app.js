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