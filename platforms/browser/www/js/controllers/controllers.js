
var chezCecEtFlo = angular.module('chezCecEtFlo');
    
chezCecEtFlo.controller('GlobalCtrl', ['$scope', '$location', '$mdSidenav', function($scope, $location, $mdSidenav) {
    $scope.globalData = {};    
    $scope.globalData.currentAppId = null;
    $scope.globalData.currentAppName = null;
    
    $scope.navigateTo = function (path) {
        $location.path(path);
        $scope.closeMenuApps();
    };
    
    $scope.closeMenuApps = function () {
        $mdSidenav('left').close();
    };
}]);

chezCecEtFlo.controller('ToolBarCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav) {        
    $scope.toggleMenuApps = function() {
        $mdSidenav('left').toggle();
    };
}]);

chezCecEtFlo.controller('TodoCtrl', ['$scope', function ($scope) {
    $scope.globalData.currentAppName = 'To do';
    $scope.globalData.currentAppId = 'todo';
}]);

chezCecEtFlo.controller('ChatsCtrl', ['$scope', function ($scope) {
    $scope.globalData.currentAppName = 'Chats';
    $scope.globalData.currentAppId = 'chats';
    
}]);

chezCecEtFlo.controller('CoursesCtrl', ['$scope', function ($scope) {
    $scope.globalData.currentAppName = 'Courses';
    $scope.globalData.currentAppId = 'courses';
    
}]);

