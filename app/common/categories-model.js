angular.module('model.categories', [])
    .service('CategoriesModel', function () {
        var model = this, categories = {
            'dynamic-programming': {
                id: 'dynamic-programming',
                title: 'Dynamic Programming',
                items: [
                    'coin-denom',
                    'largest-subsequence'
                ]
            },
            'combinatrics': {
                id: 'combinatrics',
                title: 'Combinatrics',
                items: [
                    'anangrams'
                ]
            },
            'trees-graphs': {
                id: 'trees-graphs',
                title: 'Trees and Graphs',
                items: [
                    'bfs', 'dfs'
                ]
            }
        };

        model.getCategories = function () {
            return categories;
        };

        model.getCategory = function(key)  {
            return categories[key];
        }


    });