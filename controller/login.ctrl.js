

app.controller('login',function($scope,$location,loginFctry){
	$scope.user = {};
	$scope.submit=function(){ 
		$scope.showLoadimg = true;
		$scope.formErr = false;
		loginFctry.login($scope.user).then(
				function(response){
					$scope.showLoadimg = false;
					if(response.status && response.userStatus){
						$location.path('home');
					}else{
						$scope.formErr = response.userMsg;
					}
				}
		);
	}
});