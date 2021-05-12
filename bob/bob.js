"use strict";
exports.__esModule = true;
var RESPONSES = {
    question: 'Sure.',
    yell: 'Whoa, chill out!',
    yellQuestion: 'Calm down, I know what I\'m doing!',
    blank: 'Fine. Be that way!',
    other: 'Whatever.'
};
var Bob = /** @class */ (function () {
    function Bob() {
        this._remark = '';
    }
    Bob.prototype.hey = function (remark) {
        this._remark = remark;
        if (this.isAllUpperCase() && this.isQuestion()) {
            return RESPONSES.yellQuestion;
        }
        if (this.isAllUpperCase()) {
            return RESPONSES.yell;
        }
        if (this.isQuestion()) {
            return RESPONSES.question;
        }
        if (this.isSilence()) {
            return RESPONSES.blank;
        }
        return RESPONSES.other;
    };
    Bob.prototype.isAllUpperCase = function () {
        if (!Array.isArray(this._remark.match(/[A-Za-z]/g))) {
            return false;
        }
        return this._remark === this._remark.toLocaleUpperCase();
    };
    Bob.prototype.isQuestion = function () {
        return this._remark.trim().split('').pop() === '?';
    };
    Bob.prototype.isSilence = function () {
        return this._remark.replace(/[\s\t\r\n]/g, '') === '';
    };
    return Bob;
}());
exports["default"] = Bob;
