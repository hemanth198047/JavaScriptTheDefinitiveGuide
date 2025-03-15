/**
 * Defining javascript functions
 */

/**
 * Function to print the name and value of each property of o. Return undefined
 */
function printprops(o) {
    for (var p in o) {
        console.log(p + ":" + o[p] + "\n");
    }
}
