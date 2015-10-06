angular.module('coin-denom', ['hljs'])
    .config(function ($stateProvider) {
        $stateProvider.state('coin-denom', {
            url: "/problem/coin-denom",
            views: {
                'coin-denom@': {
                    templateUrl: 'app/categories/problems/coin-denom/coin-denom.tmpl.html',
                    controller: 'CoinDenomCtrl as coinDenomCtrl'
                }
            }
        });
    }).controller('CoinDenomCtrl', function ($scope) {
        var coinDenomCtrl = this;
        coinDenomCtrl.totalValue = 0;
        coinDenomCtrl.denominations = {};
        coinDenomCtrl.denomination = 1;
        coinDenomCtrl.min = 1/0;

        coinDenomCtrl.addDenomination = function (value) {
            coinDenomCtrl.denominations[value] = (value);
        };

        coinDenomCtrl.removeDenomination = function (key) {
            delete coinDenomCtrl.denominations[key];
        };

        coinDenomCtrl.calculate = function() {
            coinDenomCtrl.min = require('coin-denom')(coinDenomCtrl.totalValue, coinDenomCtrl.denominations);
        };

    });
