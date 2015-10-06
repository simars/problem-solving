angular.module('problem', ['ui.router', 'categories', 'problems'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('root', {
                url: '/',
                abstract: true,
                controller: 'MainCtrl'
            });

        $urlRouterProvider.otherwise('/');

    })
    .controller('MainCtrl', function ($scope, $rootScope, $state) {

        $scope.previousState = "categories";
        $rootScope.$on('$stateChangeSuccess', function (ev, to, toParams, from, fromParams) {
            $scope.previousState = from.name;
            $scope.currentState = to.name;
            $scope.toParams = toParams;
            $scope.fromParams = fromParams;
        });

        var mainCtrl = this;
        $scope.back = function () {
            $scope.nextState = $scope.currentState;
            $scope.nextParams = $scope.toParams;
            $state.go($scope.previousState, $scope.fromParams);
        };
        $scope.forward = function () {
            $state.go($scope.nextState, $scope.nextParams);
        }
    });

window.solutions = {};
