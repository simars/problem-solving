(function() {
    angular.module('problems',['model.problems', 'model.categories', 'coin-denom',  'code-highlight'])
        .config(function($stateProvider) {
            $stateProvider.state('problems', {
                url: '/category/:category/problems',
                views: {
                    'problems@' :  {
                        templateUrl: 'app/categories/problems/problems.tmpl.html',
                        controller: 'ProblemsCtrl as problemsCtrl'
                    }
                }
            });
        }).controller('ProblemsCtrl',function($state,$stateParams, CategoriesModel, ProblemsModel) {
            var problemsCtrl = this;
            var category = CategoriesModel.getCategory($stateParams.category);
            var problems = _.collect(category.items, function(item) {
               return ProblemsModel.getProblem(item) ;
            });
            problemsCtrl.category = category;
            problemsCtrl.problems = problems;
            problemsCtrl.selectProblem = function(problemKey) {
                $state.go(problemKey);
            }
        });
} )();

