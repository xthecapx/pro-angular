"use strict";
var TempConverter = (function () {
    function TempConverter() {
    }
    TempConverter.convertFtoC = function (temp) {
        var value = temp.toPrecision ? temp : parseFloat(temp);
        return ((parseFloat(value.toPrecision(2)) - 32) / 1.8).toFixed(1);
    };
    return TempConverter;
}());
exports.TempConverter = TempConverter;
var TempConverter2 = (function () {
    function TempConverter2() {
    }
    TempConverter2.convertFtoC = function (temp) {
        var value = temp.toPrecision ? temp : parseFloat(temp);
        return ((parseFloat(value.toPrecision(2)) - 32) / 1.8).toFixed(1);
    };
    return TempConverter2;
}());
exports.TempConverter2 = TempConverter2;
