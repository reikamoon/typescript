"use strict";
exports.__esModule = true;
var Anagram = /** @class */ (function () {
    function Anagram(word) {
        var _this = this;
        this.word = word;
        this.matches = function () {
            var words = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                words[_i] = arguments[_i];
            }
            return words.filter(function (w) { return _this.isAnagram(w); });
        };
        this.sortLetters = function (str) {
            return str.toLowerCase().split('').sort().join('');
        };
        this.isAnagram = function (test) {
            return _this.word.toLowerCase() !== test.toLowerCase() &&
                _this.sortLetters(_this.word) === _this.sortLetters(test);
        };
    }
    return Anagram;
}());
exports["default"] = Anagram;
