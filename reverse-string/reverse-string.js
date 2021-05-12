"use strict";
exports.__esModule = true;
var ReverseString = /** @class */ (function () {
    function ReverseString() {
    }
    ReverseString.reverse = function (value) {
        return value.split('').reverse().join('');
    };
    return ReverseString;
}());
exports["default"] = ReverseString;
