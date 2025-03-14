// Object Utility functions that enumerate properties

/**
 * Copy the enumerable properties of p to o, and return o.
 * If o and p have a property by the same name, o's property is overwritten
 * This function does not handle getters and setters or copy attributes
 */
function extend(o, p) {
    for (prop in p) {
        o[prop] = p[prop];
    }
    return o;
}

/**
 * Copy the enumerable properties of p to o, and return o
 * If o and p have a property with same name, o's property is left alone
 * This function does not handle getters and setters or copy attributes
 */
function merge(o, p) {
    for (prop in p) {
        if (o.hasOwnProperty(prop)) {
            continue;
        }
        o[prop] = p[prop];
    }
    return o;
}

/**
 * Remove properties from o if there is not a property with the same name in p.
 * return o
 */
function restrict(o, p) {
    for (prop in o) {
        if (!prop in p) {
            delete o[prop];
        }
    }
    return o;
}

/**
 * For each property of p, delete the property with same name in o.
 * return o
 */
function subtract(o, p) {
    for (prop in p) {
        if (prop in o) {
            delete o[prop];
        }
    }
    return o;
}

/**
 * Return a new object that holds the properties of both o and p
 * If o and p have a property of same name, the values from o are used
 */
function union(o, p) {
    return extend(extend({}, o), p);
}

/**
 * Return a new object that holds only the properties of o that also appears in p. This is something like intersection of o and p.
 * but the values of properties in p are discarded
 */
function intersection(o, p) {
    return restrict(extend({}, o), p);
}

/**
 * Returns an array that holds the names of the enumerable own properties of o.
 */
function keys(o) {
    if (typeof o !== "object") {
        throw TypeError();
    }
    var result = [];
    for (prop in o) {
        if (o.hasOwnProperty(prop)) {
            result.push(prop);
        }
    }
    return result;
}

// This object generates strictly increasing serial numbers
var serialNum = {
    // This data property holds the next serial number.
    // This $ in the property name hints that it is a private property.
    $n:0,

    // Return the current value and increment it
    get next() {
        return this.$n++;
    },

    // Set a new value to n, but only if it is larger than the current
    set next(value) {
        if (value >= this.$n) {
            this.$n = value;
        }
        else {
            throw "Serial number can only be set to a larger value";
        }
    }
};
