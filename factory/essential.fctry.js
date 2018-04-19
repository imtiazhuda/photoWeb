app.factory('loginFctry',function($http,$location,$rootScope){
	//var webUrl = 'http://localhost/photo/api/Web/';
	var webUrl = 'http://api.freshzbyte.com/api/Web/';
	if(localStorage.getItem("userDeatails") === null){
		localStorage.setItem("loggedInStatus", JSON.stringify(false));
	}
	if(localStorage.getItem("loggedInStatus") === null){
		localStorage.setItem("loggedInStatus", JSON.stringify(false));
	}
	var loginObj = {};
	loginObj.login = function(dataInfo){
		return $http({
			url:webUrl+'users',
			method:"post",
			data:dataInfo
		}).
		then(
			function success(response){ console.log(response);
				if(response.data.status == 'success'){
					localStorage.setItem("loggedInStatus", JSON.stringify(true));
					localStorage.setItem("userDeatails", JSON.stringify(response.data.data));
					$rootScope.$broadcast('loggedIN',{status:true});
				}
				return {status:true,userStatus:JSON.parse(localStorage.getItem("loggedInStatus")),userMsg:response.data.message}
			},
			function error(response){
				return {status:false,err:response};
			}
		)
	}
	
	
	loginObj.register = function(dataInfo){
		return $http({
			url:webUrl+'user_regs',
			method:"post",
			data:dataInfo
		}).
		then(
			function success(response){ console.log(response);
				if(response.data.status == 'success'){
					localStorage.setItem("loggedInStatus", JSON.stringify(true));
					localStorage.setItem("userDeatails", JSON.stringify(response.data.data));
					$rootScope.$broadcast('loggedIN',{status:true});
				}
				return {status:true,userStatus:JSON.parse(localStorage.getItem("loggedInStatus")),userMsg:response.data.message}
			},
			function error(response){
				return {status:false,err:response};
			}
		)
	}
	
	
	loginObj.getStatus=function(){
		return JSON.parse(localStorage.getItem("loggedInStatus"));
	}
	loginObj.getUserDetails=function(){
		return JSON.parse(localStorage.getItem("userDeatails"));
	}
	loginObj.logout=function(){
		localStorage.setItem("loggedInStatus", JSON.stringify(false));
		localStorage.setItem("userDeatails", JSON.stringify(false));
		$location.path('/');
		$rootScope.$broadcast('loggedIN',{status:false});
	}
	return loginObj; 
});