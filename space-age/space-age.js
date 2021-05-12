"use strict";
exports.__esModule = true;
exports.SpaceAge = void 0;
var SpaceAge = /** @class */ (function () {
    function SpaceAge(seconds) {
        var _this = this;
        this.seconds = seconds;
        this.onEarth = function () { return +parseFloat((_this.seconds / 31556952).toFixed(2)); };
        this.onMercury = function () { return +((_this.onEarth() / 0.2408467).toFixed(2)); };
        this.onVenus = function () { return +((_this.onEarth() / 0.615197).toFixed(2)); };
        this.onMars = function () { return +((_this.onEarth() / 1.8808158).toFixed(2)); };
        this.onJupiter = function () { return +((_this.onEarth() / 11.862615).toFixed(2)); };
        this.onSaturn = function () { return +((_this.onEarth() / 29.447498).toFixed(2)); };
        this.onUranus = function () { return +((_this.onEarth() / 84.016846).toFixed(2)); };
        this.onNeptune = function () { return +((_this.onEarth() / 164.79132).toFixed(2)); };
        this.seconds = seconds;
    }
    return SpaceAge;
}());
exports.SpaceAge = SpaceAge;
