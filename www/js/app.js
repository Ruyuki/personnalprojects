
angular.module('chezCecEtFlo', ['ngMaterial'])
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('teal')
            .accentPalette('light-green')
            .warnPalette('amber');
    })
    .controller('AppCtrl', function($scope) {
        $scope.title = 'test title';
    });