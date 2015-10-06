angular.module('model.problems', [])
    .service("ProblemsModel", function () {
        var model = this, problems = {
            'coin-denom': {
                id: 'coin-denom',
                title: 'Coin Denomination'
            },
            'largest-subsequence': {
                id: 'largest-subsequence',
                title: 'Largest Sub-sequence'
            },
            'anangrams': {
                id: 'anangrams',
                title: 'Anangrams of a String'
            },
            'bfs': {
                id: 'bfs',
                title: 'Breadth first Search'
            },
            'dfs': {
                id: 'dfs',
                title: 'Depth first Search'
            }
        };

        model.getProblems = function () {
            return problems;
        };

        model.getProblem = function (key) {
            return problems[key];
        }

    });