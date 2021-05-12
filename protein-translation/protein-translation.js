"use strict";
exports.__esModule = true;
exports.CODONS_LIST = void 0;
exports.CODONS_LIST = {
    "AUG": "Methionine",
    "UUU": "Phenylalanine",
    "UUC": "Phenylalanine",
    "UUA": "Leucine",
    "UUG": "Leucine",
    "UCU": "Serine",
    "UCC": "Serine",
    "UCA": "Serine",
    "UCG": "Serine",
    "UAU": "Tyrosine",
    "UAC": "Tyrosine",
    "UGU": "Cysteine",
    "UGC": "Cysteine",
    "UGG": "Tryptophan",
    "UAA": "STOP",
    "UAG": "STOP",
    "UGA": "STOP"
};
var ProteinTranslation = /** @class */ (function () {
    function ProteinTranslation() {
    }
    ProteinTranslation.proteins = function (sequence) {
        var proteins = [];
        var codons = sequence.match(/\w{3}/g);
        for (var index = 0; index < codons.length; index++) {
            var protein = exports.CODONS_LIST[codons[index]];
            if (protein === "STOP")
                break;
            proteins.push(protein);
        }
        return proteins;
    };
    return ProteinTranslation;
}());
exports["default"] = ProteinTranslation;
