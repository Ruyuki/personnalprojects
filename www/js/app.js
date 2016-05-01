
var chezCecEtFlo = angular.module('chezCecEtFlo', ['ngMaterial', 'ngRoute']);

// CONFIG THEME
chezCecEtFlo.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('light-green')
        .warnPalette('amber')
        .backgroundPalette('grey');
})
// CONFIG ROUTES
.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
        .when('/todo', {
            templateUrl: 'partials/todo.html',
            controller: 'TodoCtrl'
        })
        .when('/courses', {
            templateUrl: 'partials/courses.html',
            controller: 'CoursesCtrl'
        })
        .when('/chats', {
            templateUrl: 'partials/chats.html',
            controller: 'ChatsCtrl'
        })
        .otherwise({
            redirectTo: '/todo'
        });
    }
]);
