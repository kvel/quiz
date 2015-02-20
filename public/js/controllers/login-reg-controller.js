app.controller('LoginRegCtrl', ['$scope','LoginSvc', '$routeParams', '$rootScope', function($scope, LoginSvc, $routeParams, $rootScope) {
   /* $scope.user={
        uname:'kumar@me.com',
        pass:'pass'
    };*/
    $scope.doLogin=function(){
        $scope.loginErrMsg="";
        if(!LoginSvc.doLogin($scope.user)){
            $scope.loginErrMsg="User name & Password Doesn't match!";        
        }else{
            $scope.loginErrMsg="";
            $rootScope.cuser=$scope.user;
            $scope.user={};
        }
    };
    $scope.doReg=function(){        
        if(LoginSvc.doReg($scope.user)){
            $scope.login.mode="signin";
            $scope.user={};
            $scope.loginErrMsg="";
        }
    };
    $scope.checkUser = function(){
        if($scope.login.mode=='register')
            return !LoginSvc.checkUser($scope.user.uname);
        return false;
    };
    
}]);