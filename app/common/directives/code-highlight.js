angular.module('code-highlight', [])
    .directive('codeHighlight', function () {
        return {
            scope: {
                codeHighlight: '@'
            },
            templateUrl: 'app/common/directives/code-highlight.tmpl.html',
            controller: function ($scope, $http) {
                $scope.code = $http({
                    method: 'GET',
                    url: $scope.codeHighlight,
                    cache: true
                }).success(function (data) {
                    $scope.code = data;
                    $('pre code').each(function(i, block) {
                        hljs.highlightBlock(block);
                    });
                });
            }
        }
    });