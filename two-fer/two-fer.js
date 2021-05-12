"use strict";
/**
 * This stub is provided to make it straightforward to get started.
 */
exports.__esModule = true;
exports.twoFer = void 0;
function twoFer(name) {
    if (name === void 0) { name = 'you'; }
    return "One for " + name + ", one for me.";
    // ^                 ^   ^ this is called a return type; it's the type of the
    // ^                 ^     value that is returned from this function
    // ^                 ^
    // ^                 parameters go here
    // ^
    // allows the tests to import this function and call it
    // <-- Your code goes here. You may remove all the commentary in this file.
}
exports.twoFer = twoFer;
