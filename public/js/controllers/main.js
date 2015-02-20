app.controller('MainCtrl', ['$scope', '$rootScope', '$location', function($scope, $rootScope,$location) {
    $rootScope.cuser={};
    $scope.logout=function(){
        $rootScope.cuser={};
        $location.url('/');
    };
}]);