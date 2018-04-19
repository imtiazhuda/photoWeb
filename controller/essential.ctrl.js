app.controller('LoginModalInstanceCtrl', function ($uibModalInstance,$location,items,$scope,loginFctry) {
	$scope.user = {};
	$scope.userRegs = {};
	$scope.regsForm = false;
	$scope.showLoadimg = false;
	
	$scope.clickBtn = function(){
		$scope.regsForm = !$scope.regsForm;
		$scope.formErr = false;
	}
	$scope.submit=function(){ 
		$scope.showLoadimg = true;
		$scope.formErr = false;
		loginFctry.login($scope.user).then(
				function(response){
					$scope.showLoadimg = false;
					if(response.status && response.userStatus){
						$uibModalInstance.close();
						$location.path('home');
					}else{
						$scope.formErr = response.userMsg;
					}
				}
		);
	}
	
	$scope.regisSubmit = function(){
		$scope.showLoadimg = true;
		$scope.formErr = false;
		loginFctry.register($scope.userRegs).then(
				function(response){
					$scope.showLoadimg = false;
					if(response.status && response.userStatus){
						$uibModalInstance.close();
						$location.path('home');
					}else{
						$scope.formErr = response.userMsg;
					}
				}
		);
	}
	
  var $ctrl = this;
  $ctrl.items = items;
  
  
  $ctrl.ok = function () {
    //$uibModalInstance.close($ctrl.selected.item);
	//retriveData.post($scope.loginData);
	//console.log($scope.loginData);
  };

  $ctrl.cancel = function () {
    //$uibModalInstance.dismiss('cancel');
  };
});