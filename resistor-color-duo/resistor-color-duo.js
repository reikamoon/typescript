"use strict";
exports.__esModule = true;
exports.ResistorColor = void 0;
var ResistorColor = /** @class */ (function () {
    function ResistorColor(colors) {
        var _this = this;
        this.colorValues = [
            'black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white',
        ];
        this.value = function () {
            var resistorValue = '';
            for (var _i = 0, _a = _this.colors; _i < _a.length; _i++) {
                var col = _a[_i];
                resistorValue += '' + _this.colorValues.indexOf(col);
            }
            return parseInt(resistorValue, 10);
        };
        if (colors.length < 2) {
            throw new Error('At least two colors need to be present');
        }
        this.colors = [colors[0], colors[1]];
    }
    return ResistorColor;
}());
exports.ResistorColor = ResistorColor;
