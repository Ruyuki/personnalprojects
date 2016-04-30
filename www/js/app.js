
angular.module('chezCecEtFlo', ['ngMaterial'])
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('teal')
            .accentPalette('light-green')
            .warnPalette('amber')
            .backgroundPalette('grey');
    })
    .controller('AppCtrl', function($scope, $mdSidenav, $log, $timeout) {
        $scope.toggleLeft = buildDelayedToggler('left');

        function buildDelayedToggler(navID) {
            return debounce(function() {
                $mdSidenav(navID)
                .toggle()
                .then(function () {
                    $log.debug("toggle " + navID + " is done");
                });
            }, 200);
        }
        
        function debounce(func, wait, context) {
            var timer;
            return function debounced() {
                var context = $scope,
                args = Array.prototype.slice.call(arguments);
                $timeout.cancel(timer);
                timer = $timeout(function() {
                    timer = undefined;
                    func.apply(context, args);
                }, wait || 10);
            };
        }
    }).controller('LeftCtrl', function ($scope, $mdSidenav, $log) {
        $scope.close = function () {
            $mdSidenav('left').close()
            .then(function () {
                $log.debug("close LEFT is done");
            });
        };
    })