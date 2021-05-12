"use strict";
exports.__esModule = true;
var Acronym = /** @class */ (function () {
    function Acronym() {
    }
    Acronym.parse = function (phrase) {
        var _a;
        return ((_a = phrase
            .match(/[A-Z]+[a-z]*|[a-z]+/g)) === null || _a === void 0 ? void 0 : _a.map(function (m) { return m[0].toUpperCase(); }).join("")) || "";
    };
    return Acronym;
}());
exports["default"] = Acronym;
