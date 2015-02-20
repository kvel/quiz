app.factory('LoginSvc', ['$http','$location', '$routeParams',function($http,$location,$routeParams) {
        function validateUser(user){
            return users.hasOwnProperty(user.uname) && users[user.uname].pass===user.pass;
        }
        function addUser(user){
            if(user.uname && user.pass && !users.hasOwnProperty(user.uname)){
                users[user.uname]=user;
                return true;
            }
            else
                return false;
        }
		return {
			doLogin : function(user) {
                if(validateUser(user)){
				    $location.url("/quiz");
                    return true;
                }
                else{
                    return false;
                }
			},
			doReg : function(user) {
				return addUser(user);                           
			},
            checkUser : function(uname){
                return !users.hasOwnProperty(uname);
            }
        }
	}]);