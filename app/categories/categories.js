angular.module('categories', ['ui.router', 'model.categories'])
    .config(function ($stateProvider) {
        $stateProvider.state('categories', {
            url: "/",
            views: {
                "categories@": {
                    templateUrl: 'app/categories/categories.tmpl.html',
                    controller: 'CategoriesCtrl as categoriesCtrl'
                }
            }
        })
    })
    .controller('CategoriesCtrl', function ($state, CategoriesModel) {
        var categoriesCtrl = this;
        categoriesCtrl.categories = CategoriesModel.getCategories();
        categoriesCtrl.selectCategory = function (categoryKey) {
            categoriesCtrl.currentCategory = CategoriesModel.getCategory(categoryKey);
            $state.go('problems', {category: categoryKey});
        }
    });