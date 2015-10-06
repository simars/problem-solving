define(function () {
    'use strict';
    var infinity = 1 / 0;
    return function solve(totalValue, denominations) {

        // initialize holders for default calculations, with default values
        var calculations = {};
        _.each(denominations, function (denomination) {
            calculations[denomination] = 1;
        });

        // recursive definition of min denomination calculator
        function minDenomination(value) {
            if (value == null || value < 0) {
                return infinity;
            }
            if (calculations[value]) {
                return calculations[value];
            }
            var items = [];
            _.each(denominations, function (denomination) {
                items.push(minDenomination(value - denomination));
            });
            var min = _.min(items) + 1;
            calculations[value] = min;
            return min;
        }

        // invoking calculation
        return minDenomination(totalValue);
    }

});
