"use strict";
exports.__esModule = true;
var RomanNumerals = /** @class */ (function () {
    function RomanNumerals() {
    }
    RomanNumerals.roman = function (value) {
        var numerals = '';
        while (value > 0) {
            if (value >= 1000) {
                numerals += 'M';
                value -= 1000;
            }
            else if (value >= 900) {
                numerals += 'CM';
                value -= 900;
            }
            else if (value >= 500) {
                numerals += 'D';
                value -= 500;
            }
            else if (value >= 400) {
                numerals += 'CD';
                value -= 400;
            }
            else if (value >= 100) {
                numerals += 'C';
                value -= 100;
            }
            else if (value >= 90) {
                numerals += 'XC';
                value -= 90;
            }
            else if (value >= 50) {
                numerals += 'L';
                value -= 50;
            }
            else if (value >= 40) {
                numerals += 'XL';
                value -= 40;
            }
            else if (value >= 10) {
                numerals += 'X';
                value -= 10;
            }
            else if (value >= 9) {
                numerals += 'IX';
                value -= 9;
            }
            else if (value >= 5) {
                numerals += 'V';
                value -= 5;
            }
            else if (value >= 4) {
                numerals += 'IV';
                value -= 4;
            }
            else {
                numerals += 'I';
                value -= 1;
            }
        }
        return numerals;
    };
    return RomanNumerals;
}());
exports["default"] = RomanNumerals;
